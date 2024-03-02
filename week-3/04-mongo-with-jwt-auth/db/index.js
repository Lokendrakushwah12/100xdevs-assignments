const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://lokendrakushwah8051:T2ARVD7gh0v5Lh3l@cluster0.bfc8eka.mongodb.net/db-auth');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type: String
    },
    password:{
        type: String
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type: String
    },
    password:{
        type: String
    },
    purchasedCourses:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },
    imageLink:{
        type: String
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}