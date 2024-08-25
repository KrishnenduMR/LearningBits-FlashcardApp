import React from "react";
import './Home.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {  
  return (
    <>
    <div className="main-body">
    <Navbar />
    <div className="body1">
    <div className="flex flex-col items-center justify-center mt-40">
    <h1 className="text-center text-white font-bold md:text-8xl sm:text-6xl text-4xl">
    <span className="typewriter">Be in love</span><br/>
    <span className="typewriter">with learning.</span>
    </h1>
    </div>
    <p className="main-p">Learn using our flashcards.</p>
    </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;