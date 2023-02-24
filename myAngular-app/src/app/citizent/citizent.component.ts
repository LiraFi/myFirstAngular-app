import { Component, OnInit, Self } from '@angular/core';
import { AreasService } from '../areas/services/areas.service';

@Component({
  selector: 'mfa-citizent',
  templateUrl: './citizent.component.html',
  styleUrls: ['./citizent.component.css'],
  //providers: [AreasService],
})
export class CitizentComponent implements OnInit {
  citizentName: string = 'Alex';

  //injected areasService
  constructor(private areasService: AreasService) {}

  ngOnInit(): void {}
}
