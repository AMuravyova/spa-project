/**
 * Created by amurav on 24.03.2017.
 */

var mongodbRest = require('mongodb-rest/server.js');
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const browserSync = require('browser-sync').create();

let monogoRestConfig = {
    "db": "mongodb://localhost:27017",
    "server": {
        "port": 3000,
        "address": "0.0.0.0"
    },
    "accessControl": {
        "allowOrigin": "*",
        "allowMethods": "GET,POST,PUT,DELETE,HEAD,OPTIONS",
        "allowCredentials": false
    },
    "mongoOptions": {
        "serverOptions": {
        },
        "dbOptions": {
            "w": 1
        }
    },
    "humanReadableOutput": true,
    "urlPrefix": ""
};


gulp.task('mongorest', () => {
    console.log('server attempt to start');
    mongodbRest.startServer(monogoRestConfig);
    console.log('server started');
});

gulp.task('webpack', () => {
    return gulp.src('webpack.config.js')
        .pipe(uglify())
});

gulp.task('serve', ['webpack'],() => {
    browserSync.init({
        port: 8000,
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch("webpack.config.js").on('change', browserSync.reload);

});

// Задача по-умолчанию при запуске `gulp`
gulp.task('default', ['serve']);




