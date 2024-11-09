// import Choose from "@/components/home-page/Choose";
import Experience from "@/components/home-page/Experience";
import Hero from "@/components/home-page/Hero";
//import Parallax from "@/components/home-page/Parallax";
import Solutions from "@/components/home-page/Solutions";
import Strip from "@/components/home-page/Strip";
import Wrapper from "@/components/home-page/Wrapper";

export default async function Home() {
  return (
    <>
      <Hero />
      <Strip />
      <Experience />
      {/* <Parallax /> */}
      <Wrapper />
      <Solutions />
    </>
  );
}
