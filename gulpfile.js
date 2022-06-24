const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("cssnano");

const paths = {
  scss: "src/scss/**/*.scss",
};

// css es una función que se puede llamar automaticamente
function css() {
  return (
    src(paths.scss)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(postcss([autoprefixer(), cssnano()]))
      // .pipe(postcss([autoprefixer()]))
      .pipe(sourcemaps.write("."))
      .pipe(dest("src/"))
  );
}

function watchFiles() {
  watch(paths.scss, css);
}

exports.css = css;
exports.watchFiles = watchFiles;
exports.default = parallel(css, watchFiles);
