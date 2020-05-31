import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  title = { phone: 1234567890, name: 'alpha', email: 'name' };

  constructor() {}

  ngOnInit(): void {}
}
