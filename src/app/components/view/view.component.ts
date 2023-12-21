import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_COUNTRIES, GET_COUNTRIES_ALL, GET_COUNTRIES_all,  GET_PERSON_BYID, GET_POKEMON } from '../../graphql.queries/graphql.countries.queries';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  countries: any[] = [];
  error: any;
  loading : boolean = true;
  person :any = null;
  constructor(private apollo : Apollo){}

  ngOnInit(): void {
    // this.loadCountsries();
    // this.loadCountriesAll();
    // this.loadPokemon();
    this.loadPerson();


  }

  loadPerson() {
    this.loading = true; // Indica que la carga ha comenzado
  
    this.apollo.watchQuery({
      query: GET_PERSON_BYID
    }).valueChanges.subscribe({
      next: ({ data }: { data: any }) => {
        this.person = data.person;
        console.log(this.person);
        
        // Otras operaciones necesarias con 'this.person'
      },
      error: (error) => {
        console.error('Error al cargar persona:', error);
        // Manejo de errores
      },
      complete: () => {
        this.loading = false; // Indica que la carga ha finalizado
      }
    });
  }
  

  loadPersonMAM(){  
    this.apollo.watchQuery({
      query: GET_PERSON_BYID
    }).valueChanges.subscribe(({data, error} : any) => {
      this.loading = false;
      this.person = data.person;
      console.log(this.person);
    })
  }


  loadCountries(){  
    this.apollo.watchQuery({
      query: GET_COUNTRIES_ALL
    }).valueChanges.subscribe(({data, error} : any) => {
      this.loading = false;
      this.countries = data.countries;
      console.log(this.countries);
    })
  }


  loadCountriesAll(){  
    this.apollo.watchQuery({
      query: GET_COUNTRIES_all
    }).valueChanges.subscribe(({data, error} : any) => {
      this.loading = false;
      this.countries = data.countries;
      console.log(this.countries);
      
    })
  }

  loadPokemon(){  
    this.apollo.watchQuery({
      query: GET_POKEMON
    }).valueChanges.subscribe(({data, error} : any) => {
      this.loading = false;
      this.countries = data.pokemon_v2_pokemon;
      console.log(this.countries);
      
    })
  }
}
