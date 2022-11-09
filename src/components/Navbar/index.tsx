import React from 'react'
import styles from './styles.module.sass'
import Link from 'next/link'

function Navbar() {
  return (
    <footer className={styles.container}>
        <nav>    
            <Link href='/portfolio' legacyBehavior>
                <a>Portifólio</a> 
            </Link>
               
             <Link href='/about' legacyBehavior>
                <a>Sobre mim</a>
             </Link>  

            
        </nav>
    </footer>
  )
}

export default Navbar

export function NavbarHome(){

  return(
    <footer className={styles.container}>
        <nav>    
            <Link href='/' legacyBehavior>
                <a>Início</a> 
            </Link>
               
             <Link href='/about' legacyBehavior>
                <a>Sobre mim</a>
             </Link>  

            
        </nav>
    </footer>
  )
}

export function NavbarHomePort(){

  return(
    <footer className={styles.container}>
        <nav>    
            <Link href='/' legacyBehavior>
                <a>Início</a> 
            </Link>
               
             <Link href='/portfolio' legacyBehavior>
                <a>Portifólio</a>
             </Link>  

            
        </nav>
    </footer>
  )
}