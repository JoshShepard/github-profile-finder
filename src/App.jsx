import { useState, useEffect } from 'react'
import SearchBar from './Components/SearchBar/SearchBar';
import HeroPage from './Components/HeroPage/HeroPage';
import UserProfile from './Components/UserProfile/UserProfile';
import RepoList from './Components/RepoList/RepoList';
import styles from './App.module.css'

function App() {
  // State to hold live user input, submitted username, user data, repos, loading state, and error messages
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 


  // Function to handle form submission
  const handleSearchSubmit = event => {
    // Prevent refresh on form submission
    event.preventDefault();
    // Prevent form submission if user input is empty
    if (!username.trim()) return;

    // Set verified username
    setSubmittedUsername(username);
    console.log(`Searching for user: ${username}`);

    // Clear input field after submission
    setUsername('');
  }

  useEffect(() => {
    // Prevent fetch if no username is submitted
    if (!submittedUsername) return;

    // Function to fetch user data from GitHubAPI
    const fetchUserData = async () => {
      setIsLoading(true); // Start loading
      setError(null); // Clear previous errors

      try {
        // API call to fetch user data
        const response = await fetch(`https://api.github.com/users/${submittedUsername}`);
        // Handle non-200 responses
        if (!response.ok) {
          throw new Error(`User not found: ${submittedUsername}`);
        }
        
        // API call to fetch user repositories
        const repoResponse = await fetch(`https://api.github.com/users/${submittedUsername}/repos`);
        // Handle non-200 responses
        if (!repoResponse.ok) {
          throw new Error(`Repositories not found for user: ${submittedUsername}`);
        }

        // GitHub User data object
        const data = await response.json();
        setUserData(data); // Store fetched user data
        // console.log(data);

        // GitHub Repositories data object
        const repoData = await repoResponse.json();
        setRepos(repoData);
        // console.log(repoData);
      } catch (err) {
        setError(err.message); // Set error message
        setUserData(null); // Clear previous user data
        setRepos([]); // Clear previous repos
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchUserData();
  }, [submittedUsername]);

  return (
    <div className={styles.appContainer}>
      <SearchBar username={username} setUsername={setUsername} handleSearchSubmit={handleSearchSubmit} />
      {/* If there isn't userData show hero page */}
      {!submittedUsername && <HeroPage />}
      {/* Display loading message */}
      {isLoading && <p className={styles.loading}>Looking for user...</p>}
      {/* Display error message */}
      {error && <p className="error">{error}</p>}
      {/* Display user profile if userData is available */}
      {userData && <UserProfile user={userData} />}
      {/* Display repo list if repos are available */}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  )
}

export default App
