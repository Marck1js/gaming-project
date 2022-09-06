import '../../App.css';
import Estilos from './Login.module.css';
import {useNavigate} from 'react-router-dom'
function Login() {

    const navigate = useNavigate();

    const Register = () => {
          navigate('/register');
      }


        return (
            <div className={`centro ${Estilos.container}`}>
                  
                  <form className={`${Estilos.formularios}`} onSubmit={(e)=> SendRegister(e)}>

                        <div>
                            <div>
                                <fieldset>
                                    <legend>email</legend>
                                    <div><input type='email' placeholder='proof@test.com'/></div>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset>
                                    <legend>password</legend>
                                    <div><input type='password' placeholder='username'/></div>
                                </fieldset>
                            </div>
                           
                        </div>


                    <p>no tiene usuario, registrese <span onClick={()=> Register()}>aqui</span></p>
                    <button type='submit' className={Estilos.btn}>Iniciar Sesion</button>
                  </form>

            </div>
        )
}

export default Login;