import Link from "next/link";
import React from "react";
import "./style.scss";
import Button from '@/components/Button';

export default function ImgHome() {
  return (
    <section id="homeImg" className="container">
      <img src="/imgAbout.jpg" alt="" />
    </section>
  );
}
