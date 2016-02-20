var gulp = require('gulp');
var sync = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');
var awspublish = require('gulp-awspublish');

var paths = {
	entry: 'client/app/app.js',
	app: ['client/app/**/*.{js, styl, html}', 'client/styles/**/*.styl'],
	toCopy: ['client/index.html'],
	dest: 'dist'
};

gulp.task('build', function () {
	return gulp.src(paths.entry)
		.pipe(webpack(require('./webpack.config')))
		.pipe(gulp.dest(paths.dest));
});

gulp.task('copyEntryPoint', function () {
	return gulp.src(paths.toCopy, { base: 'client' })
		.pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
	browser({
		port: process.env.PORT || 3000,
		open: false,
		ghostMode: false,
		server: {
			baseDir: 'dist'
		}
	});
});

gulp.task('watch', function() {
	gulp.watch(paths.app, ['build', browser.reload]);
	gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

gulp.task('deploy', ['build', 'copyEntryPoint'], function() {
	var conf = require('./aws.config');
	var publisher = awspublish.create(conf['dev']);
	return gulp.src('./dist/**/*')
		.pipe(awspublish.gzip({ ext: '' }))
		.pipe(publisher.publish(conf['dev' + 'Headers']))
		.pipe(publisher.cache())
		.pipe(publisher.sync())
		.pipe(awspublish.reporter({
			states: ['create', 'update', 'delete']
		}));
});

gulp.task('default', function (done) {
	sync('build', 'copyEntryPoint', 'serve', 'watch', done);
});