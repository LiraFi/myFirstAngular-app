import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerTitle: string = ' Header ';

  constructor() {}
  ngOnInit(): void {}
}
