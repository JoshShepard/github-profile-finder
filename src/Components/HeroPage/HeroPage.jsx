import styles from './HeroPage.module.css';

function HeroPage() {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.slogan}>Search for a fellow coder!</h1>
        </div>
    );
}

export default HeroPage;