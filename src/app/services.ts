import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { __param } from 'tslib';


// stap 1: Define shap of data

export interface client {
  id: number;
  name: string;
  industry: string;
  status: 'Active' | 'Inactive';

};

@Injectable({
  providedIn: 'root',
})
export class Services {

  api: string = 'http://localhost:8000/client';
  private http = inject(HttpClient);

  private setSearchTextSignal = signal<string | null>(null);
  setSearchTextSignals(searchParam: any) {
    this.setSearchTextSignal.set(searchParam);
  }

  Clients = resource({
    params: () => {
      const q = this.setSearchTextSignal();
      return { q: q }; // explicit return
    },
    loader: async ({ params }) => {
      let url = params.q ? `${this.api}?q=${params.q}` : this.api;
      const data = this.http.get<client[]>(url);
      return await firstValueFrom(data);
    }
  });
}
