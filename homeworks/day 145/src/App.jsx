
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from "react"
function App() {
 
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("users"))
    setTimeout(() => {
      setIsLoading(false)
      setUser(userLocalStorage)
    }, 1000);
  }, [])
  function handleAddUser() {
    const user = { name: "davit", surname: "grdzelishvili" }
    localStorage.setItem("users", JSON.stringify(user))
  }
  return (
    <>
      <div>
        <button onClick={() => handleAddUser()}>print homework infomation</button>
       </div>
       <h1>{user.name}</h1>
       <h1>{user.surname}</h1>
       {isLoading && (<div className="rounded-full  border-5 border-black size-10 border-t-red-500 animate-spin"/>)}
    </>
  )
}

export default App
