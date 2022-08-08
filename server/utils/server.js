
const routes =  require('../routes/clinic-route.js');

/**
 * Initialize a variable app which will be our 
 * express server
 */
const express = require('express')
const app = express();

 /**
  * We want this application to accept and send
  * JSON data. The middleware express.json()
  * helps us to do that.
  */
 app.use(express.json());

 app.use('/create_entry', routes);
 // sedn 404 error if route not found
 app.use((req,res)=>{
    res.status(404).send('404: page not found')
})

 /**
 * define that our application will run on
 * localhost:5000
 */
const PORT = 5000;

/**
 * Start our server
 */
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})