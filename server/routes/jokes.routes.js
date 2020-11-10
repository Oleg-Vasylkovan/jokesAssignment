const JokeController = require("../controllers/jokes.controller.js")

module.exports = app => {
    app.post("/api/jokes/new",JokeController.createJoke);
    app.get("/api/jokes/random",JokeController.findSingleJoke);
    app.get("/api/jokes/",JokeController.findAllJokes);
    app.put("/api/jokes/update/:id",JokeController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id",JokeController.deleteAnExistingJoke);
}