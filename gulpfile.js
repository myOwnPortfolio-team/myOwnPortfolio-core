var path = require('path');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.sass = require('gulp-ruby-sass');
plugins.webpack = require('webpack-stream');

var src = './app'
var dest = './dist';
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

gulp.task('copyHTML', function() {
  return gulp.src(src + '/index.html')
  .pipe(gulp.dest(dest))
  .pipe(plugins.livereload());
});

gulp.task('webpack', function() {
  return gulp.src(src + '/index.jsx')
  .pipe(plugins.webpack(configWebpack))
  .pipe(gulp.dest(dest + '/script'))
  .pipe(plugins.livereload());
});

gulp.task('compileCSS', () =>
    plugins.sass(src + '/style/index.scss', {
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

  gulp.watch(src + '/modules/*/*.jsx', ['webpack']);
  gulp.watch(src + '/classes/*.jsx', ['webpack']);
  gulp.watch(src + '/*.jsx', ['webpack']);

  gulp.watch(src + '/config/*.json',  ['webpack']);
  gulp.watch(src + '/config/*/*.json',  ['webpack']);

  gulp.watch(src + '/index.html',  ['copyHTML']);
});

gulp.task('build', ['webpack', 'compileCSS', 'copyHTML', 'dependancies']);
gulp.task('minify', ['minifyCSS', 'minifyJS']);
gulp.task('prod', ['build',  'minify']);
gulp.task('default', ['build']);
