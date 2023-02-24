import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'mfa-root',
  templateUrl: './app.component.html',
  /*template: `<h1>Hello there from inline template!</h1>
    <p>Angular is Awesome!</p>
<h3>Let's have fun!</h3>`,*/

  styleUrls: ['./app.component.css'],
  //styles: [`h1 {color: blue;}h3 {color: yellow;}`],
})
export class AppComponent implements OnInit {
  title = 'myFirstAngular-app';
  @ViewChild('name', { static: true }) name!: ElementRef;

  //constructor(@Optional() private loggerService: LoggerService) {} //@Optional()decorator used in case servise is isolated, to skip an error
  constructor(
    private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage
  ) {}

  ngOnInit() {
    //this.loggerService?.log('AppComponent.ngOnInit()');
    this.loggerService.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Regions of Europe';

    // adding value for localStorage
    this.localStorage.setItem('name', 'South-West');
  }

  /*  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(AreasComponent);
    componentRef.instance.numberOfCountries = 44;
  }
 */
  //role = 'User';
}
