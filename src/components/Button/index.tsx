import Link from "next/link";
import React from "react";
import "./style.scss";
interface IProps {
  name: string;
  route: string;
  target:string
}
export default function Button({ name, route,target }: IProps) {
  return (
    <button>
      <Link href={route} target={target}>{name}</Link>
    </button>
  );
}
