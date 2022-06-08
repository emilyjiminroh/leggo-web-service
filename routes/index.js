const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
router.get('/', async(req, res, next) => {
    try {
        res.render('index');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/howtogo', async(req, res, next) => {
    res.render('howtogo.ejs');
});

router.get('/ground', async(req, res, next) => {
    res.render('ground.ejs');
});

router.get('/service', async(req, res, next) => {
    res.render('service.ejs');
});

router.get('/traffic', async(req, res, next) => {
    res.render('traffic.ejs');
});

router.get('/famous', async(req, res, next) => {
    res.render('famous.ejs');
});

router.get('/wheel', async(req, res, next) => {
    res.render('wheel.ejs');
});

router.get('/roadmap', async(req, res, next) => {
    res.render('roadmap.ejs');
});



module.exports = router;