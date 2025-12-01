import { Injectable, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2/pokemon';

 
  offset = signal(0);
  limit = signal(20);


  list = signal<any | null>(null);
  loadingList = signal(false);

  
  detail = signal<any | null>(null);
  loadingDetail = signal(false);

  constructor(private http: HttpClient) {
    
    effect(() => {
      this.loadList();
    });
  }

  loadList() {
    this.loadingList.set(true);

    this.http
      .get<any>(`${this.api}?offset=${this.offset()}&limit=${this.limit()}`)
      .subscribe({
        next: (data) => {
          this.list.set(data);
          this.loadingList.set(false);
        },
        error: () => {
          this.loadingList.set(false);
        }
      });
  }

  loadDetail(id: string) {
    this.loadingDetail.set(true);

    this.http.get<any>(`${this.api}/${id}`).subscribe({
      next: (data) => {
        this.detail.set(data);
        this.loadingDetail.set(false);
      },
      error: () => {
        this.loadingDetail.set(false);
      }
    });
  }
}
