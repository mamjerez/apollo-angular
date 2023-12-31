import { gql } from "apollo-angular";

// Definir un fragmento para los campos comunes
const COUNTRY_DETAILS = gql`
    fragment CountryDetails on Country {
        name
        code
        emoji
    }
`;

// Usar el fragmento en la consulta GET_COUNTRIES
const GET_COUNTRIES = gql`
    query {
        countries {
            ...CountryDetails
        }
    }
    ${COUNTRY_DETAILS}
`;

const GET_COUNTRIES_ALL = gql`
    query {
        countries {
            name
            code
            emoji
            capital
            continent { name }
            languages { name  }
        }
    }
  
`;

const GET_PERSON_BYID = gql`

    {
        person(personID:1){
          name
          birthYear
          homeworld{
            name
          },
          filmConnection{
            films{
              title
            }
          }
           starshipConnection{
            starships{
              name
            }
          }
          vehicleConnection{
            vehicles{
              name
              model
            }
          }
        }
      }
  `;





// Extender la consulta GET_COUNTRIES para incluir campos adicionales
const GET_COUNTRIES_all = gql`
    query {
        countries {
            ...CountryDetails
            currency
            phone
        }
    }
    ${COUNTRY_DETAILS}
`;

const GET_POKEMON = gql`
{
    pokemon_v2_pokemon {
      height
      id
      name
      order
      pokemon_species_id
    }
  }
  `;


  const GET_EMPLOYEES_ALL = gql`
  {
    employeesCollection {
      edges {
        node {
          id
          name
          firstname
          lastname
        }
      }
    }
    }
  
  
`;


// query employeeRelations{
//     employeesCollection(filter: {id: {eq: 1}}) {
//       edges {
//         node {
//           id
//           name
//           firstname
//           lastname
//         }
//       }
//     }
//     positionsCollection(filter: {id: {eq: 1}}) {
//       edges {
//         node {
//           id
//           position
//         }
//       }
//     }
//     positions_externalCollection(filter: {id: {eq: 1}}) {
//       edges {
//         node {
//           id
//           position
//         }
//       }
//     }
//     recordsCollection(filter: {id: {eq: 1}}) {
//       edges {
//         node {
//           id
//           name
//         }
//       }
//     }
//   }


// query employees {
//     employeesCollection {
//       edges {
//         node {
//           id
//           name
//           firstname
//           lastname
//         }
//       }
//     }
//   }

  

export { GET_COUNTRIES, GET_COUNTRIES_all, GET_POKEMON, GET_COUNTRIES_ALL, GET_PERSON_BYID, GET_EMPLOYEES_ALL };
