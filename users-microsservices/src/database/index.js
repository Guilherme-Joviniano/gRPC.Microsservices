const moongose = require('mongoose')

// Init moogo connection
moongose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});