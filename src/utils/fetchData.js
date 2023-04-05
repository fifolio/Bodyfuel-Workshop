export const exercisesOptions = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '889151d801mshb004fbf52cf1501p173d06jsne0b65376cca5'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}