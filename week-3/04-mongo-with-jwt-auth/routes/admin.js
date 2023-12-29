const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  let { username, password } = req.body;
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  let { username, password } = req.body;

  const user = await Admin.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect email or password",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  let { title, description, price, imageLink } = req.body;
  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });
  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logics
  const courses = await Course.find({});
  res.json(courses);
});

module.exports = router;
