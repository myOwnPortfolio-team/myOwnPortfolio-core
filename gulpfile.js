var path = require('path');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.exec = require('gulp-exec');
plugins.sass = require('gulp-ruby-sass');
plugins.webpack = require('webpack-stream');

var src = './app'
var dest = './dist';

var execOptions = {
  continueOnError: false, // default = false, true means don't emit error event
  pipeStdout: false, // default = false, true means stdout is written to file.contents
  customTemplatingThing: "test" // content passed to gutil.template()
};

var execReportOptions = {
  err: true, // default = true, false means don't write err
  stderr: true, // default = true, false means don't write stderr
  stdout: true // default = true, false means don't write stdout
};

var configWebpack = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?$/,
        include : path.resolve(__dirname, 'app'),
        loader : 'babel'
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};

gulp.task('documentation', function() {
  return gulp.src('./tools/node/generate_doc.js')
    .pipe(plugins.exec('node <%= file.path %>', execOptions))
    .pipe(plugins.exec.reporter(execReportOptions))
    .pipe(plugins.exec('browserify ./docs/json_schema/script.js -o ./docs/json_schema/bundle.js', execOptions))
    .pipe(plugins.exec.reporter(execReportOptions))
});

gulp.task('copyHTML', function() {
  return gulp.src(src + '/index.html')
  .pipe(gulp.dest(dest))
  .pipe(plugins.livereload());
});

gulp.task('copyFonts', function() {
  return gulp.src('./node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest(dest + "/fonts"))
  .pipe(plugins.livereload());
});

gulp.task('webpack', function() {
  return gulp.src(src + '/index.jsx')
  .pipe(plugins.webpack(configWebpack))
  .pipe(gulp.dest(dest + '/script'))
  .pipe(plugins.livereload());
});

gulp.task('compileCSS', () =>
    plugins.sass(src + '/index.scss', {
      sourcemap: false,
      require: ["sass-json-vars"]
    })
    .on('error', plugins.sass.logError)
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(dest + '/style/'))
    .pipe(plugins.livereload())
);

gulp.task('minifyCSS', function () {
  return gulp.src(dest + '/style/index.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(dest + '/style/'));
});

gulp.task('minifyJS', function() {
  return gulp.src(dest + '/script/bundle.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(dest + '/script/'));
});

gulp.task('generateModulesList', function() {
  return gulp.src('./tools/node/generate_modules_list.js')
    .pipe(plugins.exec('node <%= file.path %>', execOptions))
    .pipe(plugins.exec.reporter(execReportOptions))
    .pipe(plugins.livereload());
});

gulp.task('serverStart', function() {
  return gulp.src('./tools/node/express.js')
    .pipe(plugins.exec('node <%= file.path %>', execOptions))
    .pipe(plugins.exec.reporter(execReportOptions));
});

gulp.task('dependancies', function() {
  gulp.src("node_modules/bootstrap/dist/js/bootstrap.min.js")
    .pipe(gulp.dest(dest + ("/script")));
  gulp.src("node_modules/jquery/dist/jquery.min.js")
    .pipe(gulp.dest(dest + ("/script")));
  gulp.src("node_modules/tether/dist/js/tether.min.js")
    .pipe(gulp.dest(dest + ("/script")));
});

gulp.task('watch', function () {
  plugins.livereload.listen();

  gulp.watch(src + '/style/*/*.scss', ['compileCSS']);
  gulp.watch(src + '/style/*.scss', ['compileCSS']);
  gulp.watch(src + '/modules/*/style.scss', ['compileCSS']);
  gulp.watch(src + '/modules/*/json_config/style.json', ['compileCSS']);

  gulp.watch(src + '/modules/*/*/*.jsx', ['webpack']);
  gulp.watch(src + '/modules/*/*.jsx', ['webpack']);
  gulp.watch(src + '/classes/*.jsx', ['webpack']);
  gulp.watch(src + '/*.jsx', ['webpack']);

  gulp.watch(src + '/config/*.json',  plugins.sequence('generateModulesList', 'webpack'));
  gulp.watch(src + '/config/*/*.json',  ['webpack']);
  gulp.watch(src + '/modules/*/*.json',  ['webpack', 'compileCSS']);

  gulp.watch('./tools/node/*.js', ['generateModulesList']);

  gulp.watch(src + '/index.html',  ['copyHTML']);
});

gulp.task('build', plugins.sequence('generateModulesList', 'webpack', ['compileCSS', 'copyHTML', 'copyFonts', 'dependancies']));
gulp.task('dev', ['build', 'serverStart', 'watch']);
gulp.task('minify', ['minifyCSS', 'minifyJS']);
gulp.task('prod', plugins.sequence('build',  'minify'));
gulp.task('default', ['build']);
