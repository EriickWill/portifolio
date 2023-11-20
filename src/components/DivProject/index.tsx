import Link from "next/link";
import React from "react";
import "./style.scss";

interface IProps{
  imgSrc:string,
  route:string
}
export default function DivProject({imgSrc,route}:IProps) {
  return (
    <div className="imgCard">
      <img src={imgSrc} alt="Imagem do projeto" />
      <Link href={route}>Detalhes</Link>
    </div>
  );
}
