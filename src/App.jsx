import { useState } from 'react'
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css'

function App() {
  // State to hold user input
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleSearchSubmit = event => {
    event.preventDefault();
    if (!username.trim()) return;

    setSubmittedUsername(username);
    setUsername('');
  }

  return (
    <div>
      <SearchBar username={username} setUsername={setUsername} handleSearchSubmit={handleSearchSubmit} />
    </div>
  )
}

export default App
