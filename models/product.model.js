const { Schema, model } = require('mongoose');

const schema = new Schema({
    price_max: {
        type: Number,
        required: true,
    },
    page_description: {
        type: String,
        required: true,
    },
    page_title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    variation_attributes: {
        type: Array,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    master: {
        type: Object,
        required: true,
    },
    primary_category_id: {
        type: String,
        required: true,
    },
    image_groups: {
        type: Array,
        required: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    orderable: {
        type: Boolean,
        required: true,
    },
    variants: {
        type: Array,
        required: true,
    },
    type: {
        type: Object,
        required: true,
    },
    long_description: {
        type: String,
        required: true,
    },
    c_isSale: {
        type: Boolean,
        required: true,
    },
});

module.exports = model('products', schema);
