import './footer.css'; // Import CSS for styling
import ChatUs from '../../assets/gif/DOKI_CTA.gif';

function Footer() {
  return (
    <div className="max-w-full rounded-lg pt-28 mt-20 pb-16 overflow-hidden shadow-lg bg-black text-white flex">
      {/* Bagian kiri: Teks */}
      <div className="flex-1 pl-16" style={{ width: '60%' }}>
        <h1 className="title-chat text-9xl">
          LET'S HAVE A <span className="text-yellow">CHAT</span>
        </h1>
        <p className="text-footer pr-24 text-2xl mt-8">
          We would be more than happy to listen to your problem, so don't hesitate to contact us!
        </p>
        <h3 className='title-email mt-20 text-yellow text-4xl'>call@nuii.id</h3>
        <p className="text-footer pr-60 text-md mt-6">
        Jl. Apel III, RT.005/RW.017, 
        Kayuringin Jaya, Kec. Bekasi Sel., 
        Kota Bks, Jawa Barat 17144
        </p>
      </div>
  
      {/* Bagian kanan: Gambar di atas, input di bawah */}
      <div
        className="flex-shrink-0 px-6 mt-14 mr-24 md:px-12 md:pl-28 flex flex-col items-center"
        style={{
          width: '40%', // Bagian kanan mengambil 40% lebar
          marginLeft: 'auto', // Dorong ke kanan
        }}
      >
        {/* Gambar */}
        <img
          className="imageCard w-auto h-48 md:h-72 lg:h-96 object-contain"
          src={ChatUs}
          alt="Card"
        />
  
        {/* Form Input */}
        <div className="w-full mt-8 text-footer">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mt-4">
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
              className="buttonSubmit w-full p-3 mt-4 text-lg font-bold text-black bg-yellow rounded text-footer"
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