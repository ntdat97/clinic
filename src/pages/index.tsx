import Head from "next/head";
import Image from "next/image";
import localFont from 'next/font/local'
import { Herotitle } from "@/component/Hero";
import { Header } from "@/component/Header";
import { Card } from "@/component/Card";
import { CardSection } from "@/component/Card-section";
import { Story } from "@/component/story";

const myFont = localFont({ src: '../font/DidotW01Italic.ttf' })

export default function Home() {
  return (
    <>

    <Header />
      <Herotitle />
      <CardSection />
      <Story />
    </>
  );
}
