
import React, {useContext} from "react"
import './Home.css'
import { AuthContext } from "../../Context/AuthContext"


const homeText = `Con
 más de 40 años de trayectoria en litigio civil, en Ramirez Saavedra, nos enorgullece haber enfrentado casos 
extremadamente desfavorables con éxito. Nuestro enfoque estratégico y profundo conocimiento 
del sistema legal mexicano nos ha permitido salir airosos en situaciones complicadas. 
Confía en nuestra capacidad para enfrentar cualquier desafío legal que puedas tener en 
el ámbito del litigio civil. Estamos aquí para brindarle la representación jurídica excepcional 
que necesitas. 
`
function Home(){

    const authContext = useContext(AuthContext)
    const isAuthenticated = authContext.isAuthenticated
    console.log('testing authContext',isAuthenticated)

    return(
        <div data-testid='div-elem' className="home-wrapper">
            <p className="home-text">
                {homeText}
            </p>
        </div>
    )
}

export default Home