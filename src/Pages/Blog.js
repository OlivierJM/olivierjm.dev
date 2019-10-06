import React from "react";
import ReactMarkdown from "react-markdown";

const blog = " # Title of my blog" + "`This is a line of code`" + "Hello ";

function RenderBlog() {
  return <ReactMarkdown source={blog} />;
}

export default RenderBlog;
