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
                        <h3 className={styles.title}>Principal</h3>
                        <img src={view} alt=""/>
                    </div>
                    <h3 className={styles.valor}>R$15.000,00</h3>
                </div>
            </div>
            
            <div className={styles.components}>
                <div className={styles.frameAluguel}>
                    <h3>A</h3>
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Aluguel</h3>
                        <img src={view} alt=""/>
                    </div>
                    <h3 className={styles.valor}>R$1.600,00</h3>
                </div>
            </div>

            <div className={styles.components}>
                <div className={styles.frameAlimentacao}>
                    <h3>A</h3>
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Alimentação</h3>
                        <img src={view} alt=""/>
                    </div>
                    <h3 className={styles.valor}>R$600,00</h3>
                </div>
            </div>
        </div>
    );
}