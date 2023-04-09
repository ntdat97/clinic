import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import { Herotitle } from "@/component/Hero";
import { Header } from "@/component/Header";
import { CardSection } from "@/component/Card-section";
import Story, { StoryData } from "@/component/story";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Welcome } from "@/component/Welcome";
import { OpenTime } from "@/component/open-time";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ preload: false });
export default function Home({ source }: StoryData) {
  return (
    <>
      <div className={montserrat.className}>
        <Header />
        <Herotitle />
        <CardSection />
        <Story source={source} />
        <Welcome />
        <OpenTime />
      </div>
    </>
  );
}
export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/story").then((response) =>
    response.json()
  );
  const mdxSource = await serialize(data.storyMd);
  return { props: { source: mdxSource } };
}
