var gulp = require('gulp');
var rename = require('gulp-rename');
var rollup = require('gulp-rollup');
var json = require('rollup-plugin-json');
var babelPlugin = require('rollup-plugin-babel');
var babel = require('gulp-babel');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var alias = require('rollup-plugin-alias');
var mocha = require('gulp-mocha');

require('babel-register');

var NAME = 'Dash';
var ROOT = 'source/dash.js';

gulp.task('source:node', () => {
  return gulp.src(['source/**/*.js', '!source/**/*.spec.js'])
    .pipe(babel({ presets: ['es2015'], plugins: ["add-module-exports"] }))
    .pipe(gulp.dest('build/node'));
});

gulp.task('source:browser', () => {
  // TODO
});

// gulp.task('source:node', () => {
//   return gulp.src(ROOT)
//    .pipe(rollup({
//       format: 'cjs',
//       plugins: [
//         json(),
//         babel({
//           presets: ['es2015-rollup'],
//           babelrc: false
//         })
//       ]
//     }))
//     .pipe(rename({ suffix: '.node' }))
//     .pipe(gulp.dest('build'));
// });

// gulp.task('source:browser', () => {
//   return gulp.src(ROOT)
//     .pipe(rollup({
//       format: 'iife',
//       moduleName: NAME,
//       plugins: [
//         json(),
//         babelPlugin({
//           presets: ['es2015-rollup'],
//
//           babelrc: false
//         }),
//         resolve({
//           browser: true
//         }),
//         commonjs()
//       ]
//     }))
//     .pipe(rename({ suffix: '.browser' }))
//     .pipe(gulp.dest('build'));
// });

gulp.task('test', () => {
  return gulp.src('source/**/*.spec.js')
    .pipe(mocha());
});

gulp.task('watch', ['test'], () => {
  gulp.watch(['source/**/*'], ['test']);
});

gulp.task('build', ['source:node', 'source:browser'])
gulp.task('default', ['build']);
