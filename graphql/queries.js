import { gql } from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
  query DemoShopifyProductByDomain {
    productsByDomainV2(
      input: { domain: "hiutdenim.co.uk" }
      pagination: { limit: 3, offset: 2 }
    ) {
      id
      title
      marketplace
      description
      isAvailable
      price {
        ... on Price {
          value
          currency
          displayValue
        }
      }
    }
  }
`;
