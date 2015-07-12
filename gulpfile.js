var gulp = require("gulp"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    cssmin = require("gulp-minify-css"),
    htmin = require("gulp-htmlmin"),
    uglify = require("gulp-uglify");

gulp.task("default", ["scripts", "styles", "html", "images"]);

gulp.task("watch", function(){
  gulp.watch("./src/js/*.js", ["scripts"]);
  gulp.watch("./src/scss/*.scss", ["styles"]);
  gulp.watch("./src/**/*.html", ["html"]);
  gulp.watch("./src/img/*.*", ["images"]);
});

gulp.task("scripts", function(){
  
  gulp.src("./src/js/*.js")
      .pipe(concat("script.js"))
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js"));
  
});

gulp.task("styles", function(){
  
  gulp.src("./src/scss/*.scss")
      .pipe(concat("style.css"))
      .pipe(sass())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/css"));
  
});

gulp.task("html", function(){
  
  gulp.src("./src/**/*.html")
      .pipe(htmin({
        collapseWhitespace: true,
        removeComments: true
        }))
      .pipe(gulp.dest("./dist"));
  
});


gulp.task("images", function(){
  
  gulp.src("./src/img/")
      .pipe(gulp.dest("./dist/img"));
  
});