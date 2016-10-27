var gulp = require('gulp');
// var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// gulp.task('test', function(){
//     return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
// });

gulp.task('scss', function(){
    return gulp.src("scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
         errLogToConsole: true,
         outputStyle: 'expanded',
         // sourceComments: true,
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
})

gulp.task('default', ['scss'], function() {
    gulp.watch('scss/**/*.scss', ['scss'])
});