import {
  AfterContentInit,
  Component,
  ContentChild,
  Host,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AreasService } from '../areas/services/areas.service';
import { CitizentComponent } from '../citizent/citizent.component';

@Component({
  selector: 'mfa-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [AreasService],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(CitizentComponent) citizent!: CitizentComponent;

  //constructor(@Host() private areasServise: AreasService) {} //Host decorator used
  constructor(private areasServise: AreasService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.citizent);
    this.citizent.citizentName = 'Mick';
  }
}
