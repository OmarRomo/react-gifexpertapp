import React from "react";
import {GifGridItem} from "./GifGridItem";
//import {getGifs} from "./helpers/getGifs"; // se trae la funcion de la carpeta helpers donde se encuentra el getgifs
import {useFechGifs} from "./hooks/useFechGifs";

export const GifGrids= ({category})=>{ //n category es el prop que pasas a la otra ap

    //const state = useFechGifs(); //este sera el cosume hook que es traido del useFechGifs
//se desestructura la constante de arriba
    const {data:imagenes,loading} = useFechGifs(category);


//se comenta esto para el uso del custom hook
// const [images, setImages]= useState([]);
//
// useEffect( () => {
//     getGifs(category)//  este getGifs es el que retorna la promesa creada con el async
//     .then(setImages)// al ser una promesa podemos poner un .them el cual traera consigo set images el cual es una funcion modificadora
// }, [category] );
 // el corchete es el segundo argumento de la funcion que significa al ponerse sin nada adentro que solo se ejecutara una vez asi no traera la informaciion cada que se introdusca un dato
 //se agrega categorya por si en algun momento la categoria llegase a cambiar se volveria a ejecutar todo lo de esa seccion



    return(
        <>
            <h3> {category} </h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
            {/*se desestructura la prop*/}
            {
                imagenes.map( img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                        />
                ))
            }
            </div>
        </>
    )
}


 // <ol> esto se hace para crear una lista ordenada trayendo solo 10 imagenes pero se comenta por que se creo un nuevo componente llamaddo gifgrifitems el cual hara la funcion de traer la imagfen y su titutlo
 // {
 //     images.map( title => se crea esta funcion para crear una lista con 10 imagenes, tiene como argumento el nombre imagenes
 //         <li key={title.id}> dentro de lista se trae el key
 //         {title.title} se desestructura el title que es la funcion de arriba y se llama  como una direccion al titulo que ejecutara la accion de nombrar al titulo de la imgen
 //         </li>
 //     )
 // }
 // </ol>
