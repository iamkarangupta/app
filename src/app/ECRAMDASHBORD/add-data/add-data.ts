import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from "@angular/forms/signals";


interface ClientForm {
  name: string,
  industry: string,
  status:string
}

@Component({
  selector: 'app-add-data',
  imports: [FormField,CommonModule],
  templateUrl: './add-data.html',
  styleUrl: './add-data.css',
})
export class AddData {

  ClientModel = signal<ClientForm>({
  name:'',
  industry:'',
  status:'',
  })

 ClientsForms = form(this.ClientModel, (schemaPath) => {
  required(schemaPath.name, { message: 'Name is required' });
  required(schemaPath.industry, { message: 'Industry is required' });
  required(schemaPath.status, { message: 'status is required' });
});
  onsubmit(event: Event) {
    event.preventDefault();
    alert("Form submited successfully!!");
  }
}
