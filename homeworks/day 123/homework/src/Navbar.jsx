import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    const navlist = [
        {
            path: '/',
            content: 'Home'
        },

        {
            path:'/about',
            content:'about'
        },

        {
            path: '/book',
            content: 'book'
        },

        {
            path: '/book1',
            content: 'book1'
        }
    ]
     return (
        <ul>
            {navlist.map((item, index)=>(
                 <li><Link to={item.path} key={`_nav_list_${index}`}>{item.content}</Link></li>
            ))}
        </ul>
     )
}

