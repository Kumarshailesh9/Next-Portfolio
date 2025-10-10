import Link from "next/link";

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
          <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
          <li><Link href="/project" className="hover:text-gray-600">Projects</Link></li>
          <li><Link href="/skill" className="hover:text-gray-600">Skills</Link></li>
          <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}
