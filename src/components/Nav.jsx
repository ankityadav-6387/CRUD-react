import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='py-4 flex justify-center gap-10'>
        <NavLink className={(e) => {
                return [
                    e.isActive ? ('font-semibold') : (''),
                    e.isActive ? 'text-red-700' : ''
                ].join(' ')
            }} to='/'>Home</NavLink>
        <NavLink className={(e) => {
                return [
                    e.isActive ? ('font-semibold') : (''),
                    e.isActive ? 'text-red-700' : ''
                ].join(' ')
            }} to='/create'>Create</NavLink>
        <NavLink className={(e) => {
                return [
                    e.isActive ? ('font-semibold') : (''),
                    e.isActive ? 'text-red-700' : ''
                ].join(' ')
            }} to='/show'>Show</NavLink>
    </div>
  )
}

export default Nav