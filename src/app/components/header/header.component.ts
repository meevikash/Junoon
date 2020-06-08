import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options = ['Home'];
  options1 = ['Contact'];
  options2 = ['Gallery'];
  options3 = ['Register'];
  options4 = ['Sponsors'];
  title = 'Junoon';
  constructor() { }

  ngOnInit(): void {
  }

}
