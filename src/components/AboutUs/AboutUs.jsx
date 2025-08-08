import React, { useState } from 'react';
import Layout from '../layout/Layout';
import farmImage from '../../../public/img/About1.jpeg'; // Importing an agricultural-themed image
import fertilizerImage from '../../../public/img/hero.png'; // Importing an image for fertilizer

function AboutUs() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic for handling the form submission
    // For example, send the form data to your server or display a success message
    setSubmitted(true);
  };
  return (
    <Layout>
     <div className="bg-green-50 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8 mb-8">
            <img src={farmImage} alt="Farm" className="w-full mt-20 h-60 rounded-md shadow-md" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-green-800">About Shop </h1>
            <p className="mb-4 text-lg text-gray-800">
               Welcome to our onlineshop ! We are passionate about sustainable agriculture and providing our community with  organic and bio chemical fertilizer products.
               
            </p>
            <p className="mb-4 text-lg text-gray-800">
              Our mission is to cultivate healthy crops while nurturing the land for future generations. We believe in the power of nature and strive to work in harmony with it.
            </p>
            
            <p className="mb-4 text-lg text-gray-800">
              Thank you for supporting local agriculture and choosing us as your source for organic and bio-chemical fertilizer product. We look forward to sharing our harvest with you!
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-2 text-green-800">Contact Us</h2>
          <p className="mb-2 text-lg text-gray-800">Pansora Mitra Agro</p>
          <p className="mb-2 text-lg text-gray-800">near Pansora chowkdi, Bhalej-alina road</p>
          <p className="mb-2 text-lg text-gray-800">Phone: 6354336617</p>
          <p className="mb-2 text-lg text-gray-800">Email: pansoramitraagro@gmail.com</p>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default AboutUs;
