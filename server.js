'use strict';

const express = require('express')
const server = express();

require('dotenv').config();

const cors = require('cors');
server.use(cors());

const superagent = require('superagent');

const port = process.env.PORT || 4000

server.use(express.static('./public'));
server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'ejs');


// Routes

// localhost:3500/
server.get('/', (req, res) => {
    res.render('pages/index')
})

// http://localhost:3500/search?searchBook=flower&author=on
server.get('/search', (req, res) => {
    let BookName = req.query.searchBook;
    let select = req.query.sort
    //  res.redirect('pages/searches/show')
    // if (req.query.title) {
    //     select = 'intitle'
    // } else if (req.query.author) {
    //     select = 'inauthor'
    // }


    let url = `https://www.googleapis.com/books/v1/volumes?q=${BookName}+${select}:keyes`

    superagent.get(url)
        .then(bookData => {
            let bookArr = bookData.body.items.map(val => {
                return new Books(val)
            })
            res.render('pages/searches/show',{bookMenu : bookArr })
        })

})

function Books(bookData) {
    this.imgUrl = bookData.volumeInfo.imageLinks.smallThumbnail;
    this.title = bookData.volumeInfo.title;
    this.author = bookData.volumeInfo.authors;
    this.description = bookData.volumeInfo.description
}

server.get('*',(req,res)=>{
    res.render('pages/error')
})

server.listen(port, () => {
    console.log(`Listening to Port ${port}`)
})