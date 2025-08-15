import styles from './HeroPage.module.css';

function HeroPage() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <h1 className={styles.slogan}>Search for a fellow coder!</h1>
                <p className={styles.description}>Find GitHub profiles and explorer their work instantly!</p>
            </div>
        </div>
    );
}

export default HeroPage;