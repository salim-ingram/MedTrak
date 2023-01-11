/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Medication } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MedicationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    medName: "",
    medQuantity: "",
    medStrength: "",
    dailyDose: "",
  };
  const [medName, setMedName] = React.useState(initialValues.medName);
  const [medQuantity, setMedQuantity] = React.useState(
    initialValues.medQuantity
  );
  const [medStrength, setMedStrength] = React.useState(
    initialValues.medStrength
  );
  const [dailyDose, setDailyDose] = React.useState(initialValues.dailyDose);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMedName(initialValues.medName);
    setMedQuantity(initialValues.medQuantity);
    setMedStrength(initialValues.medStrength);
    setDailyDose(initialValues.dailyDose);
    setErrors({});
  };
  const validations = {
    medName: [],
    medQuantity: [],
    medStrength: [],
    dailyDose: [],
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
        let modelFields = {
          medName,
          medQuantity,
          medStrength,
          dailyDose,
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
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Medication(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MedicationCreateForm")}
      {...rest}
    >
      <TextField
        label="Medication name"
        isRequired={false}
        isReadOnly={false}
        placeholder="eg. Lexapro"
        value={medName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              medName: value,
              medQuantity,
              medStrength,
              dailyDose,
            };
            const result = onChange(modelFields);
            value = result?.medName ?? value;
          }
          if (errors.medName?.hasError) {
            runValidationTasks("medName", value);
          }
          setMedName(value);
        }}
        onBlur={() => runValidationTasks("medName", medName)}
        errorMessage={errors.medName?.errorMessage}
        hasError={errors.medName?.hasError}
        {...getOverrideProps(overrides, "medName")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        placeholder="eg. 120"
        type="number"
        step="any"
        value={medQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              medName,
              medQuantity: value,
              medStrength,
              dailyDose,
            };
            const result = onChange(modelFields);
            value = result?.medQuantity ?? value;
          }
          if (errors.medQuantity?.hasError) {
            runValidationTasks("medQuantity", value);
          }
          setMedQuantity(value);
        }}
        onBlur={() => runValidationTasks("medQuantity", medQuantity)}
        errorMessage={errors.medQuantity?.errorMessage}
        hasError={errors.medQuantity?.hasError}
        {...getOverrideProps(overrides, "medQuantity")}
      ></TextField>
      <TextField
        label="Strength (mg)"
        isRequired={false}
        isReadOnly={false}
        placeholder="eg. 20"
        type="number"
        step="any"
        value={medStrength}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              medName,
              medQuantity,
              medStrength: value,
              dailyDose,
            };
            const result = onChange(modelFields);
            value = result?.medStrength ?? value;
          }
          if (errors.medStrength?.hasError) {
            runValidationTasks("medStrength", value);
          }
          setMedStrength(value);
        }}
        onBlur={() => runValidationTasks("medStrength", medStrength)}
        errorMessage={errors.medStrength?.errorMessage}
        hasError={errors.medStrength?.hasError}
        {...getOverrideProps(overrides, "medStrength")}
      ></TextField>
      <TextField
        label="Daily dose"
        isRequired={false}
        isReadOnly={false}
        placeholder="eg. 2"
        type="number"
        step="any"
        value={dailyDose}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              medName,
              medQuantity,
              medStrength,
              dailyDose: value,
            };
            const result = onChange(modelFields);
            value = result?.dailyDose ?? value;
          }
          if (errors.dailyDose?.hasError) {
            runValidationTasks("dailyDose", value);
          }
          setDailyDose(value);
        }}
        onBlur={() => runValidationTasks("dailyDose", dailyDose)}
        errorMessage={errors.dailyDose?.errorMessage}
        hasError={errors.dailyDose?.hasError}
        {...getOverrideProps(overrides, "dailyDose")}
      ></TextField>
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
            children="Add"
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
