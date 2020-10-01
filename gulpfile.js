const gulp = require('gulp')
const concat = require('gulp-concat')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const svgmin = require('gulp-svgmin')

const { src, parallel, dest } = require('gulp')

const scssPATH = 'src/**/*.scss'
const jsPATH = 'src/**/*.js'

const imgTask = () => {
    return src('src/assets/*.png')
        .pipe(imagemin())
        .pipe(dest('dist/assets'))
}

const svgTask = () => {
    return src('src/assets/*.svg')
        .pipe(svgmin())
        .pipe(dest('dist/assets'))
}

const sassTask = () => {
    return src(scssPATH)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('style.css'))
        .pipe(uglifycss())
        .pipe(dest('dist/css'))
}

const jsTask = () => {
    return src(jsPATH)
        .pipe(concat('all.js'))
        .pipe(dest('dist/js'));
}

exports.imgTask = imgTask
exports.svgTask = svgTask
exports.sassTask = sassTask
exports.jsTask = jsTask
exports.default = parallel(imgTask, svgTask, sassTask, jsTask)