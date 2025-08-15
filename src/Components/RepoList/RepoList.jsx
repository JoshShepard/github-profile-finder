import styles from './RepoList.module.css';

function RepoList({ repos }) {
    //  User doesn't have public repos
    if (repos.length === 0) {
        return (
            <p className={styles.emptyRepo}>No public repositories found...</p>
        );
    }

    return (
        <>
            <h2 className={styles.repoHeader}>{repos[0].owner.login}'s Repositories ({repos.length})</h2>
            <div className={styles.repolistContainer}>
                {repos.map(repo => (
                    <div key={repo.id} className={styles.repoCard}>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.repoLink}>{repo.name}</a>
                        {repo.description && <p className={styles.repoDescription}>{repo.description}</p>}
                    </div>
                ))}
            </div>
        </>
    );
}

export default RepoList;