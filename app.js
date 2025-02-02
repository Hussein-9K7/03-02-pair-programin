const express = require("express");
const app = express();
const morgan = require('morgan');  

const userRouter = require('./routes/userRouter'); 
const tourRouter = require('./routes/tourRouter');


const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./controllers/tourControllers");


app.use(express.json());


app.use(morgan('tiny'));  


app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);


app.get("/tours", getAllTours);  
app.post("/tours", createTour);  
app.get("/tours/:tourId", getTourById); 
app.put("/tours/:tourId", updateTour);  
app.delete("/tours/:tourId", deleteTour); 

const port = 4000;

// بدء الخادم
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/api/tours`);
  console.log(`Server is running at http://localhost:${port}/api/users`);
});
