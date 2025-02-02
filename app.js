const express = require("express");
const app = express();

// استيراد الموجهات الخاصة بالمستخدمين
const userRouter = require('./routes/userRouter'); 

// استيراد الوظائف الخاصة بالجولات
const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./controllers/tourControllers");

// Middleware لتحليل JSON
app.use(express.json());

// مسار المستخدمين
app.use('/users', userRouter);

// مسارات الجولات (Tours)
app.get("/tours", getAllTours);  // GET /tours
app.post("/tours", createTour);  // POST /tours
app.get("/tours/:tourId", getTourById);  // GET /tours/:tourId
app.put("/tours/:tourId", updateTour);  // PUT /tours/:tourId
app.delete("/tours/:tourId", deleteTour);  // DELETE /tours/:tourId

const port = 4000;

// بدء الخادم
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
