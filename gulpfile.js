var gulp = require('gulp')
var browser = require('browser-sync').create()

gulp.task('browser',function(){
    browser.init({
        server:{
            baseDir:'./'
        }
    })

    gulp.watch(['./lib/css/*.css','./index.html','./controllers/*.js','./services/*.js','./main.js'],function(){
        browser.reload()
    })
    gulp.watch(['./tpl/*.html'],function(){
        browser.reload()
    })
})


