import { pages, settings } from '@Assets/Data/mock'
import '@Assets/Scss/navbar.scss'
import NavbarItem from '@Components/NavBar/NavbarItem'

export default function NavBar() {
  return (
    <div id="navbar">
      <div className="itemContainer">
        {pages.map((page) => {
          return <NavbarItem name={page} />
        })}
      </div>
      <div className="centerContainer">Center View</div>
      <div className="itemContainer">
        {pages.map((page) => {
          return <NavbarItem name={page} />
        })}
      </div>
    </div>
  )
}
