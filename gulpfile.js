var gulp = require('gulp');
var less = require('gulp-less'),
connect = require('gulp-connect'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('gulp-less', function() {
  // 将你的默认的任务代码放在这
   gulp.src(['./less/main.less'])
        // .pipe(sourcemaps.init())
        .pipe(less({compress: true}))
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'));
});

gulp.task('connect', function() {
    connect.server({ //地址，可不写，不写的话，默认localhost
        port: 3000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});

gulp.task('testAutoFx', function () {
    gulp.src('./css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./less/**/*.less', ['gulp-less']); //当所有less文件发生改变时，调用testLess任务
    gulp.watch('./css/main.css',['html'])
    gulp.watch('./js/*.js', ['html']); //监控js文件
    gulp.watch(['./*.html'], ['html']); //监控html文件
});

gulp.task('server', ['connect', 'watch']);
