const moongose = require('mongoose')

// Init moogo connection
moongose.connect('mongodb+srv://teste:teste@microsservices-tables-a.uvad7dx.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});