/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPulseSurveyResults = /* GraphQL */ `
  mutation CreatePulseSurveyResults(
    $input: CreatePulseSurveyResultsInput!
    $condition: ModelPulseSurveyResultsConditionInput
  ) {
    createPulseSurveyResults(input: $input, condition: $condition) {
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
export const updatePulseSurveyResults = /* GraphQL */ `
  mutation UpdatePulseSurveyResults(
    $input: UpdatePulseSurveyResultsInput!
    $condition: ModelPulseSurveyResultsConditionInput
  ) {
    updatePulseSurveyResults(input: $input, condition: $condition) {
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
export const deletePulseSurveyResults = /* GraphQL */ `
  mutation DeletePulseSurveyResults(
    $input: DeletePulseSurveyResultsInput!
    $condition: ModelPulseSurveyResultsConditionInput
  ) {
    deletePulseSurveyResults(input: $input, condition: $condition) {
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
