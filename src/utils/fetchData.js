export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f3827e2852msh4875279ea61b21fp184088jsnfa5c512a3452',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}