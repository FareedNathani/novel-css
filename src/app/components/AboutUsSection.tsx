"use client";
import { useState } from 'react';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
  const [isUrdu, setIsUrdu] = useState(false); // State to track the current language

  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg'
  ];

  // Text content in English and Urdu
  const englishText = (
    <div className='text-box'>
      <h2 className="text-title">About Us</h2>
      <p className="text-para">
        Welcome to Dil Se Qalam, your ultimate destination for exploring the captivating world of novels.
        Our passion for storytelling drives us to bring you an extensive collection of literary works that inspire, entertain, and provoke thought.
        Whether you are a casual reader or a dedicated bibliophile, our carefully curated selection offers something for everyone.
        Join us on this literary journey and discover the magic of words!
      </p>
    </div>
  );

  const urduText = (
    <div className='text-box'>
      <h2 className="text-title">ہمارے بارے میں</h2>
      <p className="text-para">
      دل سے قلم میں خوش آمدید، آپ کا حتمی مقام کہانیوں کی دلکشی کو دریافت کرنے کے لئے۔
        کہانی سنانے کا ہمارا شوق ہمیں آپ کے لئے ادبی کاموں کا ایک وسیع مجموعہ لانے کی ترغیب دیتا ہے جو متاثر کرتے ہیں، تفریح دیتے ہیں، اور سوچنے پر مجبور کرتے ہیں۔
        چاہے آپ ایک عام قاری ہوں یا ایک باقاعدہ بکیفیل، ہماری محتاط طور پر منتخب کردہ فہرست سب کے لئے کچھ نہ کچھ پیش کرتی ہے۔
        اس ادبی سفر میں ہمارے ساتھ شامل ہوں اور الفاظ کے جادو کو دریافت کریں!
      </p>
    </div>
  );

  return (
    <div className="about-section">
      {/* Image Grid Section */}
      <div className="about-image">
        {images.map((src, index) => (
          <div key={index} className="image-block">
            <Image 
              src={src}
              alt={`Novel ${index + 1}`}
              width={200}
              height={200}
              className="image-shadow" 
            />
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="text-container">
        {isUrdu ? urduText : englishText} 
        <button
          className="toggle-btn"
          onClick={() => setIsUrdu(!isUrdu)} // Toggle the language
        >
          {isUrdu ? 'Show in English' : 'Show in Urdu'}
        </button>
      </div>
    </div>
  );
};

export default AboutUsSection;