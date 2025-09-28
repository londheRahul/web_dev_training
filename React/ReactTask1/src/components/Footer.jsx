import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footeranim=useRef();
  useGSAP(()=>{
    gsap.from(footeranim.current,{
      opacity:0,
      y:-100,
      scrollTrigger:{
        trigger:footeranim.current,
        scroller:"body",
        scrub:true,
        start:"top 80%",
        end:"top -10%"
      }
      
    })
  })
  return (
    <footer  className="bg-[#0f172a] text-gray-400 px-8 py-12 pt-50">
      <div ref={footeranim} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500"></div>
            <span className="text-white font-bold text-lg">Cupertino</span>
          </div>
          <p className="mt-4 text-sm">
            Empowering creators worldwide with innovative tools and seamless
            experiences. Join thousands of professionals who trust our platform.
          </p>
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API Reference</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Kit</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">GDPR</a></li>
          </ul>
        </div>
      </div>

      
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© 2024 Cupertino. All rights reserved.</p>
        <p className="flex items-center space-x-1">
          <span>Made with</span>
          <span className="text-red-500">❤️</span>
          <span>in Silicon Valley</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
