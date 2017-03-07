'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var util = require('gulp-util');
var makeumd = require('./makeumd.js');

/**
 * 公共错误处理函数
 * 使用示例：
 *  .pipe(uglify().on('error', errHandle))
    .pipe(rename('u.min.js'))
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
var errHandle = function ( err ) {
    // 报错文件名
    var fileName = err.fileName;
    // 报错类型
    var name = err.name;
    // 报错信息
    var message = err.message;
    // 出错代码位置
    var loc = err.loc;

    var logInfo = '报错文件：' + fileName + '报错类型：' + name + '出错代码位置：' + loc.line + ',' + loc.column;

    util.log( logInfo );

    this.end();
}


var globs = {
    js:[
        'src/js/treeComp.js'
    ],
    css: 'src/css/tree.css'
};

gulp.task('js-init', function() {
    return gulp.src(globs.js)
        .pipe(concat('tinper-neoui-tree.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .on('error', errHandle)
        .pipe(rename('tinper-neoui-tree.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', ['js-init'], function(){
     makeumd.init([
            'dist/tinper-neoui-tree.js',
            'dist/tinper-neoui-tree.min.js',
        ]);
});

gulp.task('css-init',function(){
    return gulp.src(globs.css)
        .pipe(rename('tinper-neoui-tree.css'))
        .pipe(gulp.dest('dist'))
        .pipe(minifycss())
        .pipe(rename('tinper-neoui-tree.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', ['css-init'], function(){
     makeumd.init([
            'dist/tinper-neoui-tree.css',
            'dist/tinper-neoui-tree.min.css',
        ]);
});

gulp.task('distWatch',function(){
    gulp.watch(globs.js,['js']);
    gulp.watch(globs.css,['css'])
})

gulp.task('dev', ['js', 'css'], function(){
    gulp.run('distWatch');
});



gulp.task('dist', ['js', 'css'], function(){
});
