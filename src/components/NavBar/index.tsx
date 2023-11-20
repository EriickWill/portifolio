import React from 'react'
import "./style.scss"
import Link from 'next/link'
export default function NavBar() {
  return (
    <header>
      <nav className='container'>
        <p>Logo</p>
        <ul>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Sobre</Link></li>
          <li><Link href="#">Projetos</Link></li>
          <li><Link href="#">Serviços</Link></li>
          <li><Link href="#">Contatos</Link></li>
        </ul>
      </nav>
    </header>
  )
}
