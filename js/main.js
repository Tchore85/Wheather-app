document.addEventListener("DOMContentLoaded", function() {
  $("#get-weather").on("click", function() {
    $.ajax({
      method: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=4a48e1e1428fd83889074671fbf259d9"
    }).done(function(results) {
      console.log(results);
      $("#results").empty();
      $("#results").append(
        `<img src="http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png"/>
        <p> Visibility:${results.weather[0].description}</p>`
      );
    });
  });
});

{
  /* $("button").on("click", function() {
    $.ajax({
      method: "GET",
      url:
        "https://api.github.com/users/octocat/repos?client_id=a37c6077034750f953fc&client_secret=8ff75658b21aa8c5830b7efeae85f559b4d36a02"
    })
      .done(function(data) {
        //data can be named differently up to us
        $.each(data, function(key, value) {
          //key and value can be named differently, doesnt matter
          console.log(value);
          $("#list").append(`<li>${value.name}</li>`); //here i am accesing the names from data
        });
      })
      .fail(function() {
        $(".user-name").append("Sorry there was an error.");
      });
  });
});

jQuery also has a document ready you can use
NOTE all of these do the same thing, you just need one

$( document ).ready(function() {
    console.log( "ready!" );
});

OR the Shorthand

$(function() {
    console.log( "ready!" );
}); */
}
