const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin , Course } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required!' });
    }

    await Admin.create({
        username: username,
        password: password
    })
    res.status(201).json({ message: 'Admin created successfully!' })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.findOne({
        username: username,
        password: password
    });

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;

    const course = await Course.create({
        title,
        description,
        price,
        imageUrl
    });

    res.status(201).json({
        message: 'Course created successfully!',
        courseID: course._id
    });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    
    res.json({
        courses: allCourses
    });
});

module.exports = router;