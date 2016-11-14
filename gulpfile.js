var gulp = require('gulp');
// var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');


// gulp.task('test', function(){
//     return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
// });


gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/*.scss', ['scss']);
    gulp.watch('./**/*html').on('change', browserSync.reload)

});



gulp.task('scss', function(){
    return gulp.src("scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
         errLogToConsole: true,
         outputStyle: 'expanded',
         // sourceComments: true,
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.reload({stream: true}));
})




gulp.task('default', ['scss', 'serve'], function() {
    gulp.watch('scss/**/*.scss', ['scss'])
});
