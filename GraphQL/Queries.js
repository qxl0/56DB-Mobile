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

export const GetAllItemsQuery = () => gql`
  query {
  items {
    ID,
    Description,
    Price,
    Cost,
    Quantity,
    LastUpdated
  }
}
`;


export const GetAllItemsPaginatedQuery = (page, pageSize) => gql`
  query{
  itemsPaginated(cursor: null, limit: 10) {
    items {ID,Description,Price,Cost,Quantity} ,
    hasMore
  }
}
`;
