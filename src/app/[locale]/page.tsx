import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import codeBackground from "../../../public/code-background.jpg";



export const metadata: Metadata = {
  title: "Accueil - Portfolio - akastler",
  description: "written by akastler with Next.js",
};

import { getImageProps } from 'next/image'
 
function getBackgroundImage(srcSet = '') {
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
      <div className="flex w-full h-1/2" style={style}>
        <div className="flex flex-col w-full h-full bg-black text-white items-center justify-center" style={{opacity: 0.8}}>
          <h1 className="text-4xl font-bold w-full text-center">
            Kastler Axel
          </h1>
          <h2 className="text-3xl w-full text-center">
            {t("subtitle")}
          </h2>
        </div>
      </div>
    </div>
  );
}
