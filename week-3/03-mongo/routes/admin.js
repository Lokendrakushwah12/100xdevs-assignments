const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    console.log("body");
    console.log(req.body);

    // if (!username || !password) {
    //     return res.status(400).json({ message: 'Username and password are required!' });
    // }

    await Admin.create({
        username: username,
        password: password
    })

    res.status(201).json({ message: 'Admin created succesfully!' })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic 
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;