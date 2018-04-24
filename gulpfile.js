
var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    data = require('gulp-data'),
    merge = require('merge-stream'),
    chalk = require('chalk'),
    server = require('./server')

/* Available tasks */
gulp.task('clean', _clean)
gulp.task('symlink', _symlink)
gulp.task('copy', _copy) // Needed for npm packaging which cannot handle symlinks
gulp.task('less', _less)
gulp.task('lessComponent', _lessComponent)
gulp.task('tsComponent', _tsComponent)
gulp.task('jadeComponent', _jadeComponent)
gulp.task('fullComponent', _fullComponent)
gulp.task('test', _test)

gulp.task('component', gulp.series(['lessComponent', 'tsComponent', 'jadeComponent', 'fullComponent'], cleanComponent))
gulp.task('build', gulp.series('clean', ['copy', 'less', 'component'], function(done) {
    done();
}))
gulp.task('prepublish', gulp.series('test', 'build',  function(done) {
    done();
    // need this, otherwise the task does not return...!?
    process.exit(0);
}))
gulp.task('default', gulp.series('build', server))


/* File watches */
gulp.watch('src/less/**/*', gulp.series(['less']))
gulp.watch('src/views/component/**/*', gulp.series(['component']))


/* Methods */
function _clean() {
 return gulp.src('{dist,tmp}', {read: false})
    .pipe(clean());
}
function _symlink() {
  var stream1 = gulp.src('src/{images,js,less,starter-kit}')
    .pipe(gulp.symlink('dist'));
  var stream2 = gulp.src('src/views/template')
    .pipe(gulp.symlink('dist/html'))
  return merge(stream1, stream2)
}
function _copy() {
    var stream1 = gulp.src('src/{images,js,less,starter-kit}/**')
        .pipe(gulp.dest('dist'));
    var stream2 = gulp.src('src/views/template')
        .pipe(gulp.dest('dist/html'));
    var stream3 = gulp.src('src/views/base-components.html')
        .pipe(gulp.dest('dist/html'))
    return merge(stream1, stream2, stream3)
}
function _less() {
  return gulp.src(['src/less/*.less', 'src/less/corporate-ui/{core,fonts,icons,brands}.less'])
    .pipe(sourcemaps.init())
    .pipe(less({
      globalVars: {
        lib_path: 'node_modules'
      }
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
}
function cleanComponent() {
  return gulp.src('tmp', {read: false})
    .pipe(clean())
}
function _lessComponent() {
  return gulp.src('src/views/component/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('tmp/component'))
}
function _tsComponent() {
  return gulp.src('src/views/component/**/*.ts')
    .pipe(typescript())
    .pipe(gulp.dest('tmp/component'))
}
function _jadeComponent() {
  return gulp.src('src/views/component/**/*.{jade,html,md}')
    .pipe(gulp.dest('tmp/component'))
}
function _fullComponent() {
  return gulp.src('tmp/**/**/index.jade')
    .pipe(data(function(file) {
      var index = path.dirname(file.path).lastIndexOf(path.sep) + 1,
          name = path.dirname(file.path).substring(index),
          isVariation = !isNaN( parseFloat(name) ),
          isSubComponent = file.path.split('tmp')[1].split(path.sep).length > 5;
          prefix = 'c-';

      if (isVariation) {
        var parentPath = path.dirname(file.path).split(path.sep + 'variations')[0],
            parentindex = parentPath.lastIndexOf(path.sep) + 1,
            parentName = parentPath.substring(parentindex);

        name = parentName + '-variation-' + name;
      } else {

        if (isSubComponent) {
          console.log(name)
          prefix = '';
        }
      }

      return { name: prefix + name || 'test' };
    }))
    .pipe(jade({ pretty: true }))
    .pipe(rename(function(_path) {
      var index = _path.dirname.lastIndexOf(path.sep) + 1;
      _path.basename = _path.dirname.substring(index);
      if ( !isNaN( parseFloat(_path.basename) ) ) {
        _path.basename = '..' + path.sep + '..' + path.sep + 'variation-' + _path.basename;
      }
    }))
    .pipe(gulp.dest('dist/html'))
}

function _test(done) {
  console.log(chalk.red("Here we should do some testing????"));
  done();
}

