import React from "react";
import { Link } from "react-router-dom";

const navlist= [
    {
        id: '/',
        content: 'Home'
    },
    {
        id: '/login',
        content: 'Login'
    },


    {
        id: '/singUp',
        content: 'Sign up'

    },

    {
        id: '/landing',
        content: 'Landing page'
    }



]

export function Navbar() {
    return (
     <div>
     {navlist.map((item, index) => (
        <Link key={index} to={item.id}><li>{item.content}</li></Link>
     ))}
     </div>
    )
}