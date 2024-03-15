import React, { useState } from "react";
import Header from "../../Layout/Header";
import {
  FiEdit,
  FiLayout,
  FiPackage,
  FiBookOpen,
  FiNavigation,
} from "react-icons/fi";
import axios from "axios"

const ServiceItem = ({ icon, title, description }) => (
  <div className="shadow-lg p-6 md:ml-3 flex ">
    <div className="mr-4">{icon}</div>
    <div>
      <div className="font-medium text-2xl md:text-2xl font-poppins">
        {title}
      </div>
      <div className="font-poppins text-lg md:text-lg">{description}</div>
    </div>
  </div>
);

const Consultancy = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/create-consultant_user", {
        name,
        email,
        message,
      });
      // Clear form fields after submission if needed
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <Header />
      <div className="px-6 py-10 md:py-20">
        <div className="md:flex justify-between items-center">
          <div className="text-2xl tracking-tighter md:text-6xl font-poppins font-medium  md:font-poppins mb-8 md:w-2/3 md:ml-6">
            Unlock the Power of Ebooks: Your Trusted Ebook Consultancy Partner
          </div>
          <div className="md:mr-16 md:flex gap-4">
            <div>
              <img
                src="/Consultancy/EC1.jpg"
                alt="Ebook Consultancy"
                className="w-20 md:w-44 h-auto md:h-44 md:flex hidden md:rounded"
              />
              <img
                src="/Consultancy/EC2.jpg"
                alt="Ebook Consultancy"
                className="w-20 md:w-44 h-auto md:h-44 md:flex hidden md:rounded"
              />
            </div>
            <div className="md:mt-6 md:ml-6">
              <img
                src="/Consultancy/EC3.jpg"
                alt="Ebook Consultancy"
                className="w-12 md:w-44 h-auto md:h-44 md:flex hidden md:rounded"
              />
              <img
                src="/Consultancy/EC4.jpg"
                alt="Ebook Consultancy"
                className="w-20 md:w-44 h-auto md:h-44 md:flex hidden md:rounded"
              />
            </div>
          </div>
          <div className="md:hidden flex mt-5 justify-center">
            <img
              src="/Consultancy/EC5.jpg"
              alt="Ebook Consultancy"
              className="w-10/12 h-auto"
            />
          </div>
        </div>
        <hr className="border-fuchsia-600 w-full md:my-10 md:w-2/3 md:justify-center md:flex" />
        <div className="md:flex-row md:gap-6 flex flex-col-reverse justify-center">
          <div className="md:flex  flex-col">
            <img
              src="/Consultancy/books-with-tablet.jpg"
              alt="Ebook"
              className="md:w-72 w-60"
            />
          </div>
          <div className="md:w-2/3">
            <div className="md:font-poppins font-poppins text-3xl">
              {" "}
              Expertise:
            </div>
            <div className="md:font-poppins font-poppins text-xl">
              Highlight your experience in crafting high-quality ebooks. Mention
              specific areas of knowledge: content strategy, writing, editing,
              design, and formatting.
            </div>
          </div>
        </div>
        <hr className="border-fuchsia-600 w-full md:my-10 md:w-2/3 md:justify-center md:flex" />
        <div className=" md:text-4xl text-3xl mt-10 font-medium md:font-semibold mb-8 font-poppins">
          Services Offered
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceItem
            icon={<FiEdit className="text-4xl text-fuchsia-600" />}
            title="Content Development"
            description="Content creation, research, and outlining."
          />
          <ServiceItem
            icon={<FiEdit className="text-4xl text-fuchsia-600" />}
            title="Editing and Proofreading"
            description="Ensuring clarity, flow, and error-free writing."
          />
          <ServiceItem
            icon={<FiLayout className="text-4xl text-fuchsia-600" />}
            title="Design and Formatting"
            description="Creating visually appealing and professional layouts."
          />
          <ServiceItem
            icon={<FiPackage className="text-4xl text-fuchsia-600" />}
            title="Ebook Conversion"
            description="Optimizing for various e-readers and platforms."
          />
          <ServiceItem
            icon={<FiBookOpen className="text-4xl text-fuchsia-600" />}
            title="Marketing and Distribution"
            description="Guidance on promoting your ebook effectively."
          />
          <ServiceItem
            icon={<FiNavigation className="text-4xl text-fuchsia-600" />}
            title="SEO Optimization"
            description="Improve visibility on search engines."
          />
        </div>
        <div className="md:flex justify-between md:mx-10 mt-8">
          <div className="font-poppins text-xl md:text-2xl">
            <div className="text-3xl md:font-semibold">
              Benefits for Clients:
            </div>
            <div className="md:pl-6 mt-2">
              <div className="text-lg md:text-xl mb-4">
                <span className="font-semibold">Increased Credibility:</span>{" "}
                <span>Establish yourself as an authority in your field.</span>
              </div>
              <div className="text-lg md:text-xl mb-4">
                <span className="font-semibold">Lead Generation:</span>{" "}
                <span>Attract new clients and grow your business.</span>
              </div>
              <div className="text-lg md:text-xl mb-4">
                <span className="font-semibold">Improved Sales:</span>{" "}
                <span>Convert readers into paying customers.</span>
              </div>
              <div className="text-lg md:text-xl">
                <span className="font-semibold">Professional Polish:</span>{" "}
                <span>
                  Present your knowledge in a polished and impactful format.
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/Consultancy/BOC.jpg"
              alt="Ebook Consultancy"
              className="w-72"
            />
          </div>
        </div>

        <div className="md:flex-row flex-col-reverse flex justify-between md:mx-10 mt-8">
          <div>
            <img
              src="/Consultancy/call_to_action_.jpg"
              alt="Ebook Consultancy"
              className="w-72"
            />
          </div>
          <div className="font-poppins text-left text-xl md:text-2xl">
            <div className="text-3xl md:font-semibold">Call to Action:</div>
            <div className="md:pl-6 font-poppins mt-2">
              <div className="text-lg md:text-xl mb-4">
                Offer a free consultation to discuss specific needs and project
                scope.
              </div>
              <div className="text-lg md:text-xl mb-4">
                Showcase client testimonials to build trust and credibility.
              </div>
              <div className="text-lg md:text-xl mb-4">
                Include clear contact information for inquiries.
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex justify-between md:mx-10 mt-8">
          <div className="font-poppins text-xl md:text-2xl">
            <div className="text-3xl md:font-semibold">Additional Content:</div>
            <div className="md:pl-6 md:w-2/3 mt-2">
              <div className="text-lg md:text-xl mb-4">
                <span className="font-semibold">Blog Section:</span>{" "}
                <span>
                  Share valuable insights on ebook creation, marketing
                  strategies, and industry trends.
                </span>
              </div>
              <div className="text-lg md:text-xl mb-4">
                <span className="font-semibold">Case Studies:</span>{" "}
                <span>
                  Showcase successful past projects and the positive outcomes
                  achieved.
                </span>
              </div>
              <div className="text-lg md:text-xl mb-4">
                <span className="font-semibold">Ebooks/Whitepapers:</span>{" "}
                <span>
                  Offer downloadable resources related to ebook writing and
                  publishing.
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/Consultancy/AC.png"
              alt="Ebook Consultancy"
              className="w-96"
            />
          </div>
        </div>

        <div className="md:flex-row flex-col-reverse flex justify-between md:mx-10 mt-8">
          <div>
            <img
              src="/Consultancy/web.jpg"
              alt="Ebook Consultancy"
              className="w-96"
            />
          </div>
          <div className="font-poppins text-xl md:text-2xl">
            <div className="text-3xl md:font-semibold">Website Design:</div>
            <div className="md:pl-6 font-poppins mt-2">
              <div className="text-lg md:text-xl mb-4">
                Professional and user-friendly interface.
              </div>
              <div className="text-lg md:text-xl mb-4">
                Clear navigation highlighting services and benefits.
              </div>
              <div className="text-lg md:text-xl mb-4">
                Compelling visuals showcasing the quality of your work.
              </div>
              <div className="text-lg md:text-xl mb-4">
                Easy access to contact information and consultation options.
              </div>
            </div>
          </div>
        </div>
        <div className="text-black md:p-2 bg-fuchsia-500 md:text-3xl text-center">
            Contact us to explore how we can elevate your ebook strategy!
          </div>
        <div>
          <div className="flex justify-start md:gap-64 md:items-center md:flex-row-">
            <div>
                <img src="/Consultancy/cc.png" alt="Avatar"  className="w-5/6"/>
            </div>
            <div className="md:mt-16">
              <form onSubmit={handleSubmit} className="md:w-full">
                <div className="md:mb-5">
                  <label  className="font-poppins">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 font-poppins rounded border border-purple-300 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="md:mb-5">
                  <label  className="font-poppins">
                    Email
                  </label>
                  <input    
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your Email"
                  />
                </div>
                <div>
                  <label  className="font-poppins">
                    Message
                  </label>
                  <textarea
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 h-40 rounded border border-purple-300 focus:outline-none focus:border-purple-500"
                    // placeholder="Enter your Email"
                  />
                </div>
                <div className="flex justify-center">
                    <button
                    type="submit"
                    className="bg-fuchsia-700 text-white p-2 rounded border-0">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultancy;
