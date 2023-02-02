import { INavbarItem } from '@Types/INavbarItem'
import '@Assets/Scss/navbar.scss'

export default function NavbarItem({ name }: INavbarItem) {
  return <div className="pageItem">{name}</div>
}
