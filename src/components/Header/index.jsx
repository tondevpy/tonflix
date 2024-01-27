import { Link } from "react-router-dom"
import './style.css'

function Header() {
  return (
    <header>
      <Link className="logo" to='/'>Ton Flix</Link>
      <Link className="favoritos" to='/favoritos'>Filmes</Link>
    </header>
  )
}

export default Header