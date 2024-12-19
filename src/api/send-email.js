import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, message } = req.body;

  // Konfigurasi transporter Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohamadsamsudin47@gmail.com",
      pass: "jmpr kafu hizv ywob", // Pastikan menggunakan App Password, bukan password akun Gmail langsung
    },
  });

  const mailOptions = {
    from: email,
    to: "mohamadsamsudin21@gmail.com", // Email tujuan
    subject: `Ada pesan baru dari ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Berhasil Mengirim Email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal Mengirim Email", error: error.message });
  }
}
