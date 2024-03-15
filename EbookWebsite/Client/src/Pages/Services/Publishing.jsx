import React, { useState } from 'react';
import Header from '../../Layout/Header';
import axios from 'axios';

const Publishing = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Example: sending form data using Axios
      const response = await axios.post('http://localhost:8080/create-publish', { name, email, message });
      console.log(response.data);
      // Handle success response if needed
    } catch (error) {
      console.error('Error:', error);
      // Handle error if needed
    }

    // Reset form fields after submission if needed
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <div className="pb-20 bg-pink-200 bg-opacity-10">
          <div className="mt-20 max-w-[1170px] mx-auto flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-[56%]">
              <img
                loading="lazy"
                src="/publish/top.png"
                alt="Top Image"
                className="grow w-full rounded-[30px] md:mt-10"
              />
            </div>
            <div className="w-full md:w-[44%] mt-5 md:mt-0 flex flex-col justify-center">
              <div className="text-3xl md:text-6xl  text-indigo-950 font-poppins">
                Empowering your website with eBooks:
                <br />A Guide to Self-Publishing
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 py-20">
          <div className="bg-white relative rounded-lg shadow-lg overflow-hidden">
            <img
              loading="lazy"
              src="/publish/bg.png"
              alt="Background"
              className="object-cover absolute inset-0 w-full h-full"
            />
            <div className="relative py-20 px-8 md:px-16 max-w-[980px] mx-auto text-center">
              <div className="text-5xl md:text-6xl font-medium leading-[61px] text-indigo-950 font-poppins">
                Welcome to our Comprehensive Guide on
                <br />
                <span className="text-5xl">eBook Publishing!</span>{" "}
              </div>
              <div className="mt-10 text-3xl leading-[51px] text-neutral-800 font-poppins">
                eBooks offer a fantastic way to share your expertise, build an
                audience, and even generate income directly through your
                website. This guide explores how to navigate the exciting
                world of eBook publishing on your own platform.
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 ">
          <div className="flex flex-col-reverse md:flex-row gap-5 md:items-center">
            <div className="w-full md:w-[41%]">
              <img
                loading="lazy"
                src="/publish/image1.png"
                alt="Image 1"
                className="w-full"
              />
            </div>
            <div className="w-full md:w-[59%]">
              <div className="mt-16 md:mt-0">
                <div className="text-5xl md:ml-10 text-fuchsia-600 font-poppins">
                  Promoting your Masterpiece
                </div>
                <div className="mt-10 text-2xl tracking-tight leading-10 text-neutral-800 font-poppins">
                  <ul>
                    <li>
                      <span className="font-bold text-fuchsia-600">Leverage social media:</span>{" "}
                      Announce your eBook launch across your social media channels.
                    </li>
                    <li>
                      <span className="font-bold text-fuchsia-600">Content marketing:</span>{" "}
                      Write blog posts or articles related to your eBook's topic to
                      drive traffic to your website.
                    </li>
                    <li>
                      <span className="font-bold text-fuchsia-600">Email marketing:</span> Engage your
                      subscriber base with email campaigns promoting your eBook.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 py-20">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-6/12">
              <div className="mt-10 md:mt-0">
                <div className="text-5xl leading-[58.5px] text-fuchsia-600 font-poppins">
                  Beyond the Basics
                </div>
                <div className="mt-3 text-2xl leading-10 text-neutral-800 md:tracking-tight font-poppins">
                  <span className="font-bold text-2xl text-fuchsia-600">Subscription models:</span> Offer exclusive content or bonus materials through a subscription service.
                  <br />
                  <span className="font-bold text-2xl text-fuchsia-600">Bundled packages:</span> Combine your eBook with other products or services for added value.
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <img
                loading="lazy"
                src="/publish/image2.png"
                alt="Image 2"
                className=" md:w-2/3 md:ml-32 w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative max-w-full mx-auto text-center">
          <img
            loading="lazy"
            src="/publish/bg2.png"
            alt="Background 2"
            className="absolute inset-0  w-full h-full object-cover"
          />
          <div className="py-16 px-16 text-xl md:pr-8 max-md:pl-5 font-poppins">
            By following these steps and continuously refining your approach, you
            can establish a successful self-publishing venture directly on your
            website. Remember, high-quality content, engaging design, and
            effective marketing are fundamental for attracting readers and turning
            your ebook into a valuable asset.
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center">
          <img src="/publish/cc.png" alt="" className="w-1/2 md:w-4/5 md:pl-9" />
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 md:mt-0">
          <div className="mb-4">
            <label htmlFor="name" className="block font-poppins text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-poppins text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-poppins text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button
              type="submit"
              className="bg-fuchsia-700 hover:bg-fuchsia-500 border-0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Publishing;
