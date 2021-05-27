const express = require("express");
const router = express.Router();

//* USER MODEL FROM MODELS
const User = require("../../models/User");

router.get("/test", (req, res) => res.send("user route testing!"));

//! @route GET api/user
//? @desc get all users
// @access public
router.get("/", (req, res) => res.status(423).json({ msg: "Not accessible!" }));

//! @route GET api/user/:id
//? @desc get user by id
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ userNotFound: "User not found!" }));
});

//! @route POST api/user/login
//? @desc login user
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) res.status(400).json({ msg: "User not found!" });
      else if (user.validPassword(req.body.password))
        res.status(200).json({
          msg: "User Logged in!",
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        });
      else res.status(400).json({ msg: "Wrong Password!" });
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

//! @route POST api/user/signup
//? @desc Create new user
// @access public
router.post("/signup", (req, res) => {
  var newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.setPassword(req.body.password);

  User.create(newUser)
    .then((user) => res.status(201).json({ msg: "User added successfully!" }))
    .catch((err) => res.status(400).json({ msg: "User alredy exist" }));
});

//! @route PUT api/users/:id
//? @description update user
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({ msg: "User data updated successfully!" }))
    .catch((err) => res.status(400).json({ error: "Unable to update data!" }));
});

//! @route DELETE api/users/:id
//? @description delete user
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => res.status(200).json({ msg: "User deleted successfully!" }))
    .catch((err) => res.status(404).json({ error: "User not found!" }));
});

module.exports = router;
