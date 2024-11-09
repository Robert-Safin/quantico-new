import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed w-full transform backdrop-blur-sm bg-black bg-opacity-40 border-b border-gray-700 z-50">
      <div className="flex justify-between items-center p-4 max-w-screen-desktop mx-auto w-full">
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={50}
            alt="logo"
            className=" object-cover w-[100px] tablet:w-[150px]"
          />
        </Link>
        <div className="flex space-x-6 tablet:space-x-9 desktop:space-x-12">
          <Link href="/about" className="text-medium text-white hover:text-accent">
            About
          </Link>
          <Link href="/services" className="text-medium text-white hover:text-accent">
            Services
          </Link>
          <Link href="/compliance" className="text-medium text-white hover:text-accent">
            Compliance
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
