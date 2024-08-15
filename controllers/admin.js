const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");

exports.getAdmin = (req, res, next) => {
  Admin.find()
    .then((result) => {
      res.json({
        Admin: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postAdmin = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
    if (err) {
      res.json({
        message: err,
      });
    } else {
      const adminId = req.body.adminId;
      const adminName = req.body.adminName;
      const password = hashedPass;

      const admin = new Admin({
        adminId: adminId,
        adminName: adminName,
        password: password
      });

      admin
        .save()
        .then((result) => {
          res.json({
            message: "Admin Added Successfully",
            Admin: result,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};
