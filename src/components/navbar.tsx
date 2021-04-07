import styles from '../styles/navbar.module.css'
import icon from '../assets/icon.png'
import logo from '../assets/logo.png'
import seta from '../assets/seta.svg'
import copy from '../assets/copyIcon.svg'
import view from '../assets/view.svg'
import pesquisarIcon from '../assets/pesquisarIcon.svg'
import chat from '../assets/chat.svg'
import calendario from '../assets/calendario.svg'
import bell from '../assets/bell.svg'

export function Navbar(){
    return(
        <div className={styles.navbar}>
            <img src={icon} className={styles.logo} alt=""/>
            <img src={logo} className={styles.icon} alt=""/>

            <div className={styles.bar}/>

            <div className={styles.contaCorrente}>
                <div className={styles.top}>
                    <h2>Conta Corrente</h2>
                    <img src={seta} alt=""/>
                    <h3 className={styles.saldo}>Saldo</h3>
                    <img src={view} alt=""/>
                </div>

                <div className={styles.bottom}>
                    <h3>Ag. 00005-1</h3>
                    <h3 className={styles.CC}>C.C. 00000000000000000020-1</h3>
                    <img src={copy} alt=""/>
                    <h3 className={styles.saldoValor}>R$40.000,00</h3>
                </div>
            </div>

            <div className={styles.right}>
                <form action="">
                    <input type="text" placeholder="Pesquisar"/>
                    <button><img src={pesquisarIcon} alt=""/></button>
                </form>

                <div className={styles.icon}>
                    <img src={chat} className={styles.chat} alt=""/>
                    <img src={calendario} className={styles.calendario} alt=""/>
                    <img src={bell} className={styles.bell} alt=""/>
                </div>
                <div className={styles.circle}/>
            </div>
        </div>
    );
}