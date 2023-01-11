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
export default function MedicationUpdateForm(props) {
  const {
    id: idProp,
    medication,
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
    medQuantity: "",
    medStrength: "",
    dailyDose: "",
  };
  const [medQuantity, setMedQuantity] = React.useState(
    initialValues.medQuantity
  );
  const [medStrength, setMedStrength] = React.useState(
    initialValues.medStrength
  );
  const [dailyDose, setDailyDose] = React.useState(initialValues.dailyDose);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = medicationRecord
      ? { ...initialValues, ...medicationRecord }
      : initialValues;
    setMedQuantity(cleanValues.medQuantity);
    setMedStrength(cleanValues.medStrength);
    setDailyDose(cleanValues.dailyDose);
    setErrors({});
  };
  const [medicationRecord, setMedicationRecord] = React.useState(medication);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Medication, idProp)
        : medication;
      setMedicationRecord(record);
    };
    queryData();
  }, [idProp, medication]);
  React.useEffect(resetStateValues, [medicationRecord]);
  const validations = {
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
          await DataStore.save(
            Medication.copyOf(medicationRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MedicationUpdateForm")}
      {...rest}
    >
      <TextField
        label="New quantity"
        isRequired={false}
        isReadOnly={false}
        placeholder="eg. 30"
        type="number"
        step="any"
        value={medQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
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
        label="New strength (mg)"
        isRequired={false}
        isReadOnly={false}
        placeholder="eg. 30"
        type="number"
        step="any"
        value={medStrength}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
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
        label="New daily dose"
        isRequired={false}
        isReadOnly={false}
        placeholder="eg. 1"
        type="number"
        step="any"
        value={dailyDose}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
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
          isDisabled={!(idProp || medication)}
          {...getOverrideProps(overrides, "ResetButton")}
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
            children="Update"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || medication) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
