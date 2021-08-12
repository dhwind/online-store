const { Schema, model } = require('mongoose');

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
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
    c_showInMenu: {
        type: Boolean,
        required: true,
    },
});

module.exports = model('categories', schema);
