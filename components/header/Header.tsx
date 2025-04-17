// components/Header.tsx
import Link from "next/link";
import Input from "@/components/ui/Input";

const Header = () => {
  return (
    <header className="w-full fixed top-0 inset-x-0 bg-[#faf6f0] shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-[#4b2e2b]">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <Link
            href="/"
            className="text-[#7b6e5d] hover:text-[#6f4e37] duration-300 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-[#7b6e5d] hover:text-[#6f4e37] duration-300 font-semibold"
          >
            Products
          </Link>
          <Link
            href="/account"
            className="text-[#7b6e5d] hover:text-[#6f4e37] duration-300 font-semibold"
          >
            Account
          </Link>
          <Link
            href="/contact"
            className="text-[#7b6e5d] hover:text-[#6f4e37] duration-300 font-semibold"
          >
            Contact us
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <Input placeholder="Search..." type="text" />
        </div>
      </div>
    </header>
  );
};

export default Header;
