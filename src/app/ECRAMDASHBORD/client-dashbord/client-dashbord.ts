import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { Services } from '../../services';
import { form, FormField } from '@angular/forms/signals';
interface LoginData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-client-dashbord',
  imports: [CommonModule],
  templateUrl: './client-dashbord.html',
  styleUrl: './client-dashbord.css',
})
export class ClientDashbord {

  // loginModel = signal<LoginData>({
  //   email: '',
  //   password: '',
  // });
  // loginForm = form(this.loginModel);


  private clientsServices = inject(Services)

  clientResource = this.clientsServices.Clients;

constructor() {
  effect(() => {
    console.log("Search:", this.clientsServices['setSearchTextSignal']());
    console.log("Data:", this.clientResource.value());
  });
}
  onSearch(searchParam: string) {
    setTimeout(() => {
      this.clientsServices.setSearchTextSignals(searchParam);
    }, 300);
  }

}
