const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({jokes:allJokes}))
        .catch(err => res.json({message:"Something wen't wrong",error:err}));
}

module.exports.findSingleJoke = (req,res) => {
    Joke.findOne({_id:req.params.id})
        .then(oneSingleJoke => res.json({joke:oneSingleJoke}))
        .catch(err => res.json({message:"Something wen't wrong",error:err}));
}
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newCreatJoke => res.json({joke:newCreatJoke}))
        .catch(err => res.json({message:"Something wen't wrong",error:err}));
}
module.exports.updateExistingJoke = (req,res) => {
    Joke.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updateJoke => res.json({joke:updateJoke}))
        .catch(err => res.json({message:"Something wen't wrong",error:err}));
}
module.exports.deleteAnExistingJoke = (req,res) => { 
    Joke.deleteOne({_id:req.params.id})
        .then(result => res.json({results:result}))
        .catch(err => res.json({message:"Something wen't wrong", error:err}));
}