const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  let { username, password } = req.body;
  await User.create({
    username: username,
    password: password,
  });
  res.json({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  let { username, password } = req.body;

  const user = await User.find({
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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params;
  const username = req.username;
  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }

  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { username } = req.username;
  const user = await User.findOne({
    username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.send(courses);
});

module.exports = router;
