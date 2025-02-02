const express = require('express');
const router = express.Router();
const { getAllTours, createTour, getTourById, updateTour, deleteTour } = require('../controllers/tourControllers');
const auth = require('../middleware/auth');
// Get all users
router.get('/', getAllTours);

// Create a new user
router.post('/', createTour);

// Get user by ID
router.get('/:tourId', getTourById);

// Update user by ID
router.put('/:tourId', updateTour); 

// Delete user by ID
router.delete('/:tourId', deleteTour); 

module.exports = router;
