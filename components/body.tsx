import Image from "next/image";

import styles from "../styles/body.module.css"
const Body = () => {
    return (
        <div>
            <div className="cuadro cuadro1">
                <div className="contenido">
                    Emmanuel Gallego
                    <div className={styles.ventaOculta}>
                        <Image src="/imagenes/Hombre8.jpg" width={100} height={100} alt="" />
                        <p>
                            Estoy interesado en el arte y en la programación
                        </p>
                        <p>
                            Habilidad: Desarrollo Web
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;