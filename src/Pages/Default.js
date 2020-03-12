import React from 'react'
import { NavLink } from 'react-router-dom'

export const Default = () => {
  return (
    <>
      <h2>Page not found</h2>
      <NavLink to={'/'}>Return to home page</NavLink>
    </>
  )
}