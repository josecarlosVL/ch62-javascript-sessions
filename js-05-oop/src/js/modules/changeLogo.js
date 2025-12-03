
/** Cambia la imagen inicial por la especificada en la ruta
 * 
 * @param {string} imageRoute Nombre archivo de imagen tomando en cuenta su extension
 */
const changeLogo = (imageRoute) => {
    if ( imageRoute !== null ) {
        document.getElementById("logo").src = `/assets/img/${imageRoute}`;
    } else {
        console.warn( `Element with route "${ titleId }" not found.` );
    }
}

//Exportación nombrada
export {changeLogo}