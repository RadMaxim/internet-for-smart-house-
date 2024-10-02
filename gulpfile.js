import gulp from "gulp";
import postcss from "gulp-postcss";
import gulpSass from "gulp-sass";
import * as sass from "sass"; // Импортируем компилятор Sass
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import concat from "gulp-concat"; // Не забудьте импортировать gulp-concat
import clean from "gulp-clean"; // Для очистки папки dist перед сборкой

const sassCompiler = gulpSass(sass);

const paths = {
  scss: "./src/**/*.scss", // SCSS файлы
  css: "./dist/css", // Папка для скомпилированных файлов
};

// Задача для очистки папки dist перед сборкой
gulp.task("clean", function () {
  return gulp.src(paths.css, { allowEmpty: true, read: false }).pipe(clean());
});

// Задача для компиляции SCSS и обработки через PostCSS
gulp.task("styles", function () {
  const plugins = [autoprefixer(), cssnano()];

  return gulp
    .src(paths.scss)
    .pipe(sassCompiler().on("error", sassCompiler.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(paths.css));
});

// Задача для объединения скомпилированных CSS файлов
gulp.task("concat", function () {
  return gulp
    .src(`${paths.css}/*.css`)
    .pipe(concat("all.css"))
    .pipe(gulp.dest(paths.css));
});

// Задача для отслеживания изменений файлов
gulp.task("watch", function () {
  gulp.watch(paths.scss, gulp.series("styles", "concat")); // Отслеживаем SCSS файлы и запускаем обе задачи
});

// Задача по умолчанию
gulp.task("default", gulp.series("clean", "styles", "concat", "watch"));
