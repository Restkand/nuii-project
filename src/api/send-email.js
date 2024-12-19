const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Konfigurasi transporter Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohamadsamsudin47@gmail.com",
      pass: "jmpr kafu hizv ywob",
    },
  });

  const mailOptions = {
    from: email,
    to: "mohamadsamsudin21@gmail.com", // email tujuan
    subject: `Ada pesan baru dari ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Berhasil Mengirim Email");
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal Mengirim Email");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
