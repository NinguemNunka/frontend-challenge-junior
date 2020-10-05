const gulp = require('gulp')
const svgmin = require('gulp-svgmin')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const terser = require('gulp-terser')
const htmlmin = require('gulp-htmlmin')

const { src, parallel, dest } = require('gulp')

const scssPATH = 'src/css/style.scss'
const jsPATH = 'src/js/script.js'

const html_task = () => {
    return src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'))
}

const img_task = () => {
    return src('src/imgs/*.png')
        .pipe(imagemin())
        .pipe(dest('dist/imgs'))
}

const svg_task = () => {
    return src('src/imgs/*.svg')
        .pipe(svgmin())
        .pipe(dest('dist/imgs'))
}

const sass_task = () => {
    return src(scssPATH)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(uglifycss())
        .pipe(dest('dist/css'))
}

const js_task = () => {
    return src(jsPATH)
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(dest('dist/js'));
}

exports.html_task = html_task
exports.img_task = img_task
exports.svg_task = svg_task
exports.sass_task = sass_task
exports.js_task = js_task
exports.default = parallel(html_task, img_task, svg_task, sass_task, js_task)