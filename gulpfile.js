
'use strict';

var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var shrink = require('gulp-minify-css');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
//var webpack = require('gulp-webpack');
//var config = require('./webpack.config');
var rev = require('gulp-rev');////- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');//- 路径替换
var runSequence = require('run-sequence');//Run a series of dependent gulp tasks in order




gulp.task('publish-js', function () {
    return gulp.src(['./public/javascripts/classie.js','./public/javascripts/main.js'])
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./public/javascripts/dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./public/javascripts'));
});
gulp.task('publish-css', function () {
    return gulp.src(['./public/stylesheets/style.css'])
        .pipe(shrink())
        .pipe(rev())
        .pipe(gulp.dest('./public/stylesheets/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./public/stylesheets'));
});
gulp.task('clean',function() {
    del('./public/stylesheets/style-*.css');
});
gulp.task('publish-html', function () {
    return gulp.src(['./public/**/*.json', './public/index.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./public/'));
});

gulp.task('publish', function (callback) {
    runSequence('clean',
        ['publish-css', 'publish-js'],
        'publish-html',
        callback);
});
gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "localhost:3000",
        files: "./public/index.html,./public/**/style.css",
        reload_delay:"5000"
    });
});
gulp.task('watch', function () {
    gulp.watch('./public/stylesheets/style.css', ['publish']);
});
gulp.task('default',['watch']);
