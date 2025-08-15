import styles from './SearchBar.module.css';

function SearchBar({ username, setUsername, handleSearchSubmit }) {
    return (
        <form onSubmit={handleSearchSubmit} className={styles.form}>
            <input type="text" className={styles.input} value={username} aria-label='GitHub username search' onChange={e => setUsername(e.target.value)} placeholder="Search for a username..." />
            <button type="submit" className={styles.button}>Search</button>
        </form>
    );
}

export default SearchBar;