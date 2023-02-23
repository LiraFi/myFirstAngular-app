import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { AreasComponent } from './areas/areas.component';
import { HeaderComponent } from './header/header.component';

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

  ngOnInit() {
    this.name.nativeElement.innerText = 'Regions of Europe';
  }

  /*  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(AreasComponent);
    componentRef.instance.numberOfCountries = 44;
  }
 */
  //role = 'User';
}
