const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required!' });
    }

    await User.create({
        username: username,
        password: password
    })
    res.status(201).json({ message: 'User created successfully!' })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json(courses);

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    User.updateOne({
        username: username
    }, {
        $push: {
            purchasedCourses: courseId
        }
    }).catch(err => {
        console.log(err);
    })
    res.json({ message: "Purchased successfully" });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });
    
    const purchasedCourses = await Course.find({
        _id:{
            $in: user.purchasedCourses
        }
    })
    res.json({
        purchasedCourses
    })

});

module.exports = router