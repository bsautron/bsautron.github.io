$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});

var data = {
    labels: [ "Coder", "Réflexion", "Manger", "Boire", "Dormir", "Sport", "Panique", "Jouer", "Musique"],
    datasets: [
    {
        label: "Not tired",
        fillColor: "rgba(4,99,128,0.2)",
        strokeColor: "rgba(4,99,128,1)",
        pointColor: "rgba(4,99,128,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(4,99,128,1)",
        data: [100, 55, 60, 55, 95, 40, 20, 45, 35]
    }
    ]
};
var ctx = document.getElementById("myChart1").getContext("2d");
var myNewChart = new Chart(ctx).Radar(data);


var data = {
    labels: ["Anglais", "Français", "Créoles (Réunionnais)", "Mathématique", "Electronique", "Mécanique"],
    datasets: [
    {
        label: "My Second dataset",
        fillColor: "rgba(4,99,128,0.5)",
        strokeColor: "rgba(4,99,128,0.8)",
        highlightFill: "rgba(4,99,128,0.75)",
        highlightStroke: "rgba(4,99,128,1)",
        data: [50, 90, 85, 95, 65, 45]
    }
    ]
};

var ctx = document.getElementById("myChart2").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data);

