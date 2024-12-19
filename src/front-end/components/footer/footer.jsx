import './footer.css'; // Import CSS for styling
import ChatUs from '../../assets/gif/DOKI_CTA.gif';

function Footer() {
  return (
    <div className="max-w-full rounded-lg pt-16 pb-16 overflow-hidden shadow-lg bg-black text-white flex flex-col md:flex-row">
  {/* Bagian kiri: Teks */}
  <div className="flex-1 px-6 md:pl-16 md:pt-10">
    <h1 className="title-chat text-4xl md:text-6xl lg:text-9xl">
      LET'S HAVE A <span className="text-yellow">CHAT</span>
    </h1>
    <p className="text-footer text-lg md:text-xl lg:text-2xl mt-4">
      We would be more than happy to listen to your problem, so don't hesitate to contact us!
    </p>
    <h3 className="title-email mt-12 text-yellow text-2xl md:text-3xl lg:text-4xl">
      call@nuii.id
    </h3>
    <p className="text-footer mt-4 text-sm md:text-md lg:text-lg">
      Jl. Apel III, RT.005/RW.017, <br />
      Kayuringin Jaya, Kec. Bekasi Sel., <br />
      Kota Bks, Jawa Barat 17144
    </p>
  </div>

  {/* Bagian kanan: Gambar di atas, input di bawah */}
  <div className="px-6 md:px-12 mt-10 md:mt-0 flex flex-col items-center w-full md:w-1/2">
    {/* Gambar */}
    <img
      className="imageCard w-auto h-48 md:h-60 lg:h-96 object-contain"
      src={ChatUs}
      alt="Card"
    />

    {/* Form Input */}
    <div className="w-full mt-6">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="w-full p-2 mt-1 border border-white rounded bg-black text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full p-2 mt-1 border border-white rounded bg-black text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
            className="w-full p-2 mt-1 border border-white rounded bg-black text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="buttonSubmit w-full p-3 mt-4 text-lg font-bold text-black bg-yellow rounded"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</div>

  );  
}

export default Footer;