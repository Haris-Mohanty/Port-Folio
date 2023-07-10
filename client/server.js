const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => {
  console.log("Server Running");
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: "Contact Form Submission - Portfolio",
    html: `<h4>Check Your Details:<h4>
           <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>
           <h3>Feel Free to Contact Me!</h3>
           <a href="harismohanty8658@gmail.com">Email</a>
           &nbsp;&nbsp;&nbsp;
           <a href="harismohanty8658@gmail.com">Instagram</a>
           &nbsp;&nbsp;&nbsp;
           <a href="harismohanty8658@gmail.com">LinkedIn</a>
           &nbsp;&nbsp;&nbsp;
           <a href="harismohanty8658@gmail.com">Twitter</a>
           &nbsp;&nbsp;&nbsp;
           <a href="harismohanty8658@gmail.com">Facebook</a>
           `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
