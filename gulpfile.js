
'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var shrink = require('gulp-cssshrink');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var webpack = require('gulp-webpack');

var qn = require('gulp-qn');

var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var runSequence = require('run-sequence');

var config = require('./webpack.config');


gulp.task('js', function () {
    gulp.src('./js')
        .pipe(webpack(config))
        .pipe(gulp.dest('./build'));
});

gulp.task('css', function () {
    gulp.src(['./public/stylesheets/style1.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./build'));
});
gulp.task('publish-js', function () {
    return gulp.src(['./js'])
        .pipe(webpack(config))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./build'))
        .pipe(qn({
            qiniu: qiniu,
            prefix: 'gmap'
        }))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/rev/js'));
});
gulp.task('publish-css', function () {
    return gulp.src(['./css/main.css', './css/view.css'])
        .pipe(concat('app.css'))
        .pipe(shrink())
        .pipe(rev())
        .pipe(gulp.dest('./build'))
        .pipe(qn({
            qiniu: qiniu,
            prefix: 'gmap'
        }))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build/rev/css'));
});
gulp.task('watch', function () {
    gulp.watch('./public/stylesheets/style1.css', ['browserSync']);

});
gulp.task('browserSync', function() {
    browserSync({
        files: "./public/index.html,./public/**/.css",
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('publish-html', function () {
    return gulp.src(['./build/rev/**/*.json', './index.html'])
        .pipe(revCollector({
            dirReplacements: {
                'build/': ''
            }
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('publish', function (callback) {
    runSequence(
        ['publish-css', 'publish-js'],
        'publish-html',
        callback);
});


