import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // atau sesuaikan dengan provider email Anda
      auth: {
        user: process.env.EMAIL_USER, // Gunakan variabel .env
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Failed to send email", error });
  }
}