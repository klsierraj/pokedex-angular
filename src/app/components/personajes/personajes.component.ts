import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  pokemons: any[] = []
  public filtroPokemon: any = { name: '' };
  constructor(private _pokemonService: PokemonService) { }


  ngOnInit(): void {
    this._pokemonService.getPokemons().subscribe((response: any)=>{
      response.results.forEach(result => {
        this._pokemonService.getInfoPokemon(result.name).subscribe((uniqResponse: any)=> {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons)
        })
      })
    })
  }

 
}
