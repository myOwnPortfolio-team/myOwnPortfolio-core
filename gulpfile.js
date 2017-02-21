var path = require('path');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.sass = require('gulp-ruby-sass');
plugins.webpack = require('webpack-stream');

var src = './modules/*'
var dest = './dist';
var configWebpack = {
  output: {
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.resolve(__dirname, 'app/classes'),
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
  return gulp.src('./app/index.html')
  .pipe(gulp.dest(dest))
  .pipe(plugins.livereload());
});

gulp.task('webpack', function() {
  return gulp.src('./app/classes/index.jsx')
  .pipe(plugins.webpack(configWebpack))
  .pipe(gulp.dest(dest + '/script'))
  .pipe(plugins.livereload());
});

// gulp.task('compileCSS', () =>
//     sass(source + '/ressources/styles/index.scss', {
//       sourcemap: false,
//       require: ["sass-json-vars"]
//     })
//     .on('error', sass.logError)
//     .pipe(plugins.csscomb())
//     .pipe(plugins.cssbeautify({indent: '  '}))
//     .pipe(plugins.autoprefixer())
//     .pipe(gulp.dest(destination + '/ressources/styles/'))
//     .pipe(livereload())
// );



// gulp.task('minifyCSS', function () {
//   return gulp.src(destination + '/ressources/styles/index.css')
//     .pipe(plugins.csso())
//     .pipe(plugins.rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest(destination + '/ressources/styles/'));
// });


// gulp.task('minifyJS', function() {
//   return gulp.src(destination + '/ressources/scripts/bundle.js')
//     .pipe(plugins.uglify())
//     .pipe(plugins.rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest(destination + '/ressources/scripts/'));
// });


// gulp.task('minifyHTML', function() {
//   return gulp.src(destination + '/index.html')
//     .pipe(plugins.htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest(destination + '/'));
// });




// gulp.task('watch', function () {
//   livereload.listen();
//   gulp.watch(source + '/ressources/styles/*.scss', ['compileCSS']);
//   gulp.watch(source + '/ressources/styles/*/*.scss', ['compileCSS']);
//   gulp.watch(source + '/ressources/styles/*/*/*.scss', ['compileCSS']);
//   gulp.watch(source + '/ressources/app/*.js', ['webpack']);
//   gulp.watch(source + '/ressources/app/*/*.js', ['webpack']);
//   gulp.watch(source + '/ressources/app/*/*/*.js', ['webpack']);
//   gulp.watch(source + '/ressources/app/*.jsx', ['webpack']);
//   gulp.watch(source + '/ressources/data/*.json',  ['webpack']);
//   gulp.watch(source + '/ressources/data/*/*.json',  ['webpack']);
//   gulp.watch(source + '/index.html',  ['copyHTML']);
// });


gulp.task('build', ['webpack', 'copyHTML']);
// gulp.task('build', ['webpack', 'compileCSS', 'copyHTML']);
// gulp.task('minify', ['minifyCSS', 'minifyJS', 'minifyHTML']);
// gulp.task('prod', ['build',  'minify']);
gulp.task('default', ['build']);
