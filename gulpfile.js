var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task( 'default', [ 'serve' ] )

gulp.task('reload', function(){
	browserSync.reload();
})

gulp.task('serve', function(){
	
	browserSync({
		server: {
			baseDir: "./"
		}
	})
	
	gulp.watch('*.html', ['reload']);
	gulp.watch('scss/**/*.scss', ['sass']);
})


gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
	
})

