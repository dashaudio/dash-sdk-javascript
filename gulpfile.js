var gulp = require('gulp');
var rename = require('gulp-rename');
var rollup = require('gulp-rollup');
var json = require('rollup-plugin-json');
var babel = require('rollup-plugin-babel');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var alias = require('rollup-plugin-alias');
var mocha = require('gulp-mocha');
var documentation = require('gulp-documentation');

var NAME = 'Dash';
var ROOT = 'source/dash.js';

gulp.task('source:node', () => {
  return gulp.src(ROOT)
   .pipe(rollup({
      format: 'cjs',
      plugins: [
        json(),
        babel({
          presets: ['es2015-rollup'],
          babelrc: false
        })
      ]
    }))
    .pipe(rename({ suffix: '.node' }))
    .pipe(gulp.dest('build'));
});

gulp.task('source:browser', () => {
  return gulp.src(ROOT)
    .pipe(rollup({
      format: 'iife',
      moduleName: NAME,
      plugins: [
        json(),
        babel({
          presets: ['es2015-rollup'],

          babelrc: false
        }),
        resolve({
          browser: true
        }),
        commonjs()
      ]
    }))
    .pipe(rename({ suffix: '.browser' }))
    .pipe(gulp.dest('build'));
});

gulp.task('test', () => {
  require('babel-register');
  return gulp.src('source/**/*.spec.js')
    .pipe(mocha());
});

gulp.task('watch', ['test'], () => {
  gulp.watch(['source/**/*'], ['test']);
});

gulp.task('build', ['source:node', 'source:browser'])
gulp.task('default', ['build']);
