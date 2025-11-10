import React from "react";
import { Header } from "../../components/layout";

const decorativeImages = [
  {
    className: "absolute top-[322px] left-[108px] w-[33px] h-28",
    alt: "Forme dcorative",
    src: "/forme-d-corative.svg",
  },
  {
    className: "absolute top-[1077px] left-[474px] w-[27px] h-[138px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-2.svg",
  },
  {
    className: "absolute top-[2176px] left-[433px] w-[68px] h-[82px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-3.svg",
  },
  {
    className: "absolute top-[2399px] left-[108px] w-[35px] h-[138px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-2.svg",
  },
  {
    className: "absolute top-[3093px] left-[436px] w-[65px] h-[111px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-1.svg",
  },
  {
    className: "absolute top-[3649px] left-[108px] w-12 h-[83px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-10.svg",
  },
  {
    className: "absolute top-[-11676px] left-[-5160px] w-[120px] h-[121px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-4.svg",
  },
  {
    className: "absolute top-[-11676px] left-[-5160px] w-[153px] h-[146px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-2.svg",
  },
  {
    className: "absolute top-[-11676px] left-[-5160px] w-[88px] h-[88px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-8.svg",
  },
  {
    className: "absolute top-[-11676px] left-[-5160px] w-[120px] h-[121px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-4.svg",
  },
  {
    className:
      "absolute top-[26px] left-[334px] w-[167px] h-[200px] rounded-[34px] object-cover",
    alt: "Polygon",
    src: "/polygon-3.png",
  },
  {
    className: "absolute top-[1656px] left-[150px] w-[135px] h-[149px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-12.svg",
  },
  {
    className: "absolute top-0.5 left-[405px] w-[76px] h-[83px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-11.svg",
  },
  {
    className: "absolute top-[1622px] left-[189px] w-[88px] h-[90px]",
    alt: "Forme dcorative",
    src: "/forme-d-corative-7.svg",
  },
];

export const PageArticle = (): JSX.Element => {
  return (
    <main className="overflow-hidden [background:url(..//--v4-1-0-page-article-de-blog.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-[5525px] relative">
      <div className="absolute top-[278px] left-[-108px] w-[617px] h-[8349px]">
        {decorativeImages.map((image, index) => (
          <img
            key={`decorative-${index}`}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>

      <Header />

      <div className="pt-[106px]">
        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Article de Blog</h1>
          <p className="text-gray-600">Contenu de l'article...</p>
        </div>
      </div>
    </main>
  );
};
