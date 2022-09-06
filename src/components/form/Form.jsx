import '../../App.css';
import Estilos from './Form.module.css';
function Formulario() {

    const SendRegister = (e) => {
        e.preventDefault();
        alert('hola mi tey')
    }


        return (
            <div className={`centro ${Estilos.container}`}>
                  
                  <form className={`${Estilos.formularios}`} onSubmit={(e)=> SendRegister(e)}>

                        <div>
                            <div>
                                <fieldset>
                                    <legend>user</legend>
                                    <div><input type='text' placeholder='username'/></div>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset>
                                    <legend>email</legend>
                                    <div><input type='email' placeholder='proof@test.com'/></div>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset>
                                    <legend>phone</legend>
                                    <div><input type='number' placeholder='+541122334455'/></div>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset>
                                    <legend>password</legend>
                                    <div><input type='password' placeholder='<&password>'/></div>
                                </fieldset>
                            </div>
                        </div>



                    <button type='submit' className={Estilos.btn}>Registrar</button>
                  </form>

            </div>
        )
}

export default Formulario;