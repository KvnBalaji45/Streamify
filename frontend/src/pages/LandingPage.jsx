// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner'; // Import the new HeroBanner component
import "../assets/css/LandingPage.css";

const bannerImages = [
  {
    src: "/images/thumbnails/bahubali.jpg",
    title: "Bahubali",
    desc: "Description of Bahubali",
    driveFileId: "1xxxxxx" // 🔁 Replace with actual Google Drive File ID
  },
  {
    src: "/images/thumbnails/guntur_karam.jpg",
    title: "Guntur Karam",
    desc: "Description of Guntur Karam",
    driveFileId: "1yyyyyy"
  },
  {
    src: "/images/thumbnails/devara.jpg",
    title: "Devara",
    desc: "Description of Devara",
    driveFileId: "1zzzzzz"
  },
  {
    src: "/images/thumbnails/spiderman.jpg",
    title: "Ultimate Spider Man",
    desc: "Description of Spiderman",
    driveFileId: "1RkMo4lluZbyRegO-sgASy_Idwt7Gf2q8"
  }
];

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      <HeroBanner bannerImages={bannerImages} /> {/* Use the HeroBanner component */}
      <footer className="footer">
        <p>© 2025 Streamify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
