import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { TaskBord } from './Components/task-bord/task-bord';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = "the real time task bord";
  name = "Karan Gupta"
  email = "karan@gamil.com"

  count = 0;
  getCount(action: string) {
    if (action == 'plus') {
      this.count++;
    }
    else {
      this.count > 0 && this.count--;
    }
  }
}
