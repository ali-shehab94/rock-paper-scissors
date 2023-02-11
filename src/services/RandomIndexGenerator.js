
/**
 * 
 * @param {integer} min 
 * @param {integer} max 
 * @returns {integer} 
 */
export const calculateRandomIndex = (min, max) => {
    const RandomIndex = Math.floor(Math.random() * (max - min + 1) + min);
    return RandomIndex;
}