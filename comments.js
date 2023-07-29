// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create array of comments
const comments = [
    {
        username: 'Tam',
        comment: 'Hello World'
    },
    {
        username: 'Nhat',
        comment: 'Hello World'
    },
    {
        username: 'Trung',
        comment: 'Hello World'
    },
    {
        username: 'Huy',
        comment: 'Hello World'
    },
    {
        username: 'Quang',
        comment: 'Hello World'
    }
]

// Create a route to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Create a route to get a comment by index
app.get('/comments/:index', (req, res) => {
    const index = req.params.index;
    res.send(comments[index]);
});

// Create a route to add a new comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.send('Successfully added a new comment');
});

// Create a route to edit a comment
app.put('/comments/:index', (req, res) => {
    const index = req.params.index;
    const newComment = req.body;
    comments[index] = newComment;
    res.send('Successfully edited comment');
});

// Create a route to delete a comment
app.delete('/comments/:index', (req, res) => {
    const index = req.params.index;
    comments.splice(index, 1);
    res.send('Successfully deleted comment');
});

// Listen for requests
app.listen(port, () => console.log(`Server listening on port ${port}`));


