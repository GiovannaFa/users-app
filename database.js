const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, function(err){
  if(err){
    console.error("<ERROR> " + err + " </ERROR>");
  }
})
    .then(db => console.log("base de datos conectada"))
    .catch(err => console.error(err));
