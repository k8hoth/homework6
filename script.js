$(document).ready(function (){

    $("#search-button").on("click", function(){
        var searchCity = $("#search-value").val();

    
    $("#search-value").val("");
    weatherSearch(searchCity)   
    })
});
        var apiKey = "7ba67ac190f85fdba2e2dc6b9d32e93c";

function weatherSearch (searchCity){
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial",
        dataType: "json", 
        success: function(data){
        console.log(data);

        $("#today").empty();


        var cardBody = $("<div>").addClass("card-body");

        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("wind: " + data.wind.speed + " mph"); 
        var temp = $("<p>").addClass("card-text").text("temp: " + data.main.temp + " degrees");
        var humidity = $("<p>").addClass("card-text").text("humidity: " + data.main.humidity + " percent");

        card.append(cardBody);
        $("#today").append(card); 

        $(cardBody).append(temp);
        $(cardBody).append(wind);
        $(cardBody).append(humidity);
        
        
        
    }})}

    function weatherForecast (searchCity){
        $.ajax({
            type: "GET",
            url: "api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=e4c99cd8ce2ba331905932e4cb6ecb58&units=imperial",
            dataType: "json",
            success: function(data){
                console.log(data);
            }})};
           
           
            // $("#forecast").empty();
    
    
            // var cardBody = $("<div>").addClass("card-body");
    
            // var card = $("<div>").addClass("card");
            // var temp = $("<p>").addClass("card-text").text("temp: " + data.main.temp + " degrees");
           
    
            // card.append(cardBody);
            // $("#forecast").append(card); 
    
            // $(cardBody).append(temp);
            
        
    

