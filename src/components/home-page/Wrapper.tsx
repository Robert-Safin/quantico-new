"use client";

import Container from "../ui/Container";
import Choose from "./Choose";

const Wrapper = () => {
  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: "url('/waves.png')",
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Choose />
      </Container>
    </div>
  );
};

export default Wrapper;
