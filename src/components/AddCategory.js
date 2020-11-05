import React, {useState} from "react";
import PropTypes from "prop-types";

export const AddCategory =({setCategorias}) => { // se crea constante para todo el codigo
                        //se usa el setCategoriascomo una prop podria agregarce categorias como props pero es mas facil si lo pasas como  funcion
    const [inputValue, setInputValue]= useState("Busque gifs");// sze hace uso de un estado y se desestructura
    //se desestructura el useState el cual cuenta con dos propiedades inputValue donde se ingresa la informacion y setInputValue que te permite hacer cambios en el primer argumento osease inputValue


    const handleImputChange = (e) =>{ // con la e se llama a evento de la funcion
        setInputValue(e.target.value) //con el setInputValue llamas a la funbcion que  indica que puedes modificar la informacion ene este caso agregar, posteriormente llamas a sus argumentos la e hace referencia al evento y el target.value a lso componentes y sus valores denbtro del evento dell imput
    }

    const handleSubmint = (e) =>{ // con la "e" se llama a evento de la funcion
        e. preventDefault(); // previene que se ejecute la acualizacion del evento que se hace por default
        //setCategorias(categorias => [...categorias,inputValue]);
                    //se llama a categorias como una funcion para indicar que se pasan todos sus valores del argumento

        if(inputValue.trim().length>2){
            //setCategorias(categorias => [...categorias,inputValue]); se movera de posicion ...categorias para que primero coloque la busqueda y luego el default
            setCategorias(categorias => [inputValue,...categorias]);
            setInputValue("");
        }

    }




    //se crea el html
    // se creal el form para utilizar el cuadro dde texto, el form tambien nos sirve como un metodo agrupador en ves de usar el div
    //<div> se sustituye el div por el form ya que se requiere hacer un formulario y puede sustituir al div como metodo agrupador
    return(
        <form onSubmit={handleSubmint}>
        {/*se crea evento onSubmit que evita que realice la actualizacion de la pagina cuando le das enter el handleSubmint maneja el cambio de url*/}
            <input // se crea una caja para texto input
                type="text"
                value={inputValue}
                onChange={handleImputChange}
            />
            {//se creo un evento onchange que funciona cuando se realiza un cambio en el la caja input que es de texto
            //handleImputChange= manejar el cambio de entrada
            //despues de crear el html  para el handleImputChange
            }
        </form>
    );
}


AddCategory.propTypes={
    setCategorias:PropTypes.func.isRequired
}
