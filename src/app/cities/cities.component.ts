import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})

export class CitiesComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {

  }

  getWeather() {
    console.log('Getting the Forcast...');
  }

  test1() {
    // console.log('testing');
    const inputCity1 = (<HTMLInputElement>document.getElementById('city1')).value;
    console.log(inputCity1);
    // const inputCity2 = (<HTMLInputElement>document.getElementById('city2')).value;
    // console.log(inputCity2);
    fetch(`http://api.apixu.com/v1/current.json?key=bcac1e20366e45f8a51204018192105&q=${inputCity1}`)
    // fetch('http://api.apixu.com/v1/current.json?key=bcac1e20366e45f8a51204018192105&q=London')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.location.name);
      let output1 = '';
      // data.forEach(function(data) {
        output1 += `
        <div id="city1-card">
        <mat-card class="example-card">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>${data.location.name}</mat-card-title> <br>
          <mat-card-subtitle>${data.location.region}</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="${data.current.condition.icon}" alt="City 1 Weather">
        <mat-card-content>
          <p>Temperature: ${data.current.temp_f}</p>
          <p>Precipitation (inches): ${data.current.precip_in}</p>
          <p>Weather Condition: ${data.current.condition.text}</p>
          <hr>
          <p>Humidity: ${data.current.humidity}</p>
          <p>Wind MPH: ${data.current.wind_mph}</p>
        </mat-card-content>
        <mat-card-actions>
          <h1 id="output3"></h1>
        </mat-card-actions>
      </mat-card></div>
        `;
      // });
      document.getElementById('output1').innerHTML = output1;
      return output1;
    })
    .catch(err => console.log(err));
  }

  test2() {
    // console.log('testing');
    // const inputCity1 = (<HTMLInputElement>document.getElementById('city1')).value;
    // console.log(inputCity1);
    const inputCity2 = (<HTMLInputElement>document.getElementById('city2')).value;
    console.log(inputCity2);
    fetch(`http://api.apixu.com/v1/current.json?key=bcac1e20366e45f8a51204018192105&q=${inputCity2}`)
    // fetch('http://api.apixu.com/v1/current.json?key=bcac1e20366e45f8a51204018192105&q=London')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.location.name);
      let output2 = '';
      // data.forEach(function(data) {
        output2 += `
        <div id="city2-card">
        <mat-card class="example-card city2">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>${data.location.name}</mat-card-title> <br>
          <mat-card-subtitle>${data.location.region}</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="${data.current.condition.icon}" alt="City 1 Weather">
        <mat-card-content>
          <p>Temperature: ${data.current.temp_f}</p>
          <p>Precipitation (inches): ${data.current.precip_in}</p>
          <p>Weather Condition: ${data.current.condition.text}</p>
          <hr>
          <p>Humidity: ${data.current.humidity}</p>
          <p>Wind MPH: ${data.current.wind_mph}</p>
        </mat-card-content>
        <mat-card-actions>
          <h1 id="output3"></h1>
        </mat-card-actions>
      </mat-card></div>
        `;
      // });
      document.getElementById('output2').innerHTML = output2;
      return output2;
    })
    .catch(err => console.log(err));
  }

  // Compare the two selected cities, and use logic to choose a better city with the best weather
  compare() {
    console.log('lets compare the two cities');
    const city1Temp = document.getElementById('city1-card');
    const city2Temp = document.getElementById('city2-card');
    console.log(city1Temp);
    console.log(city2Temp);

    console.log(output1);
    console.log(output2);

    if (output1.current.temp_f < 50) {
      console.log('its cold')
    } else if (output1.current.temp_f > 80 ){
        console.log('It is hot');
    } else {
      console.log('it is nice out');
    }
  }
}
