import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer-grey">
      <div className="flex flex-col tablet:flex-row tablet:justify-between space-y-10 tablet:space-y-0 px-7 tablet:px-12 desktop:px-14">
        <div className="tablet:border-r tablet:w-1/2 pt-10 tablet:pt-14 desktop:py-24 flex flex-col space-y-2 tablet:space-y-3">
          <p className="small-text text-white mb-4">
            The Quantico Trading Company Co. LLC
          </p>
          <p className="small-text text-light-grey-footer">
            711 Bayswater Bay Business Bay,
          </p>
          <p className="small-text text-light-grey-footer">
            Dubai, United Arab Emirates
          </p>
        </div>
        <div className="flex space-x-20 desktop:space-x-40 pb-8 pt-10 tablet:pt-14 desktop:py-24 tablet:w-1/2 tablet:ml-20 desktop:ml-40">
          <div className="flex flex-col space-y-2 tablet:space-y-3">
            <p className="small-text text-white mb-4">Company</p>
            <Link
              href="/"
              className="small-text text-light-grey-footer hover:text-accent "
            >
              Home
            </Link>

            <Link
              href="/about"
              className="small-text text-light-grey-footer hover:text-accent"
            >
              About
            </Link>

            <Link
              href="/services"
              className="small-text text-light-grey-footer  hover:text-accent"
            >
              Services
            </Link>
          </div>
          <div className="flex flex-col space-y-2 tablet:space-y-3">
            <p className="small-text text-white mb-4">Legal</p>
            <Link
              href="/compliance"
              className="small-text text-light-grey-footer hover:text-accent"
            >
              Compliance
            </Link>
            {/* <p className="small-text text-light-grey-footer hover:text-accent">
              Terms and Conditions
            </p> */}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center tablet:border-t py-4 tablet:py-8 px-7 tablet:px-12 desktop:px-14">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="logo"
          className="object-cover w-[90px] tablet:w-[185px]"
        />
        <p className="small-text text-text-white-on-black">
          © 2024 The Quantico Trading Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
