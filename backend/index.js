const dotenv = require("dotenv"),
  express = require("express"),
  cors = require("cors"),
  corsOptions = require("./config/corsOptions"),
  { db } = require("./Database/dbconfig"),
  app = express(),
  PORT = 5000,
  bodyparser = require("body-parser"),
  StudentModel = require("./Models/Auth.model"),
  bcrypt = require("bcrypt"),
  saltRounds = 10,
  jwt = require('jsonwebtoken'),
  nodemailer = require("nodemailer")

// Configure the DOTENV in your project
dotenv.config();

app.use(express.json());
app.use(bodyparser.json());


// INITIAING DB CONNECTION
db();

// Allowing all origins in Cross-Origin Resource Sharing (CORS) can pose a security risk and is generally not recommended
app.use(cors(corsOptions))

// //signup
app.post("/register", (req, res, next) => {
  if (req.body.password) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      if (hash) {
        // Create a new user
        const NEW_USER = new StudentModel({ ...req.body, password: hash });
        // Store the user in the database
        NEW_USER.save()
          .then((response) => {
            if (response._id) {
              return res.status(200).json({
                success: true,
                message: "Account created successfully",
              });
            } else {
              return res.status(200).json({
                success: true,
                message: "Something went wrong",
                error: err,
              });
            }
          })
          .catch((error) =>
            res.status(200).json({
              success: false,
              error: error,
            })
          );
      } else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    });
  }
});

// //login
app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const response = await StudentModel.findOne({ email: email });
    if (email && password)
      if (response && response._id) {
        bcrypt.compare(password, response.password).then(function (result) {
          const token = jwt.sign({ role: ["customer"] }, process.env.JWT_SECRET_KEY, { expiresIn: 60 });
          if (result) {
            res.status(200).json({
              success: true,
              message: "Account sign in successful",
              token
            });
          } else {
            res.status(401).json({
              success: false,
              message: "Email ID or Phone Number or Password is wrong",
            });
          }
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Account does not exists",
        });
      }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
});

//forgot-password
app.post('/forgot-password', (req, res) => {
  try {
    const { email } = req.body;
    StudentModel.findOne({ email: email })
      .then(user => {
        console.log(user);
        if (!user) {
          return res.send({ Status: "User not existed" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "2m" });
        console.log(token);

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.USER,
            pass: process.env.PASS
          }
        });
        var mailOptions = {
          from: process.env.USER,
          to: 'mohanb.a1996@gmail.com',
          subject: 'Reset Password Link',
          html: `http://localhost:5173/reset-password/${user._id}/${token}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error.message);
          } else {
            return res.send({ Status: "Success" })
          }
        });
      })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

//reset-password
app.post('/reset-password/:id/:token', (req, res) => {
  const { id, token } = req.params
  const { password } = req.body

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" })
    } else {
      bcrypt.hash(password, 10)
        .then(hash => {
          StudentModel.findByIdAndUpdate({ _id: id }, { password: hash })
            .then(success => res.send({ Status: "Success" }))
            .catch(err => res.send({ Status: err }))
        })
        .catch(err => res.send({ Status: err }))
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});