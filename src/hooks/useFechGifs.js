import {useState, useEffect} from "react";
import {getGifs} from "../helpers/getGifs"

export const useFechGifs = (category) => {

        const [state, setState] = useState({ // cuando se utiliza el estado se le crean dos efectos el loding siempre se pone por defecto.
            data:[],
            loading:true,
        });

        useEffect( () => {

                getGifs( category)
                    .then (imgs => {
                        setState({
                            data:imgs,
                            loading: false
                        });
                        //setTimeout( () => { // funcion propia de java script se habia creado esta funcion para que tardara en cargar tres segundos pero mahora se hara otro custom huuk
                        //},3000 );
                    })

        }, [category])

        // setTimeout( () => { // funcion propia de java script se habia creado esta funcion para que tardara en cargar tres segundos pero mahora se hara otro custom huuk
        //         setState({
        //             data:[1,2,3,4,5,6,7,8],
        //             loading: false,
        //         });
        //
        // }, 3000); //lo que esta adentro del setstate se ejecutara pa

        return state;  // regresara el state o estrado en que se encuentra
}
