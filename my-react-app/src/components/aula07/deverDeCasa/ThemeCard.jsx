import lightStyles from './ThemeCardLight.module.css';
import darkStyles from './ThemeCardDark.module.css'

const ThemeCard = ({title, description, theme}) =>{
    const styles = theme === 'light' ? lightStyles : darkStyles;




    return(
        <>

            <div className={styles.card}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>

        </>
    );
}

export default ThemeCard;