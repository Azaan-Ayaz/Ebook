import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo and Address */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <img
              src="Elogo.png"
              alt="Logo"
              className="w-32 mb-5 md:mb-0"
            />
            <address className="text-center md:text-left">
              <p>5123 Market St. #22B</p>
              <p>Charlottesville, California 44635</p>
            </address>
          </div>
          {/* Links */}
          {/* <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-10">
            <div className="text-center md:text-left">
              <p className="font-bold">About</p>
              <p>Growers</p>
              <p>Merchants</p>
              <p>Partners</p>
              <p>Contact</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-bold">Social</p>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Linkedin</p>
              <p>Instagram</p>
            </div>
          </div> */}
          {/* Contact Info */}
          <div className="flex flex-col items-center justify-center md:items-end">
            <div>
              <p className="font-bold">(434) 546-4356</p>
              <div className="w-16 h-px bg-gray-400 my-2 md:hidden"></div>
              {/* <p className="underline">contact@lift.agencyr.com</p> */}
              <p className="underline">
  <a href="mailto:contact@lift.agencyr.com">contact@lift.agencyr.com</a>
</p>
              <div className="w-16 h-px bg-gray-400 my-2 md:hidden"></div>
            </div>
            <p className="mt-5 md:mt-0 text-xs">&copy; 2020 Lift Media. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
