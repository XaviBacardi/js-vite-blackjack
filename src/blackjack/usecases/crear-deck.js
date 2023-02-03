import _ from 'underscore'

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposCarta Ej: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ej: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    // if(!tiposCarta && !tiposEspeciales) throw new Error('Tipos de carta es obligatorio')
    // > 0
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
  
    return deck;
}