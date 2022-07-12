const app = require('./app')
const mongoose = require('mongoose');
const { DB_HOST } = process.env


mongoose.connect(DB_HOST)
  .then(()=>console.log("Database connection successful"))
  .catch(error => { 
    console.log(error.message);
    process.exit(1)
  })
  

app.listen(5555, () => {
  console.log("Server running. Use our API on port: 5555")
})
