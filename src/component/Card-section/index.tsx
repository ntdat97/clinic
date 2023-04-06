import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";
import { Card } from "../Card";
const myFont = localFont({ src: "../../font/DidotW01Italic.ttf" });
const montserrat = Montserrat({ preload: false });
export const CardSection = () => {
  return (
    <section className="py-4 mx-auto overflow-hidden bg-black">
      <div className="container  mx-auto px-4 max-w-[900px]">
        <h3 className="font-heading mb-7 text-xl font-semibold">
          Articles from Knowledge Base
        </h3>
        <div className="flex flex-wrap -m-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};
