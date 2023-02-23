import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Area, AreasList } from './areas';

@Component({
  selector: 'mfa-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
})
export class AreasComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  areaName = 'Europe';
  numberOfCountries = 44;
  hideCountries = false;

  selectedArea!: AreasList;

  area: Area = {
    totalyContries: 44,
    northernCountryNumber: 10,
    westernCountryNumber: 7,
    easternCountryNumber: 10,
    centralCountryNumber: 15,
  };

  title = 'Areas List';

  areaList: AreasList[] = [];

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  // used viewChildren to create an instance of component, called it headerChildrenComp
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {}

  //lifecycle hook
  ngOnInit(): void {
    //console.log(this.headerComponent);
    this.areaList = [
      {
        areaName: 'West',
        areaNumber: 1,
        capitals:
          'Austria Vienna, Belgium	Brussels, France	Paris, Germany	Berlin, Liechtenstein	Vaduz, Luxembourg	Luxembourg, Monaco	Monaco, Netherlands	Amsterdam, Switzerland	Bern',

        population: 197790505,
        currency: 0,
        img: 'https://unsplash.com/photos/POqJeWrVfnU',
        timeZone: new Date('20-Feb-2023'),
      },
      {
        areaName: 'East',
        areaNumber: 2,
        capitals:
          'Belarus	Minsk, Bulgaria	Sofia, Cyprus	Nicosia, Czech Republic	Prague, Hungary	Budapest, Kosovo	Pristina, Moldova	Chișinău, Poland	Warsaw, Romania	Bucharest, Slovakia	Bratislava, Ukraine	Kiev',

        population: 291871963,
        currency: 0,
        img: 'https://www.tripsavvy.com/maps-of-eastern-europe-4123431',
        timeZone: new Date('20-Feb-2023'),
      },
      {
        areaName: 'North',
        areaNumber: 3,
        capitals:
          'Aland Islands	Mariehamn, Denmark	Copenhagen, Estonia	Tallinn, Faroe Islands	Tórshavn, Finland	Helsinki, Guernsey	St. Peter Port, Iceland	Reykjavik, Ireland	Dublin, Isle Of Man	Douglas, Jersey	St. Helier, Latvia	Riga, Lithuania	Vilnius, Norway	Oslo, Svalbard And Jan Mayen	Longyearbyen, Sweden	Stockholm, United Kingdom	London',
        population: 291871963,
        currency: 0,
        img: 'https://stock.adobe.com/fi/search?k=northern+europe+map',
        timeZone: new Date('20-Feb-2023'),
      },
      {
        areaName: 'Center',
        areaNumber: 4,
        capitals:
          'https://www.learnit3d.fi/list-of-european-countries-and-capitals/',
        population: 101430997,
        currency: 0,
        img: 'https://uk.m.wikivoyage.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Central_Europe_Regions.png',
        timeZone: new Date('20-Feb-2023'),
      },
    ];
  }

  //lifecycle hook is called with every change
  ngDoCheck() {
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'Europe View';

    this.headerChildrenComponent.last.title = 'Last Title';
    //this.headerChildrenComponent.get(0)!.title = 'First Title';
  }

  ngAfterViewChecked(): void {
    // this.headerComponent.title="";
  }

  //to hide number of countires
  toggle() {
    this.hideCountries = !this.hideCountries;
    this.title = 'Regions List';
  }

  selectArea(area: AreasList) {
    this.selectedArea = area;
  }

  addArea() {
    const newArea: AreasList = {
      areaName: 'South',
      areaNumber: 5,
      capitals:
        'Albania	Tirana, Andorra	Andorra La Vella, Bosnia And Herzegovina	Sarajevo, Croatia	Zagreb, Gibraltar	Gibraltar, Greece	Athens, Italy	Rome, Malta	Valletta, Montenegro	Podgorica, North Macedonia	Skopje, Portugal	Lisbon, San Marino	City Of San Marino, Serbia	Belgrade, Slovenia	Ljubljana,  Spain	Madrid, Vatican City	Vatican City',
      population: 151602031,
      currency: 0,
      img: 'https://www.freeworldmaps.net/europe/southern/',
      timeZone: new Date('21-Feb-2023'),
    };
    //this.areaList.push(newArea) it make our data mutable
    this.areaList = [...this.areaList, newArea]; //immutable data. returns new instance
  }
}
