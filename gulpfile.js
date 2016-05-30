'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var util = require('gulp-util');

/**
 * 公共错误处理函数
 * 使用示例：
 *  .pipe(uglify())
 .on('error', errHandle)
 .pipe(rename('u.min.js'))
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
function errHandle(err) {
    util.log(err.fileName + '文件编译出错，出错行数为' + err.lineNumber + '，具体错误信息为：' + err.message);
    this.end();
};


var globs = {
    js: {
        js:[
            'js/treeComp.js'
        ],
        dtJs:[
            'dist/js/tree.js',
            'js/dtJs/tree.js'
        ]
    },
    css: 'css/tree.css'
};

gulp.task('Js', function() {
    return gulp.src(globs.js.js)
        .pipe(concat('tree.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .on('error', errHandle)
        .pipe(rename('tree.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('uJs', ['Js'], function(){
    return gulp.src(globs.js.dtJs)
        .pipe(concat('u-tree.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .on('error', errHandle)
        .pipe(rename('u-tree.min.js'))
        .pipe(gulp.dest('dist/js'));
})

gulp.task('css',function(){
    return gulp.src(globs.css)
        .pipe(gulp.dest('dist/css'))
        .pipe(minifycss())
        .pipe(rename('tree.min.css'))
        .pipe(gulp.dest('dist/css'));
})


gulp.task('dist', ['uJs', 'css'], function(){
});
