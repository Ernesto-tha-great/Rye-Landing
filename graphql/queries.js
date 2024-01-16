import { gql } from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
  query DemoShopifyProductByDomain {
    productsByDomainV2(
      input: { domain: "luminskin.com" }
      pagination: { limit: 12, offset: 0 }
    ) {
      id
      title
      marketplace
      isAvailable
      images {
        url
      }
      vendor
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
