// Initialize app
var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    // ... other parameters
  });

function compara(city){
    
    var url='https://ws.smn.gob.ar/map_items/forecast/1';
    app.request.json(url, function(clima){
     var pos;
     for(var i=0; i<clima.length;i++){        
        if(clima[i].name==city){
            pos=i;
            break;
        }                        
    }
    
   var cyp= clima[pos].name+' provincia de '+clima[pos].province;
   var pm= clima[pos].weather.morning_temp+'°c - '+clima[pos].weather.morning_desc;
   var pt= clima[pos].weather.afternoon_temp+'°c - '+clima[pos].weather.afternoon_desc;     
       
    $$('#ciudad').html(cyp);
    $$('#pm').html(pm);
    $$('#pt').html(pt);                                            
    });
    
} 





var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    
   
    
    $$('#ros').on('click', function(){compara('Rosario')});
    $$('#raf').on('click', function(){compara('Rafaela')});
    $$('#san').on('click', function(){compara('San Lorenzo')});
    $$('#ubi').on('click', function(){
           navigator.geolocation.getCurrentPosition;
                Latitude = position.coords.latitude;
                Longitude = position.coords.longitude;
             
                alert(Latitude, Longitude);
             
        
        
    });

    
    
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})