import { gql } from '@apollo/client';

import {
  AuthUserFragment,
  FeatureSectionFragment,
  ProductReviewFragment,
  ProductWithReviewFragment,
  RecommendationFragment,
} from './fragments';
import type {
  AuthUserFragmentResponse,
  FeatureSectionFragmentResponse,
  ProductReviewFragmentResponse,
  ProductWithReviewFragmentResponse,
  RecommendationFragmentResponse,
} from './fragments';

export const GetAuthUserQuery = gql`
  ${AuthUserFragment}

  query GetAuthUser {
    me {
      ...AuthUserFragment
    }
  }
`;
export interface GetUserAuthQueryResponse {
  me: AuthUserFragmentResponse | null
}

export const GetProductReviewsQuery = gql`
  ${ProductReviewFragment}

  query GetProductReviews($productId: Int!) {
    product(id: $productId) {
      ...ProductReviewFragment
    }
  }
`;
export interface GetProductReviewsQueryResponse {
  product: ProductReviewFragmentResponse
}

export const GetProductDetailsQuery = gql`
  ${ProductWithReviewFragment}

  query GetProductDetails($productId: Int!) {
    product(id: $productId) {
      ...ProductWithReviewFragment
    }
  }
`;
export interface GetProductDetailsQueryResponse {
  product: ProductWithReviewFragmentResponse
}

export const GetRecommendationsQuery = gql`
  ${RecommendationFragment}

  query GetRecommendations {
    recommendations {
      ...RecommendationFragment
    }
  }
`;
export interface GetRecommendationsQueryResponse {
  recommendations: RecommendationFragmentResponse[]
}

export const GetFeatureSectionsQuery = gql`
  ${FeatureSectionFragment}

  query GetFeatureSections {
    features {
      ...FeatureSectionFragment
    }
  }
`;
export interface GetFeatureSectionsQueryResponse {
  features: FeatureSectionFragmentResponse[]
}
