
//Getting API's (maybe?)
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=7f6a2eca2cf706c616002230c8445435",
    method: "GET"
  }).then(function(response) {
    return (response);
    
  });

  function search(city){
    if(this.#inputSearchTerm) {
       return response.main.feels_like;
       return response.wind.speed;

}


  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/onecall?lat=latInput&lon=lonInput&exclude=&appid=7f6a2eca2cf706c616002230c8445435",
    method: "GET"
  }).then(function(response) {
    return (response);
  });