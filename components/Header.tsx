// components/Header.tsx
import Link from "next/link";
import Input from "@/components/Input";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-[#faf6f0] shadow-md  p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-[#4b2e2b]">
          <Link href="/"><Image src='/images/logo.png' alt="" width={55} height={55}/></Link>
        </div>

        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="text-[#7b6e5d]  hover:text-[#6f4e37] transition duration-300">
            خانه
          </Link>
          <Link
            href="/products"
            className="text-[#7b6e5d] hover:text-[#6f4e37] transition duration-300"
          >
            محصولات
          </Link>
          <Link href="/account" className="text-[#7b6e5d] hover:text-[#6f4e37] transition duration-300">
            حساب کاربری
          </Link>
          <Link href="/contact" className="text-[#7b6e5d] hover:text-[#6f4e37] transition duration-300">
            تماس با ما
          </Link>
        </nav>

        <div className="relative ">
          <Input placeholder="Search..." type="text" />
        </div>
      </div>
    </header>
  );
};

export default Header;
