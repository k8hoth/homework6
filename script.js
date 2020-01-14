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
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial",
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

        weatherForecast(searchCity)
        
        
        
    }})}
    
    function weatherForecast (searchCity){
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=e4c99cd8ce2ba331905932e4cb6ecb58&units=imperial",
            dataType: "json",
            success: function(data){
                console.log(data);

            $("#forecast").html("<h4 class=\"mt-3\">5-Day Forcast:</h4>").append("<div class=\"row\">");

                for (var i=0; i , data.list.length; i++){
            
                
            
                // var cardBody = $("<div>").addClass("card-body");
                
                var col = $("<div>").addClass("col-md-2")
                var card = $("<div>").addClass("card bg-primary text-white");
                var body = $("div").addClass("card-body p-2")
                // var temperature = $("<p>").addClass("card-text").text("temp: " + data.main.temp + " degrees");
               
                var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon +".png");
                
                var title = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString()); 
                var p1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp.max);
                var p2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity.max);;
                
                col.append(card.append(body.append(title, img, p1, p2)));
                $("#forecast .row").append(card); 
            
            
                // card.append(cardBody);
            
                // $(cardBody).append(col);
                //jquery-3.4.1.min.js:2 Uncaught DOMException: Failed to execute 'appendChild' on 'Node': The new child element contains the parent.
                
            
            
                };
            }})};
           
           
            $("#forecast").empty();
            
