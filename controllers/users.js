const User = require("../models/users");
const bcrypt = require("bcryptjs");

exports.getUsers = (req, res, next) => {
  User.find()
    .then((result) => {
      res.json({
        Users: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postUser = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
    if (err) {
      res.json({
        message: err,
      });
    } else {
      const userId = req.body.userId;
      const userName = req.body.userName;
      const password = hashedPass;
      const email = req.body.email;
      const mobile = req.body.mobile;

      const user = new User({
        userId: userId,
        userName: userName,
        password: password,
        email: email,
        mobile: mobile,
      });

      user
        .save()
        .then((result) => {
          res.json({
            message: "user Added Successfully",
            Users: result,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};
