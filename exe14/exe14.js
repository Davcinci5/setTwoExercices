let Model = require('./model/Model'),
    Controller = require('./controller/Controller'),
    View = require('./view/View'),
    app;

    

app = new Controller(new Model(),new View());
app.start();

