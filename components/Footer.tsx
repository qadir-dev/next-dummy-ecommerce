// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/privacy" className="text-[#7b6e5d] hover:text-[#6f4e37]">
            Privacy
          </Link>
          <Link href="/terms" className="text-[#7b6e5d] hover:text-[#6f4e37]">
            Terms
          </Link>
          <Link href="/contact" className="text-[#7b6e5d] hover:text-[#6f4e37]">
            Contact
          </Link>
        </div>

        <div className="text-sm text-[#4b2e2b]">
          &copy; {new Date().getFullYear()} Dummy Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
