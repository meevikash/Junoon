import { Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
isAvailable = true;
products = [
  {name: 'Delhi', district : 'alpha'},
  {name: 'Mumbai', district : 'beta' },
  {name: 'Kolkata', district : 'gamma'},
 ]
}
