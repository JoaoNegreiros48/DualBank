import styles from '../styles/sidebar.module.css'
import home from '../assets/home.svg'
import chartPie from '../assets/chartPie.svg'
import chartLine from '../assets/chartLine.svg'
import money from '../assets/money.svg'
import hand from '../assets/hand.svg'
import pix from '../assets/pix.png'
import creditCard from '../assets/creditCard.svg'
import recibos from '../assets/recibos.svg'
import wrench from '../assets/wrench.svg'
import question from '../assets/question.svg'


export function SideBar(){
    return(
        <div className={styles.sidebar}>
            <button><img src={home} alt=""/></button>
            <button className={styles.active}><img src={chartPie} alt=""/></button>
            <button><img src={chartLine} alt=""/></button>
            <button><img src={money} alt=""/></button>
            <button><img src={hand} alt=""/></button>
            <button><img src={pix} alt=""/></button>
            <button><img src={creditCard} alt=""/></button>
            <button><img src={recibos} alt=""/></button>
            <button><img src={wrench} alt=""/></button>
            <button><img src={question} alt=""/></button>
        </div>
    );
}