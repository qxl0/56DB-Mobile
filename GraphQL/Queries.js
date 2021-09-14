import {gql } from 'apollo-boost';

export const GetItemsQuery = (desc) => gql`
  query {
        queryitems(desc:"${desc}"){ 
          ID,
          Description,
          Price
        }
      } 
`;