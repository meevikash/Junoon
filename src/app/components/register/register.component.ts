import { Component} from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  topics = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Indore', 'Kolkata', 'Nepal', 'Pune', 'Kohima', 'Jaipur'];
  members = ['One 1', 'Two 2', 'Three 3', 'Four 4', 'Five 5', 'Six 6'];
}
