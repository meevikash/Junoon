import { Component, OnInit } from '@angular/core';
import { manager } from './contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: manager = {phone: 1234567890, name:'alpha', email:'name'};

  constructor() { }

  ngOnInit(): void {
  }

}
