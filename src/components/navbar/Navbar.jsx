import React from 'react';
import Estilos from './Navbar.module.css';
import '../../App.css';
import game from '../../assets/game.svg';
import {useNavigate} from 'react-router-dom';
export default function Navbar () {

    const navigate = useNavigate();


    // Hooks

    const Register = () => {
      let ask = window.confirm('Seguro que quiere salir de esta pagina')
        navigate('/register');
    }
    const Landing = () => {
        navigate('/')
    }
    
    const SingIn = () => {
       let ask = window.confirm('Seguro que quiere salir de esta pagina')
        if(ask === true) {
            navigate('login')
        }else {
            null    
        } 
    }


    return (
        <div className={Estilos.container}>

        <header className={Estilos.header}>
            <nav className={`centro ${Estilos.nav}`}>
                <div className={`${Estilos.juegos}`}>
                    <div className={Estilos.start} onClick={()=> Landing()}><img src={game} width={30} height={30}/></div>
                    <div><span>casino</span></div>
                    <div><span>deportes</span></div>
       
                </div>
                <div></div>
                <div className={`${Estilos.sesion}`}>
                    <div><button onClick={()=> SingIn()}>Iniciar Sesion</button></div>
                    <div><button onClick={()=> Register()}>Registrarse</button></div>
                </div>
            </nav>
        </header>
        </div>

    )
}