import axios from "axios";

const sendEmail = async (formData) => {
  try {
    // Menggunakan API Routes di Vercel
    const response = await axios.post("/api/send-email", formData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error dalam mengirim pesan:", error);
    throw new Error("Gagal Mengirim Email");
  }
};

export default sendEmail;
