import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Student } from './student/student';
import { TaskBord } from './Components/task-bord/task-bord';
import { ClientDashbord } from './ECRAMDASHBORD/client-dashbord/client-dashbord';
import { AddData } from './ECRAMDASHBORD/add-data/add-data';

export const routes: Routes = [
    {
    path: 'client',
    component: ClientDashbord
  },
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {
    path:'taskbord',
    component: TaskBord,
    pathMatch:'full'
  },
  {
    path:'client',
    component: ClientDashbord,
  },
  {
    path:'addclients',
    component:AddData
  }
];
