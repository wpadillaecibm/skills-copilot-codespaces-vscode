// Create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;
const comments = require('./comments');

app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
