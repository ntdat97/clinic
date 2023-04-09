import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import TransitionText from "./component/index";
import { Montserrat } from "next/font/google";

export interface StoryData {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}
const montserrat = Montserrat({ preload: false });
export default function Story({source}:StoryData) {
  return (
    <div className={montserrat.className + " px-6 lg:max-w-[980px] mx-auto lg:text-[16px] text-[13px] mb-12"}>
      <MDXRemote {...source} components={{ TransitionText }}/> 
    </div>
  );
}
