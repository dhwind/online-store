const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://onlinestore:qwerty456@cluster0.fzuvy.mongodb.net/OnlineStoreDB',
    {
        useNewUrlParser: true,
    },
    (err) => {
        if (!err) {
            console.log('Connection succeeded');
            return;
        }

        console.error(`Error in connection: ${err}`);
    }
);
