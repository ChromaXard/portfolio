import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "A propos - Portfolio - akastler",
  description: "written by akastler with Next.js",
};

export default function About() {
  return (
    <div className="flex-1">Hello World from about</div>
  );
}