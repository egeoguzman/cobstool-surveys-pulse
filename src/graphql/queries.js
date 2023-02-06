/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPulseSurveyResults = /* GraphQL */ `
  query GetPulseSurveyResults($id: ID!) {
    getPulseSurveyResults(id: $id) {
      id
      customer_mail
      rating
      start_do
      cont_do
      stop_do
      sa_mail
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
        customer_mail
        rating
        start_do
        cont_do
        stop_do
        sa_mail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
