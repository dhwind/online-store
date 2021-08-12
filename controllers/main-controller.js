require('../models/product.model');
require('../models/category.model');

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = mongoose.model('categories');
const Product = mongoose.model('products');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        const categories = await Category.find({});

        if (!!req.headers['third-party-req']) {
            res.send(categories);
            return;
        }

        res.render('index', {
            products,
            categories,
            banner: false,
            title: 'Online Store',
        });
    } catch (e) {
        console.error(e);
    }
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});

        if (!!req.headers['third-party-req']) {
            res.send(products);
            return;
        }

        res.send({});
    } catch (e) {
        console.error(e);
    }
});

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find({});

        if (!!req.headers['third-party-req']) {
            res.send(categories);
            return;
        }

        res.send({});
    } catch (e) {
        console.error(e);
    }
});

router.get('/categories/:id', async (req, res) => {
    try {
        const products = await Product.find({});
        const categories = await Category.find({});

        const splittedURL = req.url.split('/');
        const categoryName = splittedURL[splittedURL.length - 1];

        const category = categories.find((c) => c.id === categoryName);

        const categoryProducts = products.filter(
            (p) => p.primary_category_id === category.id
        );

        const { image } = category;
        console.log(image); //undefined
        console.log(category); //object with existing property "image"
        console.log(category.image); // undefined

        res.render('index', {
            products: categoryProducts,
            categories,
            banner: category.image,
            title: category.page_title,
        });
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;
