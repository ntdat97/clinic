import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import story from "./story.md";
import ReactMarkdown from "react-markdown";
export const Story = ({ source }: any) => {
  return (
    <div>
      <h1>My Component</h1>
      <ReactMarkdown># My Document

This is a paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Section One

Here's a list of items:

- Item 1
- Item 2
- Item 3

## Section Two

Here's an image:

![Alt Text](/path/to/image.jpg)

And here's a link:

[Link Text](https://www.example.com/)
​</ReactMarkdown>
    </div>
  );
};
