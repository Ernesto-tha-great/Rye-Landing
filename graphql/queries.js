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
      description
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

export const REQUEST_PRODUCT_MUTATION = gql`
  mutation getProductByUrl {
    requestProductByURL(
      input: {
        url: "https://www.amazon.com/l-f-Hydrated-Skincare-Hydration-Cleanser/dp/B08T7DSZYD/ref=sr_1_5?crid=1XIOFON3YAFCU&dib=eyJ2IjoiMSJ9.y2kMV0IJHuDIDFSjed2Lxnm6jz_oOxBkqkItLRKQZnuMjr1k3QyRBK6LyiVBGTUx3DydT11SYkrBZdiySinyCUINND0LXsSMSXj31IHMD4vdpgo6STOjuVXgrYTbB56q62vC-g3X0LohxbHi8uwGz_TXcyYkRBU0vxqkMdxnfhBxEvIbGfhxlqPatWW2VekZGWW7YASy2qDSIX2pvde9MIJD15P-e-NDXsKW2-lO49A.0YHg2XcU3DJNQAUoXREdYYE84q5FFkkGPjLarbDyC7o&dib_tag=se&keywords=skincare&qid=1705410303&sprefix=skincar%2Caps%2C362&sr=8-5"
        marketplace: AMAZON
      }
    ) {
      productID
    }
  }
`;

export const GET_PRODUCT_QUERY = gql`
  query fetchProducts($inputs: ProductByIDInput!) {
    productByID(input: $inputs) {
      id
      vendor
      description
      price {
        displayValue
        currency
      }
    }
  }
`;
