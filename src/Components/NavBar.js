import React from 'react'
import { NavLink } from 'react-router-dom'

const linksArray = [
  {
    href: "/",
    name: 'Home'
  },
  {
    href: "/todo-list",
    name: 'ToDo List'
  },
  {
    href: "/not-found",
    name: 'Not Found'
  }
]

const NavList = ({links}) => links.map((item, i) => {
  return (
    <li 
      key={i}
      className="nav-item"
    >
      <NavLink
        className="nav-link"
        to={item.href}
        exact
      >
        {item.name}
        </NavLink>
    </li>
  )
})

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to={'/'} className="navbar-brand">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavList links={linksArray} />
        </ul>
      </div>
    </nav>
  )
}