const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/userControllers');
const auth = require('../middleware/auth');

// Get all users
router.get('/', getAllUsers);

// Create a new user
router.post('/', createUser);

// Get user by ID
router.get('/:userId', getUserById);

// Update user by ID
router.put('/:userId', updateUser); // This will handle PUT requests to update a user

// Delete user by ID
router.delete('/:userId', deleteUser); // This will handle DELETE requests to delete a user

module.exports = router;
