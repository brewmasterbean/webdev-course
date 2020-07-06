var gulp = require ('gulp');
var sass = require ('gulp-sass');
var bsync =  require ('browser-sync');
var reload = bsync.reload;

var SOURCEPATHS = {
  sassSource : 'src/scss/*.scss'
}

var APPPATH = {
  css : 'app/css'
}

gulp.task('sass', function(){
  return gulp.src('SOURCEPATHS.sassSource')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('APPPATH.css'));
});

gulp.task('serve', gulp.series('sass'), function(){
  bsync.init
});

gulp.task('default', gulp.series('sass'));
