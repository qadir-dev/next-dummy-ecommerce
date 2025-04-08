// components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-[#faf6f0] shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-[#4b2e2b]">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="text-[#7b6e5d] hover:text-[#6f4e37]">Home</Link>
          <Link href="/about" className="text-[#7b6e5d] hover:text-[#6f4e37]">About</Link>
          <Link href="/products" className="text-[#7b6e5d] hover:text-[#6f4e37]">products</Link>
          <Link href="/contact" className="text-[#7b6e5d] hover:text-[#6f4e37]">Contact</Link>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-[#7b6e5d] rounded-md px-4 py-1 w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-[#4b2e2b]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
