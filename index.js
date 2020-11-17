const Pageres = require("pageres");

(async () => {
  await new Pageres({ delay: 1 })
    .src("./index.html", ["2024x1068"], {
      crop: true,
    })
    // .src("data:text/html,<h1>Awesome!</h1>", ["1024x768"])
    .dest(__dirname)
    .run();

  console.log("Finished generating screenshots!");
})();
   