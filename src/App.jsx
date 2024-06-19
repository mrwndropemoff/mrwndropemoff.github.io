import "./App.css";
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen WS bg-gray-200 ">
      <p className="text-6xl font-extrabold text-gray-900">OPIUM MYSTIQUE SCENTS</p>
      <p className="text-2xl text-gray-700 mt-4">Coming Soon!!</p>
      <div className="mt-8 flex space-x-4">
        <a href="https://www.instagram.com/opiumfragrance_" className="text-blue-500 hover:text-blue-700 flex items-center space-x-2">
          <FaInstagram className="w-10 h-10" />
        </a>
        <a href="https://wa.me/0708751666" className="text-green-500 hover:text-green-700 flex items-center space-x-2">
          <FaWhatsapp className=" w-10 h-10" />
        </a>
        <a href="https://www.tiktok.com/@opiumfragrances" className="text-black hover:text-gray-700 flex items-center space-x-2">
          <FaTiktok className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}

export default App;
