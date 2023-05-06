import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Parent-Data';
  data = {
    name: 'subhadeep',
    age: 26,
    email: "test@test.com"
  }
}
