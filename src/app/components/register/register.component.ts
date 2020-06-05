import { Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
places = [
  {name: 'Delhi', location : 'alpha'},
  {name: 'Mumbai', location : 'beta' },
  {name: 'Kolkata', location : 'gamma'},
 ]
}
