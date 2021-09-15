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

export const GetSalesQuery = (startdate, enddate) => gql`
  query {
  sales(startdate: "${startdate}", enddate: "${enddate}"){
    ID,
		startdate,
    enddate,
    SaleAmount
  }
}
`;