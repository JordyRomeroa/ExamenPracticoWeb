import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon-service';
import {  TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail-page',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './pokemon-detail-page.html'
})
export class PokemonDetailPage {
  constructor(
    public pokemon: PokemonService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.pokemon.loadDetail(id);
  }
}
