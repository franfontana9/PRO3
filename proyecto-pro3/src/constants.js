export const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/'

export const API_ENDPOINTS = {
    albums: API_URL + 'chart/albums',
    cancion: API_URL + 'chart/tracks',
    busqueda: API_URL + 'search?q='
}
export const CATEGORIAS = {
    cancion: 'track',
    album: 'album'
}