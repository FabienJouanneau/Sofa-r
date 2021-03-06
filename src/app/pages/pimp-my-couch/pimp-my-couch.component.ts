import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/shared/destinations.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pimp-my-couch',
  templateUrl: './pimp-my-couch.component.html',
  styleUrls: ['./pimp-my-couch.component.scss']
})
export class PimpMyCouchComponent implements OnInit {

  constructor(private http: HttpClient, private destinationService: DestinationsService) { }

  // OPTIONS DU CANAPE
  body1Url = 'assets/images/tissuCouch.png';
  body2Url = 'assets/images/cuirCouch.png';
  engine1Url = 'assets/images/fastEngine.png';
  engine2Url = 'assets/images/powerfullEngine.png';
  wheel1Url = 'assets/images/fastWheel.png';
  wheel2Url = 'assets/images/fireWheel.png';
  fin1Url = 'assets/images/aileron.png';
  fin2Url = 'assets/images/aileron3.png';

  optionsBody = [
    'assets/images/tissuCouch.png',
    'assets/images/cuirCouch.png'
  ];
  optionsEngine = [
    'assets/images/fastEngine.png',
    'assets/images/powerfullEngine.png',
  ];
  optionsWheel = [
    'assets/images/fastWheel.png',
    'assets/images/fireWheel.png',
  ];
  optionFin = [
    'assets/images/aileron3.png'
  ];

  // CONSTRUCTION DU CANAPE
  body = '';
  engine = '';
  wheel = '';
  fin = '';

  // DISPLAY DES IMAGES
  titleIsDisplay = true;
  bodyIsDisplay = false;
  engineIsDisplay = false;
  wheelIsDisplay = false;
  finIsDisplay = false;

  name = '';

  // display button
  isWinter = false;
  isSummer = false;
  isUrban = false;

  ngOnInit(): void {

  }

  // METHODS
  getBodyUrl(url: string) {
    this.body = url;
    this.bodyIsDisplay = true;
  }
  getEngineUrl(url: string) {
    this.engine = url;
    this.engineIsDisplay = true;
  }
  getWheelUrl(url: string) {
    this.wheel = url;
    this.wheelIsDisplay = true;
  }
  getFinUrl(url: string) {
    this.fin = url;
    this.finIsDisplay = true;
  }

  sendName() {
    if (this.body === 'assets/images/tissuCouch.png') {
      this.name = 'laponie';
    } else if (this.fin === 'assets/images/aileron3.png') {
      this.name = 'berlin';
    } else {
      this.name = 'srilanka';
    }
    console.log(this.name);
    return this.destinationService.getName(this.name);
  }

}
