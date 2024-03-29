import User from './Model';

export default function userRegister(req, res) {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then(() => {
      res.status(200).json('User created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User not created');
    })
    .finally(() => {
      console.log('GOT IT');
    });
}
