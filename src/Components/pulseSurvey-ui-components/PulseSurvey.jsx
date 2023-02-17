/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import Swal from 'sweetalert2';
import {render} from 'react-dom';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { createPulseSurveyResults } from '../../graphql/mutations'
import { ThankYou } from "../../Components/ThankYouComponent/ThankYou"
import {
  Button,
  Flex,
  Grid,
  Heading,
  TextAreaField,
  TextField,
  Alert,
} from "@aws-amplify/ui-react";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function PulseSurvey(props) {
  const { onSubmit, onCancel, onValidate, onChange, overrides, ...rest } =
    props;

  let searchParams = new URLSearchParams(window.location.search);
  const sa_email = searchParams.get('sa_email');;
  const customer_email = searchParams.get('customer_email');

  let isDisabled_value = false;
  let initialValues = {
    Field2: "",
    Field1: "",
    Field0: "",
    Field3: "",
    Field4: 0,
    Field5: sa_email,
  };
  if (customer_email != null){
    isDisabled_value=true;
    {initialValues = {
      Field2: "",
      Field1: "",
      Field0: "",
      Field3: {customer_email},
      Field4: 0,
      Field5: sa_email,
    };}
  }

  const [Field2, setField2] = React.useState(initialValues.Field2);
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [Field3, setField3] = React.useState(initialValues.Field3);
  const [Field4, setField4] = React.useState(initialValues.Field4);
  const [Field5, setField5] = React.useState(initialValues.Field5);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setField2(initialValues.Field2);
    setField1(initialValues.Field1);
    setField0(initialValues.Field0);
    setField3(initialValues.Field3);
    setField3(initialValues.Field4);
    setField3(initialValues.Field5);
    setErrors({});
  };
  const [value, setValue] = React.useState(0);
  const validations = {
    Field2: [],
    Field1: [],
    Field0: [],
    Field3: [{ type: "Required" }],
    Field4: [{ type: "Required" }],
    Field5: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };

  
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Field2,
          Field1,
          Field0,
          Field3,
          Field4,
          Field5,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        const data = {

          customer_mail: modelFields["Field3"],
          rating: modelFields["Field4"],
          start_do: modelFields["Field2"],
          cont_do: modelFields["Field0"],
          stop_do: modelFields["Field1"],
          sa_mail: modelFields["Field5"],
        }
        await API.graphql(graphqlOperation(createPulseSurveyResults, {input: data} ));
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Thank you! \n Your feedback has been submitted!',
          showConfirmButton: false,
          timer: 900000
        });
        //window.location.reload(false);
      }}
      {...getOverrideProps(overrides, "PulseSurvey")}
      {...rest}
    >
      <Heading
        children="Ongoing Engagement Feedback"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Customer Email"
        isDisabled = {isDisabled_value}
        defaultValue={customer_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange || e.target.disabled!=false) {           
            const modelFields = {
              Field2,
              Field1,
              Field0,
              Field3: value,
              Field4,
              Field5,
            };
            const result = onChange(modelFields);
            value = result?.Field3 ?? value;
          }
          if (errors.Field3?.hasError) {
            runValidationTasks("Field3", value);
          }
          setField3(value);
        }}
        onBlur={() => runValidationTasks("Field3", Field3)}
        errorMessage={errors.Field3?.errorMessage}
        hasError={errors.Field3?.hasError}
        {...getOverrideProps(overrides, "Field3")}
      ></TextField>
      <TextField
        label="SA Email"
        disabled
        defaultValue={sa_email}
        value={sa_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange || e.target.disabled) {
            const modelFields = {
              Field2,
              Field1,
              Field0,
              Field3,
              Field4,
              Field5: value,
            };
            const result = onChange(modelFields);
            value = result?.Field5 ?? value;
          }
          if (errors.Field5?.hasError) {
            runValidationTasks("Field5", value);
          }
          setField5(value);
        }}
        onBlur={() => runValidationTasks("Field5", Field5)}
        errorMessage={errors.Field5?.errorMessage}
        hasError={errors.Field5?.hasError}
        {...getOverrideProps(overrides, "Field5")}
      ></TextField>
      <TextAreaField
        label="What can we do to improve the on-going engagement?"
        
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field2: value,
              Field1,
              Field0,
              Field3,
              Field4,
              Field5,
            };
            const result = onChange(modelFields);
            value = result?.Field2 ?? value;
          }
          if (errors.Field2?.hasError) {
            runValidationTasks("Field2", value);
          }
          setField2(value);
        }}
        onBlur={() => runValidationTasks("Field2", Field2)}
        errorMessage={errors.Field2?.errorMessage}
        hasError={errors.Field2?.hasError}
        {...getOverrideProps(overrides, "Field2")}
      ></TextAreaField>
      <TextAreaField
        label="What should we change about the on-going engagement?"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field2,
              Field1: value,
              Field0,
              Field3,
              Field4,
              Field5,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        {...getOverrideProps(overrides, "Field1")}
      ></TextAreaField>
      <TextAreaField
        label="What do you particularly like about the on-going engagement?"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field2,
              Field1,
              Field0: value,
              Field3,
              Field4,
              Field5,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      ></TextAreaField>
      <Typography component="legend">How satisfied are you with the on-going engagement?</Typography>
      <Rating
        name="pulse-rating"
        size="large"
        // defaultValue={2.5} 
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (onChange) {
            const modelFields = {
              Field2,
              Field1,
              Field0,
              Field3,
              Field4: newValue ,
              Field5,
            };
            const result = onChange(modelFields);
            value = result?.Field4 ?? newValue;
          }
          if (errors.Field4?.hasError) {
            runValidationTasks("Field4", newValue);
          }
          setField4(newValue);
        }}
        onBlur={() => runValidationTasks("Field4", Field4)}
        errorMessage={errors.Field4?.errorMessage}
        hasError={errors.Field4?.hasError}
        {...getOverrideProps(overrides, "Field4")}
      />
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
