/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPulseSurveyResults = /* GraphQL */ `
  query GetPulseSurveyResults($id: ID!) {
    getPulseSurveyResults(id: $id) {
      id
      email
      rating
      start_do
      cont_do
      stop_do
      createdAt
      updatedAt
    }
  }
`;
export const listPulseSurveyResults = /* GraphQL */ `
  query ListPulseSurveyResults(
    $filter: ModelPulseSurveyResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPulseSurveyResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        rating
        start_do
        cont_do
        stop_do
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
