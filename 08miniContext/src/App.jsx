import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
import  UserContextProvider  from "./context/UserContextProvider"


function App() {
 
  return (
    <UserContextProvider>
      <h1 className='text-yellow-300 bg-gray-600 p-4 text-3xl'>Context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
