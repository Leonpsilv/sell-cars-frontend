const API_URL = "http://localhost:3000"


export function GET_CARS () {
    return {
        url: `${API_URL}/carros`,
        options: {
          method: 'GET',
          cache: 'no-store'
        },
    }
}