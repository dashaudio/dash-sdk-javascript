var gulp = require('gulp');
var rename = require('gulp-rename');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');
var json = require('rollup-plugin-json');
var babel = require('rollup-plugin-babel');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var alias = require('rollup-plugin-alias');
var mocha = require('gulp-mocha');

require('babel-register');

var NAME = 'Dash';
var ROOT = 'source/dash.js';

gulp.task('source:node', () => {
  return rollup({
      format: 'cjs',
      entry: ROOT,
      plugins: [
        json(),
        babel({
          presets: ['es2015-rollup'],
          babelrc: false
        })
      ]
    })
    .pipe(source('dash.node.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('source:browser', () => {
  return rollup({
      format: 'iife',
      moduleName: NAME,
      entry: ROOT,
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
    })
    .pipe(source('dash.browser.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('source:next', () => {
  return rollup({
      format: 'es6',
      moduleName: NAME,
      entry: ROOT,
      plugins: [
        resolve({
          browser: true
        }),
        commonjs(),
        json(),
        babel({
          presets: ['es2015-rollup'],
          babelrc: false
        })
      ]
    })
    .pipe(source('dash.next.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('test', () => {
  return gulp.src('source/**/*.spec.js')
    .pipe(mocha());
});

gulp.task('watch', ['test'], () => {
  gulp.watch(['source/**/*'], ['test']);
});

gulp.task('build', ['source:node', 'source:browser', 'source:next'])
gulp.task('default', ['build']);
