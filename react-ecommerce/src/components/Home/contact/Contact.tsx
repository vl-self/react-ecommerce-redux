const Contact = () => {
  return (
    <section id="contact" className="relative layout-px-val">
      <div className="absolute top-0 left-0 m-auto right-0 text-center">
        <img src="../src/assets/images/map-bg.svg" alt=""></img>
      </div>
      <div className="grid grid-cols-2 pt-[120px] pb-[120px]">
        <div>
          <h2 className="text-[45px] leading-[55px] font-[600] mb-[20px]">
            Get In Touch
          </h2>
          <p className="text-[16px] leading-[26px] font-[400] mb-[60px] text-[#747E88]">
            Lorem ipsum dolor sit amet, consetetur sadipscing <br />
            elitr, sed diam nonumy eirmod tempor invidunt utlabo
          </p>
          <div className="text-black leading-3">
            <h3 className="text-3xl mb-2">Hot Line Call Us 24/7</h3>
            <h4 className="text-2xl mb-2">
              <a href="javascript:void(0)">000-2222-5555</a>
            </h4>
            <h4 className="text-2xl mb-2">
              <a href="javascript:void(0)">hello@gmail.com</a>
            </h4>
          </div>
        </div>
        <div>
          <form>
            <div>
              <label
                htmlFor="FirstName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                FirstName
              </label>
              <input
                type="text"
                id="FirstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></input>
            </div>
            <div>
              <label
                htmlFor="LastName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                LastName
              </label>
              <input
                type="text"
                id="LastName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></input>
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></input>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Message Here"
              ></textarea>
            </div>
            <div className="text-right m-auto">
              <button type="submit" className="btn-primary rounded">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
