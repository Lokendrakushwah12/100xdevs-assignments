const { Router } = require("express");
const router = Router();
const { User, Course } = require('../db');
const userMiddleware = require("../middleware/user");

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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

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
        username: req.headers.username
    });

    const purchasedCourses = await Course.find({
        _id: {
            $in: user.purchasedCourses
        }
    });
    res.json({
        message: purchasedCourses,
    })
});

module.exports = router