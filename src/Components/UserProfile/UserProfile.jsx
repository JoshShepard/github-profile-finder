import styles from './UserProfile.module.css';

function UserProfile({ user }) {
    // Prevent rendering if user data is not available yet ---- IMPORTANT LEARNING MOMENT ----
    if (!user) return null;

    // Render user profile information
    return (
        <div className={styles.profileContainer}>
            {user.avatar_url && <img src={user.avatar_url} alt={`${user.login}'s avatar`} className={styles.avatar} />}
            <div className={styles.profileDetails}>
                <h2 className={styles.header}>{user.name || user.login}</h2>
                {user.bio && <p className={styles.bio}>{user.bio}</p>} 
                <p className={styles.profileLocation}>{user.location}</p>
                <p className={styles.followers}>Followers: {user.followers} | Following: {user.following}</p>
                <a href={user.html_url} target="_blank" rel="noreferrer" className={styles.profileLink}>View Profile</a>     
            </div>
        </div>
    );
}

export default UserProfile;