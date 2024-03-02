const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db');
const router = Router();


router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required!' });
    }

    await Admin.create({
        username: username,
        password: password
    })

    res.status(201).json({ message: 'Admin created successfully!' })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic 
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        price,
        description,
        imageLink
    })

    res.status(201).json({ message: 'Course created successfully!', courseID: newCourse._id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourse = await Course.find({});

    res.json({
        courses: allCourse
    })
});

module.exports = router;