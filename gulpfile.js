const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

plugins.exec = require('gulp-exec');
plugins.sass = require('gulp-ruby-sass');
plugins.webpack = require('webpack-stream');

const src = './app';

gulp.task('webpack', () => gulp.src(`${src}/index.jsx`)
  .pipe(plugins.exec('npm run build'))
  .pipe(plugins.exec.reporter())
  .pipe(plugins.livereload()));

gulp.task('compileCSS', () => gulp.src(`${src}/index.scss`)
  .pipe(plugins.exec('npm run sass'))
  .pipe(plugins.exec.reporter())
  .pipe(plugins.livereload()));

gulp.task('generateModulesList', () => gulp.src('./etc/scripts/generate_modules_list.js')
  .pipe(plugins.exec('npm run compile'))
  .pipe(plugins.exec.reporter())
  .pipe(plugins.livereload()));

gulp.task('watch', () => {
  plugins.livereload.listen();
  gulp.watch(`${src}/**/*.scss`, ['compileCSS']);
  gulp.watch(`${src}/**/*.json`, plugins.sequence('generateModulesList', ['webpack', 'compileCSS']));
  gulp.watch(`${src}/**/*.jsx`, ['webpack']);
  gulp.watch('./etc/node/*.js', ['generateModulesList']);
});

gulp.task('build', plugins.sequence('generateModulesList', 'webpack', 'compileCSS'));
gulp.task('default', ['build']);
