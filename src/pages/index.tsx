import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Herotitle } from "@/component/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Herotitle />
    </>
  );
}
