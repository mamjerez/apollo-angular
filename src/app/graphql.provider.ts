import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

// const uri = 'https://48p1r2roz4.sse.codesandbox.io'; 
// const uri = 'https://countries.trevorblades.com/graphql'; 
// const uri = 'https://beta.pokeapi.co/graphql/v1beta'; 
// const uri = 'https://graphqlpokemon.favware.tech/v8'; 
const uri = 'https://swapi-graphql.eskerda.vercel.app/'; 
// const uri = 'https://supabase.com/dashboard/project/cswdadlxiubwdzvqzywc/api/graphiql'; 





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
 