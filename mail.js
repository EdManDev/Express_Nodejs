const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
	auth: {
		api_key: "",
		domain: ""
	}
};

const transport = nodemailer.createTransport(mailGun(auth));

const mailOption = {
	form: "ed.manigat@gmail.com",
	to: "dektamarverik@gmail.com",
	subject: "Testing",
	text: "hello worl"
};

transporter.sendMail(mailOption, function(err, data)){
  if (err) {
    console.log('Error');
  } else {
    console.log("Message sent!!!");
  }
};
