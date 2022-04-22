const books = require("../data/books")

const booksHandlers = {};
booksHandlers.byCategory = (req, res, next)=>{
    const category = req.query.category;
    if (category){
        let _books =books.filter((b)=>b.category == category);
        return res.status(200).json({succes:true, data:books})
    }
    next()
},
booksHandlers.byAuthor= (req, res, next)=>{
    const category = req.query.category;
    if (author){
        let _author =books.filter((b)=>b.author == _author);
        return res.status(200).json({succes:true, data:books})
    }
    next()
}

module.exports = booksHandlers