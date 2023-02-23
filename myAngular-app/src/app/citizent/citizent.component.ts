import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfa-citizent',
  templateUrl: './citizent.component.html',
  styleUrls: ['./citizent.component.css'],
})
export class CitizentComponent implements OnInit {
  citizentName: string = '';

  constructor() {}

  ngOnInit(): void {}
}
