import React from "react";

export default function Layout() {
    const navlinks = [
       {
        route: '/home',
        content: 'Home'
       },

       {
        route: '/about',
        content: 'About'
       },
    ]
    return (
         <div>
            
                  {
                navlinks.map((item, index)=>(
                    <li key={index}>{item.content}</li>
                ))
            }
            
          
         </div>
    )
}
