import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options = ['Home', 'Contact', 'Gallery', 'Register', 'Sponsors'];
  title = 'Junoon';
  constructor() { }

  ngOnInit(): void {
  }

}
