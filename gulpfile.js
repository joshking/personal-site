var gulp          = require('gulp');

gulp.task('styles', function() {
    gulp.src('src/app/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/app/styles/**/*.scss',['style']);
});