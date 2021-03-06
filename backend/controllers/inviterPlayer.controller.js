const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const bcrypt = require("bcrypt");

const Player = require("../models/player");

require('dotenv').config()

const invitePlayer = async (req, res) => {
  try {
  let player; 
 player = new Player({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    sessionPrice: req.body.sessionPrice,
    sessionNumbers: req.body.sessionNumbers,
    password: bcrypt.hashSync(req.body.password, 12),
  });
  await player.save();

  if (!player) {
    return res.status(404).send({ Message: "Error: Enable to create a new PLAYER !" });
  }
  res.send(player);
  } catch(e) {}
  let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:"nodeisamm@gmail.com",
      pass:"otaku666",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: process.env.USER,
    to: `${req.body.email}`,
    subject: "Invitation from COACH to join a session",
    text: "test",
    html: `
      <h4> hello  ${req.body.firstname} ${req.body.lastname}</h4> 
       <p> 
       I'm inviting you to log your workouts with me. 
       It helps us stay organized, and we'll be using it together to share workouts, and track your progress. 
       Accept your invitation below to create an account so we can get started! </p>
       <h4> Your info </h4>
      <ul>
       <li>password : ${req.body.password} </li>
       <li>price per week : ${req.body.sessionPrice} </li>
       <li>number of sessions : ${req.body.sessionNumbers} </li>
      </ul>
      <a href=http://localhost:3000/getCompetence/>Accept invitation</a>
      <h4> Your Coach </h4>
      `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success: Email was successfully sent !");
    }
  });

  smtpTransport.close();
};

module.exports = {
  invitePlayer,
};