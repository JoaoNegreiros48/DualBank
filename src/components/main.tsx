import styles from '../styles/main.module.css'
import imprimir from '../assets/imprimir.svg'
import baixar from '../assets/baixar.svg'
import compartilhar from '../assets/compartilhar.svg'
import seta from '../assets/seta.svg'
import refresh from '../assets/refresh.svg'
import check from '../assets/check.svg'
import view from '../assets/view.svg'

export function Main(){
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <h2>Saldo Bancário</h2>
                <button><img src={imprimir} alt=""/></button>
                <button><img src={baixar} alt=""/></button>
                <button><img src={compartilhar} alt=""/></button>
            </div>

            <div className={styles.data}>
                <div>
                    <p className={styles.title}>Data do Saldo</p>
                    <p className={styles.dados}>07/12/2020</p>
                </div>
                <img src={seta} alt=""/>
            </div>
            <div className={styles.line}/>

            <div className={styles.ultimaAtualizacao}>
                <p>Saldo atualizado às 16:48</p>
                <img src={refresh} alt=""/>
            </div>

            <div className={styles.saldoDisponivel}>
                <img src={check} className={styles.check} alt=""/>
                <div>
                    <p className={styles.title}>Saldo disponível</p>
                    <p className={styles.dados}>R$40.000,00</p>
                </div>
                <img src={view} className={styles.view} alt=""/>
            </div>
            <div className={styles.line2}/>
        </div>
    );
}