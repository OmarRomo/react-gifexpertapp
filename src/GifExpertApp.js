import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrids} from "./GifGrids";
export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(["Naruto"]);
    // const handleAdd= () => {
    //     setCategorias([...categorias,"inuyasha"]);
    //}

    //document.write(categorias);
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategorias={setCategorias} />
             {/* dentro se podria llamar categorias={categorias} para pasarlo como porops del otro lado pero es mmas facil si lo pasas como una funcion asi ya no hay que hacer uso de la props*/}
            <hr/>
            {/*<button onClick={handleAdd}>Añadir</button> este boton se quita para hacer la caja de texto en AddCategory*/}
            <ul>
                {
                    //return <li key={category}>{category}</li>; este es el return de categorias.map perom como se traera el componente creado en GifGrinds lo comentamos ya que no se usara
                    categorias.map ( category =>
                        <GifGrids
                        key={category}
                        category={category} />

                    )
                }
            </ul>
        </>
    );
}
