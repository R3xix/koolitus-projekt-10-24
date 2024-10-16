import React from 'react'
import { Link } from 'react-router-dom'

// kirjutamisel 2 varianti
// 1. emmet  div+enter ------div div
// button+enter ---- button button
// 2. Soovin importi  Link ja sealt dropdownist Link ja näha react-router-dom
//                    Page   dorpdownist  ----- ./pages/Page


function Ostukorv() {
  return (
    <div>Ostukorv
      <div>Ostukorv on tühi</div>
      <Link to="/">
      Mine avalehele
      </Link>
    </div>
  )
}

export default Ostukorv