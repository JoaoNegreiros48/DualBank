import styles from '../styles/topMenu.module.css'
import etiqueta from '../assets/etiqueta.svg'
import add from '../assets/add.svg'
import view from '../assets/view.svg'

export function TopMenu(){
    return(
        <div className={styles.topMenu}>
            <button className={styles.buttons}><img src={etiqueta} alt=""/></button>
            <button className={styles.buttons}><img src={add} alt=""/></button>

            <div className={styles.components}>
                <div className={styles.framePrincipal}>
                    <h3>P</h3>
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <p className={styles.title}>Principal</p>
                        <img src={view} alt=""/>
                    </div>
                    <p className={styles.valor}>R$15.000,00</p>
                </div>
            </div>
            
            <div className={styles.components}>
                <div className={styles.frameAluguel}>
                    <h3>A</h3>
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <p className={styles.title}>Aluguel</p>
                        <img src={view} alt=""/>
                    </div>
                    <p className={styles.valor}>R$1.600,00</p>
                </div>
            </div>

            <div className={styles.components}>
                <div className={styles.frameAlimentacao}>
                    <h3>A</h3>
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <p className={styles.title}>Alimentação</p>
                        <img src={view} alt=""/>
                    </div>
                    <p className={styles.valor}>R$600,00</p>
                </div>
            </div>
        </div>
    );
}