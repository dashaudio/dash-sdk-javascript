var gulp = require('gulp');
var rename = require('gulp-rename');
var rollup = require('gulp-rollup');
var json = require('rollup-plugin-json');
var babel = require('rollup-plugin-babel');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var alias = require('rollup-plugin-alias');
var mocha = require('gulp-mocha');
var docco = require('gulp-docco');

var SDK_ENTRY_POINT = 'source/dash.js';
var SDK_NAME = 'Dash';

gulp.task('source:es6', () => {
  return gulp.src(SDK_ENTRY_POINT)
    .pipe(rollup({
      format: 'es6',
      plugins: [
        json(),
        resolve({ browser: true }),
        commonjs()
      ]
    }))
    .pipe(rename({ suffix: '.es6' }))
    .pipe(gulp.dest('build'));
});

gulp.task('source:cjs', () => {
  return gulp.src(SDK_ENTRY_POINT)
   .pipe(rollup({
      format: 'cjs',
      plugins: [json()]
    }))
    .pipe(rename({ suffix: '.cjs' }))
    .pipe(gulp.dest('build'));
});

gulp.task('source:sfx', () => {
  return gulp.src(SDK_ENTRY_POINT)
    .pipe(rollup({
      format: 'iife',
      moduleName: SDK_NAME,
      plugins: [
        json(),
        babel({ presets: ['es2015-rollup'], babelrc: false }),
        resolve({ browser: true }),
        commonjs()
      ]
    }))
    .pipe(rename({ suffix: '.sfx' }))
    .pipe(gulp.dest('build'));
});

gulp.task('docs', () => {
  gulp.src('source/**/*.js')
    .pipe(docco())
    .pipe(gulp.dest('build/docs'));
});

gulp.task('test', () => {
  require('babel-register');
  return gulp.src('source/**/*.spec.js')
    .pipe(mocha());
});

gulp.task('watch', ['test'], () => {
  gulp.watch(['source/**/*'], ['test']);
});

gulp.task('build', ['source:es6', 'source:cjs', 'source:sfx', 'docs'])
gulp.task('default', ['build']);
