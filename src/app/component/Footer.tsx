import Link from "next/link";
import {GithubOriginal, LinkedinOriginal, TwitterOriginal} from "devicons-react";
import {FaYoutube, FaInstagramSquare } from "react-icons/fa"


export default function Footer() {
  return (
    <footer className="w-full bg-white border-t shadow-inner mt-20">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-slate-700">
        {/* Left Section */}
        <h2 className="text-sm font-semibold mb-3 md:mb-0">
          © {new Date().getFullYear()} Developed by{" "}
          <span className="text-gray-600 font-bold">Shailesh Kumar</span>
        </h2>

        {/* Footer Links */}
        <ul className="flex flex-wrap gap-4 text-sm text-slate-600">
          <li><Link href="https://github.com/Kumarshailesh9" className="hover:text-gray-600"><GithubOriginal size={18} /></Link></li>
          <li><Link href="http://linkedin.com/in/shailesh921" className="hover:text-gray-600"><LinkedinOriginal size={16} /></Link></li>
          <li><Link href="" className="hover:text-gray-600"><TwitterOriginal size={14} /></Link></li>
          <li><Link href="" className="hover:text-gray-600"><FaYoutube size={18} color="red" /></Link></li>
          <li><Link href="" className="hover:text-gray-600"><FaInstagramSquare size={16} color="pink"/></Link></li>
        </ul>
      </div>
    </footer>
  );
}
