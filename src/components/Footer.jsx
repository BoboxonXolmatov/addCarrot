import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-emerald-950 py-6 text-orange-50">
        <div className="container mx-auto flex flex-col items-center
        justify-center space-y-4 md:space-y-0">
            <div className="mb-4 flex space-x-4 cursor-pointer">
                <a href="#">
                    <FaFacebook size={20} />
                </a>
                <a href="#">
                    <FaTwitter size={20}/>
                </a>
                <a href="#">
                    <FaInstagram size={20}/>
                </a>
                <a href="#">
                    <FaLinkedin size={20}/>
                </a>
            </div>
            <div className="text-sm opacity-50">
                O {new Date().getFullYear()} addCarrot. All rights reserved.
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
