import "./footer.css"; // Import CSS for styling
import ChatUs from "../../assets/gif/DOKI_CTA.gif";

function Footer() {
  return (
    <div className="max-w-full rounded-lg pt-16 overflow-hidden shadow-lg bg-black text-white flex flex-col md:flex-row">
      {/* Bagian kiri: Teks */}
      <div className="flex-1 px-6 md:pl-16 md:pt-10">
        <h1 className="title-chat text-4xl md:text-6xl lg:text-9xl">
          LET'S HAVE A <span className="text-yellow">CHAT</span>
        </h1>
        <p className="text-footer text-lg md:text-xl lg:text-2xl mt-4">
          We would be more than happy to listen to your problem, so don't
          hesitate to contact us!
        </p>
        <h3 className="title-email mt-12 text-yellow text-2xl md:text-3xl lg:text-4xl">
          nuiiapps3@gmail.com
        </h3>
        <p className="text-footer mt-4 text-sm md:text-md lg:text-lg">
          Kayuringin Jaya, Kec. Bekasi Sel., <br />
          Kota Bks, Jawa Barat 17144
        </p>
      </div>
      {/* Bagian kanan: Gambar di atas, button di kanan bawah */}
      <div
        className="relative flex-shrink-0 px-6 mt-32 mr-24 md:px-12 md:pl-28 flex flex-col items-center h-screen"
        style={{
          width: "40%", // Bagian kanan mengambil 40% lebar
          marginLeft: "auto", // Dorong ke kanan
        }}
      >
        <img
          className="imageCard w-auto h-48 md:h-72 lg:h-96 object-contain"
          src={ChatUs}
          alt="Card"
        />
        <div className="mt-36 mr-4">
          <a
            href="https://wa.me/6285212589975"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="title-email text-4xl bg-yellow text-black py-4 px-8 rounded-lg shadow-md hover:bg-orange transition duration-300">
              <h2>Chat Us</h2>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
