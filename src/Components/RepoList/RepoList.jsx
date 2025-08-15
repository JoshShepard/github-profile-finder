import styles from './RepoList.module.css';

function RepoList({ repos }) {
    if (repos.length === 0) {
        return (
            <p className={styles.emptyRepo}>No public repositories found...</p>
        );
    }

    return (
        <div className={styles.repolistContainer}>
            {repos.map(repo => (
                <div key={repo.id} className={styles.repoCard}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.repoLink}>{repo.name}</a>
                    {repo.description && <p className={styles.repoDescription}>{repo.description}</p>}
                </div>
            ))}
        </div>
    );
}

export default RepoList;