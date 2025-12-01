import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './pokemon-detail-page.html',
})
export class PokemonDetailPage {
  id = '';
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.pokemon = this.pokemonService.detail(this.id);
  }

  back() {
    this.router.navigate(['/home']);
  }
}
