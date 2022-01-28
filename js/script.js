/** 
    geolocation.js
    Ver geolocalizaciones en JavaScript
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'

class Geolocalizacion{
    constructor(){
        window.onload = this.iniciar.bind(this)
    }
    iniciar(){        
        this.cogerPosicion()
    }
    cogerPosicion(){
        let geolocation = navigator.geolocation
        if (geolocation) {
            geolocation.getCurrentPosition(this.success)
        }else{
            throw 'Error GPS'
        }
          
    }
    success(pos) {
        let crd = pos.coords;
      
        console.log('Posición: ' );
        console.log(`Latitud: ${crd.latitude}`); 
        console.log(`Longitud: ${crd.longitude}`); 
        console.log(`Más o menos ${crd.accuracy} metros`);

        
        let latitude = document.getElementById('latitude')
        let longitude = document.getElementById('longitude')
        let accuracy = document.getElementById('accuracy')

        latitude.appendChild(document.createTextNode('Latitud: ' + crd.latitude))
        longitude.appendChild(document.createTextNode('Longitud: ' + crd.longitude))
        accuracy.appendChild(document.createTextNode('Precisión: ' + crd.accuracy))

    
        let dataIp = null

        $.getJSON('https://api.ipify.org?format=json', function(data) {
            dataIp = `Ip: ${data.ip} --------- Latitud: ${crd.latitude} --------- Longitud: ${crd.longitude} --------- Precisión: ${crd.accuracy}`
            $('div').text('IP: '+ data.ip)
            console.log(dataIp);


            let dataStr = JSON.stringify(dataIp);
            let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
            let exportFileDefaultName = 'coordenadas.json';
        
            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        });           
    }

}

new Geolocalizacion()




