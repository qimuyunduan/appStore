/**
 * Created by ��ľ�ƶ� on 12/20/2015.
 */
/**
 * learning-gulp - gulpfile.js
 * Created by mengdesen on 15/4/14.
 * Last modified by nieweidong on 2015/04/15
 */

'use strict';

var gulp = require('gulp');
//var uglify = require('gulp-uglify');
//var concat = require('gulp-concat');
//var shrink = require('gulp-cssshrink');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
// ��̬�ļ�����ϲ�
//var webpack = require('gulp-webpack');
// �ϴ���ţsdn
//var qn = require('gulp-qn');
// MD5��
//var rev = require('gulp-rev');
//var revCollector = require('gulp-rev-collector');
//var runSequence = require('run-sequence');

//var config = require('./webpack.config');
/*var qiniu = {
    accessKey: '6sBCo463jJOCnBIYX__uy9avZ7C2hj_MHb-ffKAr',
    secretKey: '3vPk7fB0HcwL5V9E2AErHuR19HM389eYqdvQcncL',
    bucket: 'xdemo',
    domain: 'http://7xik9a.com1.z0.glb.clouddn.com'
};*/

/*gulp.task('js', function () {
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
});*/
gulp.task('watch', function () {
    gulp.watch('./public/stylesheets/style1.css', ['browserSync']);

});
gulp.task('browserSync', function() {
    browserSync({
        files: "./views/index.html,./public/**/.css",
        server: {
            baseDir: "./"
        }
    });
});
/*gulp.task('publish-html', function () {
    return gulp.src(['./build/rev/!**!/!*.json', './index.html'])
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
});*/

