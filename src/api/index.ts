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

export function GET_CARS_BY_SEARCH (value: string) {
  return {
    url: `${API_URL}/carros/pesquisa/${value}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}