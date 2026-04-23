import { Component } from '@angular/core';
import { Services } from '../services';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [RouterLink],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  constructor(private services:Services) {}
  studentData:any[] = []; 



}
