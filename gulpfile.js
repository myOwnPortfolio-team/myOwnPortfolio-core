const path = require('path');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

plugins.exec = require('gulp-exec');
plugins.sass = require('gulp-ruby-sass');
plugins.webpack = require('webpack-stream');

// var webpack = require('webpack');
const src = './app';
const dest = './dist';

const execOptions = {
  continueOnError: false, // default = false, true means don't emit error event
  pipeStdout: false, // default = false, true means stdout is written to file.contents
  customTemplatingThing: 'test', // content passed to gutil.template()
};

const execReportOptions = {
  err: true, // default = true, false means don't write err
  stderr: true, // default = true, false means don't write stderr
  stdout: true, // default = true, false means don't write stdout
};

const configWebpack = {
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, '/node_modules/react'),
    },
  },
};

gulp.task('documentation', () => gulp.src('./etc/scripts/generate_doc.js')
  .pipe(plugins.exec('node <%= file.path %>', execOptions))
  .pipe(plugins.exec.reporter(execReportOptions))
  .pipe(plugins.exec('browserify ./docs/json_schema/script.js -o ./docs/json_schema/bundle.js', execOptions))
  .pipe(plugins.exec.reporter(execReportOptions)));

gulp.task('copyHTML', () => gulp.src(`${src}/index.html`)
  .pipe(gulp.dest(dest))
  .pipe(plugins.livereload()));

gulp.task('copyFonts', () => gulp.src('./node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest(`${dest}/fonts`))
  .pipe(plugins.livereload()));

gulp.task('webpack', () => gulp.src(`${src}/index.jsx`)
  .pipe(plugins.webpack(configWebpack))
  .pipe(gulp.dest(`${dest}/script`))
  .pipe(plugins.livereload()));

gulp.task('compileCSS', () => plugins.sass(`${src}/index.scss`, {
  sourcemap: false,
  require: ['sass-json-vars'],
}).on('error', plugins.sass.logError)
  .pipe(plugins.csso())
  .pipe(gulp.dest(`${dest}/style/`))
  .pipe(plugins.livereload()),
);

gulp.task('generateModulesList', () => gulp.src('./etc/scripts/generate_modules_list.js')
  .pipe(plugins.exec('node <%= file.path %>', execOptions))
  .pipe(plugins.exec.reporter(execReportOptions))
  .pipe(plugins.livereload()));

gulp.task('serverStart', () => gulp.src('./etc/scripts/express.js')
  .pipe(plugins.exec('node <%= file.path %>', execOptions))
  .pipe(plugins.exec.reporter(execReportOptions)));

gulp.task('watch', () => {
  plugins.livereload.listen();
  gulp.watch(`${src}/**/*.scss`, ['compileCSS']);
  gulp.watch(`${src}/**/*.json`, plugins.sequence('generateModulesList', ['webpack', 'compileCSS']));
  gulp.watch(`${src}/**/*.jsx`, ['webpack']);
  gulp.watch(`${src}/index.html`, ['copyHTML']);
  gulp.watch('./etc/node/*.js', ['generateModulesList']);
});

gulp.task('build', plugins.sequence('generateModulesList', 'webpack', ['compileCSS', 'copyHTML', 'copyFonts']));
gulp.task('dev', ['build', 'serverStart', 'watch']);
gulp.task('prod', plugins.sequence('build', 'minify'));
gulp.task('default', ['build']);
