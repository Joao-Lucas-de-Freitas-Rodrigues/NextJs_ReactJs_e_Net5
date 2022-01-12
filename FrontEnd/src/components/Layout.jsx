import Link from "next/Link"
import styles from '../styles/Layout.module.css'

export default function Layout(props){
    return(
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <Link href='/profissional/home'><h1>Home</h1></Link>
                {props.titulo !== 'Home' ? <Link href="/profissional/home"><a>Voltar</a></Link> : ''}    
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )

}