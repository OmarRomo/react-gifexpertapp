//se crea Getgrifs para no combinar codigos dentro del getGrids



//gif urlapi.giphy.com/v1/gifs/search en la app Postman se ingresa en la parte del get
//en la misma ap postman se agrega en la parte de quary param la palabra api_key y en value se pone: gif apiKey v2WlBexgYrfbp42CQWH2nSoOoW4Emf94
// posteriormente pones la q en la parte de quary params que indicara busqueda y enb value escoges el gif a buscar (naruto)
// despues en quary params agregas un limitge a la cantidad de gif en value pones la cantidad (20)
 // todo esto arrojara una url la cual utilizaremos en la siguiente constante

    export const getGifs = async (category) => { // se manda como argumento a category para poder utilizarlo en la parte del url
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=11&api_key=v2WlBexgYrfbp42CQWH2nSoOoW4Emf94` // url obtenido de app postman
        const respuesta = await fetch (url);
        const {data}= await respuesta.json(); // se desestructura el data para que no sea el data y el json si no solo nos traiga los elementons de l data
        //console.log(data); se realizo esta impresion para poder ver co,mo llegar hasta el url deseado al aparecer data en consola pudiomos ingresar a image y de ahi url de acuerdo al tamaño que desamos


        const gifs = data.map( img => { // se crea una constante gifs donde se hace la funcion del data.map img sera la funcion que serra utilizada
            return {
                id: img.id, // en el data se utilizara el id y se une con la funcion img por eso se coloca co,mo una ruta img.id
                title: img.title, // para utilizar el title tambien  se hace como una ruta utilizando la funcion img.title
                url: img.images?.downsized_medium.url // se le pone el signo de interrogacion ya quye es una condicional entonces si algo sdale mal y no trae el images debido a que tal vez no tengan esa seccion el condicional trabahjara evitando el error
            }
        })

        // como mivimos toda la funcion a este archivo aqui no existe el setImages(gifs) por lo cual lo comentamos
        return gifs; // regresa una promesa de async que retorna la coleccion de mis imagenes


    };
    // se comenta el llamado de esta funciuon debido a que no necesitamos que traiga toda la infort,macion cada que se ejecute, si  no una sola vez, con el useEffect
    //getGifs(); // este se ejecutara una y  otra vez cada que presiones el boton te traera toda la informacion del url y no es necesario, para traer la informacion  del data solpo una spola vez se usara la funcion useEffect
