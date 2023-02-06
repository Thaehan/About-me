import { pages } from '@Assets/Data/mock'
import '@Assets/Scss/navbar.scss'
import NavbarItem from '@Components/NavBar/NavbarItem'

function myFunction() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

export default function NavBar() {
  return (
    <nav className="topnav" id="myTopnav">
      <div className="itemContainer">
        {pages.map((page, index) => {
          if (index < pages.length / 2) return <NavbarItem name={page} />
        })}
      </div>
      <div className="centerContainer">
        <div id="centerItem">Han</div>
      </div>
      <div className="itemContainer">
        {pages.map((page, index) => {
          if (index >= pages.length / 2) return <NavbarItem name={page} />
        })}
      </div>
      <div className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  )
}
