import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Area, AreasList } from './areas';
import { AreasService } from './services/areas.service';

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

  tableTitle = 'Areas List';

  areaList: AreasList[] = [];

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  // used viewChildren to create an instance of component, called it headerChildrenComp
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  //passing AreasService as a private "property"
  constructor(@SkipSelf() private areasService: AreasService) {}

  //lifecycle hook
  ngOnInit(): void {
    //console.log(this.headerComponent);

    //calling areasService
    this.areaList = this.areasService.getAreas();
  }

  //lifecycle hook is called with every change
  ngDoCheck() {
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    // this.headerComponent.headerTitle = 'Europe View';
    /* this.headerChildrenComponent.last.headerTitle = 'Last Title';
    this.headerChildrenComponent.get(0)!.headerTitle = 'First Title'; */
  }

  ngAfterViewChecked(): void {
    //this.headerComponent.headerTitle = '';
  }

  //to hide number of countires
  toggle() {
    this.hideCountries = !this.hideCountries;
    this.tableTitle = 'Regions List';
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
