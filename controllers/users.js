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
  bcrypt.hash(req.body.Password, 10, (err, hashedPass) => {
    if (err) {
      res.json({
        message: err,
      });
    } else {
      const UserId = req.body.UserId;
      const UserName = req.body.UserName;
      const Password = hashedPass;
      const Email = req.body.Email;
      const Mobile = req.body.Mobile;

      const user = new User({
        UserId: UserId,
        UserName: UserName,
        Password: Password,
        Email: Email,
        Mobile: Mobile
      });

      user
        .save()
        .then((result) => {
          res.send(result)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};

exports.getUser = (req, res, next)=>{
  let id = req.params.id;
  User.find({UserId:id})
  .then(result=>{
    res.send(result)
  })
  .then(err=>{
    res.send(err)
  })
}
