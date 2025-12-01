import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ TitleCasePipe, RouterLink],
  templateUrl: './home-page.html'
})
export class HomePage {
  constructor(public pokemon: PokemonService) {}

  next() {
    this.pokemon.offset.update((v) => v + 20);
  }

  prev() {
    if (this.pokemon.offset() >= 20) {
      this.pokemon.offset.update((v) => v - 20);
    }
  }
}
