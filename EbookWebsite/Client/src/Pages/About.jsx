import React from 'react';
import Header from '../Layout/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-6">
          Nectronix Digitals: Your Trusted Partner in the Evolving World of Ebooks. At Nectronix Digitals, we've been fueling the fires of ebook success for over 7 years. Our passion for the written word and the ever-changing ebook landscape drives us to deliver exceptional service to authors like you.
        </p>
        <h2 className="text-xl font-bold mb-4">A Team of Experts by Your Side:</h2>
        <p className="mb-6">
          We boast a team of 20 dedicated professionals, each bringing their unique expertise to the table. Our team comprises experienced authors who understand your creative vision, skilled writers who craft compelling narratives, meticulous editors who ensure polish and professionalism, talented designers who create eye-catching covers, and savvy marketers who navigate the digital world to get your book seen.
        </p>
        <h2 className="text-xl font-bold mb-4">More Than Just a Service:</h2>
        <p className="mb-6">
          We envision Nectronix Digitals as more than just a service provider. We're building a thriving community for ebook authors. Here, you'll find a supportive network where you can connect with fellow writers, share experiences, and exchange knowledge. We'll host workshops, webinars, and online forums to empower you throughout your ebook journey.
        </p>
        <h2 className="text-xl font-bold mb-4">Why Partner with Nectronix Digitals?</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Experience: We leverage over 7 years of expertise to guide you through the ebook creation process.</li>
          <li>Comprehensive Services: From crafting your manuscript to publishing and beyond, we offer a one-stop shop for all your ebook needs.</li>
          <li>Collaborative Approach: We work closely with you to understand your vision and bring your story to life.</li>
          <li>Author Community: Gain valuable insights, connect with fellow writers, and build a support network.</li>
          <li>Dedication to Quality: We deliver exceptional results, ensuring your ebook shines in the digital marketplace.</li>
        </ul>
        <p>
          Join the Nectronix Digitals Family. Let us be your trusted partner in your ebook journey. We're here to help you transform your manuscript into a polished and successful ebook. Contact us today and see how Nectronix Digitals can turn your dream of becoming a published author into a reality.
        </p>
      </div>
    </>
  );
};

export default About;
