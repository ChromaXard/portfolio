import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";



export const metadata: Metadata = {
  title: "Accueil - Portfolio - akastler",
  description: "written by akastler with Next.js",
};

import { getImageProps } from 'next/image'
import Link from "next/link";
 
export function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function Home() {
  const t = useTranslations('home');
  const {
    props: { srcSet },
  } = getImageProps({ alt: 'code background', width: 1920, height: 1080, src: '/code-background.jpg' })
  const backgroundImage = getBackgroundImage(srcSet)
  const style = {backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center'}
  return (
    <div className="flex w-full h-screen">
      <div className="w-full h-screen" style={style}>
        <div className="flex flex-col w-full h-full bg-black text-white items-center justify-center" style={{opacity: 0.8}}>
          <h1 className="text-4xl font-bold w-full text-center m-2">
            Kastler Axel
          </h1>
          <h2 className="text-3xl w-full text-center m-2">
            {t("subtitle")}
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center m-2">
            <Link className="inline-block px-3 py-1 md:mx-2 my-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" href="/about">
              {t("about")}
            </Link>
            <Link className="inline-block px-3 py-1 md:mx-2 my-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" href="/projects">
              {t("projects")}
            </Link>
            <Link className="inline-block px-3 py-1 md:mx-2 my-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" href="/career">
              {t("career")}
            </Link>
            <Link className="inline-block px-3 py-1 md:mx-2 my-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" href="/skills">
              {t("skills")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
