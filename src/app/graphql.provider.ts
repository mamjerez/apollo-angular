import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

// const uri = 'https://48p1r2roz4.sse.codesandbox.io'; 
// const uri = 'https://countries.trevorblades.com/graphql'; 
// const uri = 'https://beta.pokeapi.co/graphql/v1beta'; 
// const uri = 'https://graphqlpokemon.favware.tech/v8'; 
const uri = 'https://swapi-graphql.eskerda.vercel.app/'; 
// const uri = 'https://cswdadlxiubwdzvqzywc.supabase.co'; 


const supabaseUrl = 'https://cswdadlxiubwdzvqzywc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzd2RhZGx4aXVid2R6dnF6eXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2MTkxODAsImV4cCI6MjAxODE5NTE4MH0.m2uvFmJvUoNc2qLndRZT0WhpMARVk7D4L1QveHsoapQ';




export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
 