import { crearCartaHTML, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computador anecesita para ganar
 * @param {HTMLElement} puntosHTML elementos HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elementos HTML para mostrar las cartas 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, deck = [], puntosHTML, divCartasComputadora ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}