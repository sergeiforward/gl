
var gulp = require('gulp')
//var gulpFilter = require('gulp-filter')
var watch = require('gulp-watch')
var concat = require('gulp-concat')
var minifyCss = require('gulp-minify-css')

var postcss = require('gulp-postcss')
var postcssAssets = require('postcss-assets')
var postcssImport = require('postcss-import')
var postcssNested = require('postcss-nested')
var postcssMixins = require('postcss-mixins')
var postcssSimplevars = require('postcss-simple-vars')
var autoprefixer = require('gulp-autoprefixer');

var processors = [
  postcssImport,
  postcssNested,
  postcssAssets(),
  postcssMixins,
  postcssSimplevars 
  ];


var CSSAppStarter = 'src/app/css/gl_starter.css'

var libsDir = 'src/libs/'
var appDir = 'src/app/'


var src = {
  appCSS: CSSAppStarter,
  vendorJs: [
    'src/libs/device/device.min.js',
    'src/libs/jquery/dist/jquery.min.js',
    'src/libs/jquery-easing/jquery.easing.min.js',
    'src/libs/jquery.cookie/jquery.cookie.min.js',
    'src/libs/jquery.ui-to-top/jquery.ui.totop.min.js',
    'src/libs/rd_navbar/rd_navbar.js',
    'src/libs/rd_parallax/rd_parallax.js',
    'src/libs/rd_smoothscroll/rd_smoothscroll',
    'src/libs/rd_styleswitcher/rd_styleswitcher.js',
    'src/libs/tmstickup/tmstickup.js',
    'src/libs/wow/wow.js'

    
    
  ],
  allCSS: ['src/app/css/*.css'],
  appJs: [
    'src/app/js/app.js'
  ],
  allJs: [
    'src/app/js/*.js'
  ]
}

var publishdir = 'public/';
var tempDir = publishdir + 'temp/'

var dist = {
  css: 'public/static/',
  bootstrapTempLessDir: tempDir + 'bootstrap/less',
  js: publishdir + 'static/'
}

gulp.task('buildCSS', function(){

  gulp.src([src.appCSS])
    .pipe(postcss(processors))
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest(dist.css))
})


gulp.task('buildJS', function(){

  gulp.src(src.vendorJs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(dist.js))

  gulp.src(src.appJs)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dist.js))
})


// gulp.task('watch', function() {

//   gulp.watch(src.allCSS, ['buildCSS']);
//   gulp.watch(src.allJs, ['buildJs']);
 
// })



