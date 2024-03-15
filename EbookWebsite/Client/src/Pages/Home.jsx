import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const Home = () => {
  return (
    <>
    <div className='z-10'>
      <Header />
      </div>
      <div className='bg-fuchsia-900'>
  <div style={{backgroundImage: "url('ebook.jpg')", opacity: 0.8, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
  <div className='bg-fuchsia-400 rounded-lg bg-opacity-75 p-6'>
  <h1 className="text-3xl md:p-2 md:items-center md:align-middle sm:text-4xl lg:text-6xl md:text-white font-bold mb-8 text-center" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
    Welcome to Nectronix Digitals
  </h1>
  <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 text-center" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
    Your one-stop shop for all things ebooks!
  </p>
</div>
  </div>
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg sm:text-xl md:tracking-tight font-poppins lg:text-xl mb-8 text-center">
          Nectronix Digitals is dedicated to supporting authors by providing them with the tools they need to share their stories with the world. We believe that everyone should have the opportunity to share their unique perspective through the written word, which is why we offer a range of services to help authors of all levels achieve their goals. Our comprehensive suite of services includes everything from editing and proofreading to formatting and cover design, ensuring that your manuscript is transformed into a polished and professional ebook that can stand out in a crowded marketplace. Whether you're a seasoned writer looking to take your work to the next level or a first-time author just starting, we're here to help you achieve your vision and bring your story to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ServiceCard title="Ebook Writing" description="We collaborate with you to craft a captivating ebook that resonates with your target audience." />
          <ServiceCard title="Ebook Publishing" description="We navigate the complexities of ebook publishing, ensuring your book reaches major online retailers like Amazon Kindle, Kobo, and Apple Books." />
          <ServiceCard title="Ebook Cover Design" description="Create a stunning and eye-catching cover that grabs attention and reflects your book's essence." />
          <ServiceCard title="Ebook Proofreading" description="Eliminate typos, grammatical errors, and inconsistencies for a flawless reading experience." />
          <ServiceCard title="Ebook Formatting" description="We ensure your ebook adheres to industry standards and displays beautifully across various devices." />
          <ServiceCard title="Ebook Consultancy" description="Get expert guidance on your ebook journey, from concept development to marketing strategies." />
        </div>
        <div className='md:mt-10 flex justify-center'><hr className='border-fuchsia-900 md:w-1/3'/></div>
        <div className='bg-fuchsia-900 md:mt-8 py-8 md:py-12'>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center text-white">
    Why Choose  Nectronix Digitals?
  </h2>
  <div className="text-lg text-center sm:text-xl lg:text-2xl mb-8 text-white">
    <div className="flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>Experienced Team: Our team of skilled professionals is dedicated to your success.</div>
    </div>
    <div className="flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>High-Quality Work: We deliver exceptional results that meet your unique needs.</div>
    </div>
    <div className="flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>Competitive Rates: We offer affordable services that fit your budget.</div>
    </div>
    <div className="flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>Seamless Process: We make the ebook creation process smooth and stress-free.</div>
    </div>
  </div>
</div>
<p className="text-lg sm:text-xl lg:text-2xl mb-8 text-center">
          Ready to take the next step? Contact Nectronix Digitals today for a free consultation. Let's turn your dream of becoming a published author into reality!
        </p>
      </div>
      <Footer/>
    </>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-poppins mb-2" style={{color:"#800080"}}>{title}</h3>
      <p className="text-lg font-poppins">{description}</p>
    </div>
  );
};

export default Home;
