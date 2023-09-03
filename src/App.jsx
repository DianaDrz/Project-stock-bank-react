import React, { useState } from 'react'
import './App.css';
import Login from './components/Login'
import Home from './pages/Home'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [currentAction, setCurrentAction] = useState('')

  const handleLogin = (name, user) => {
    setLoggedIn(true)
    setFullName(name)
    setUsername(user)
  };

  const handleLogout = () => {
    alert('¡Hasta luego! Has finalizado tu sesión.');
    setLoggedIn(false)
    setFullName('')
    setUsername('')
    setCurrentAction('')
    
  };

  const handleSelectAction = (action) => {
    setCurrentAction(action);
  };

  return (
    <div>
      {loggedIn ? (
        <Home
          fullName={fullName}
          onLogout={handleLogout}
          onSelectAction={handleSelectAction}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App

