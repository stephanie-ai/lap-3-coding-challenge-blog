const express = require('express');
const router = express.Router();

const Post = require('../models/post');

// posts index route
router.get('/', async (req, res) => {
    try {
        const posts = await Post.all;
        res.json({posts});
    } catch (err) {
        res.status(500).json({err});
    }
})

// posts show route
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(parseInt(req.params.id));
        res.json(post);
    } catch (err) {
        res.status(400).json({err});
    }
})

// create post route
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body.title, req.body.name, req.body.story);
        res.json(post);
    } catch (err) {
        res.status(404).json({err});
    }
})

module.exports = router;