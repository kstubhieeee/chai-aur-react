
import './App.css'
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1 className='bg-purple-500'>React with chai</h1>
    </UserContextProvider>
  )


}

export default App
