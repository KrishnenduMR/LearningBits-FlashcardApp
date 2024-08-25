import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <p className="text-sm hover:text-blue-200">© 2024 FlashcardsApp.</p>
        <div className="flex flex-col justify-end space-y-2 mt-4 text-center hover:text-blue-200">
          <a href="/team" className="hover:underline hover:text-blue-200" target="_self" rel="noopener noreferrer">About Us</a>
          <a href="/contact" className="hover:underline hover:text-blue-200" target="_self" rel="noopener noreferrer">Contact</a>
          <a href="/privacy" className="hover:underline hover:text-blue-200" target="_self" rel="noopener noreferrer">Privacy Policy</a>
          <a href="/terms" className="hover:underline hover:text-blue-200" target="_self" rel="noopener noreferrer">Terms of Service</a>
        </div>
      </div>
      <p className="text-sm block text-center mt-4 hover:text-blue-200">The website has used media from quizlet and brainscape websites.</p>
    </footer>
  );
}

export default Footer;


