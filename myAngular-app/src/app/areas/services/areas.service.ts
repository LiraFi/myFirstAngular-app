import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AreasList } from '../areas';
@Injectable({
  providedIn: 'root',
})
export class AreasService {
  areaList: AreasList[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    console.log('Areas service Initialized!');
  }

  getAreas() {
    return this.areaList;
  }
}
