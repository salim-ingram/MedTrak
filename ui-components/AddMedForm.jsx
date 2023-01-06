/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Medication } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddMedForm(props) {
  const { medication, overrides, ...rest } = props;
  const [
    textFieldThreeSixFourSevenTwoEightOneNineValue,
    setTextFieldThreeSixFourSevenTwoEightOneNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFourSevenTwoEightTwoZeroValue,
    setTextFieldThreeSixFourSevenTwoEightTwoZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFourSevenTwoEightTwoOneValue,
    setTextFieldThreeSixFourSevenTwoEightTwoOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixFourSevenTwoEightTwoTwoValue,
    setTextFieldThreeSixFourSevenTwoEightTwoTwoValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      medName: textFieldThreeSixFourSevenTwoEightOneNineValue,
      medQuantity: textFieldThreeSixFourSevenTwoEightTwoZeroValue,
      medStrength: textFieldThreeSixFourSevenTwoEightTwoOneValue,
      dailyDose: textFieldThreeSixFourSevenTwoEightTwoTwoValue,
    },
    model: Medication,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddMedForm")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Medication")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add New Medication"
            {...getOverrideProps(overrides, "Add New Medication")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider36472817")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            label="Medication Name"
            placeholder="eg. Lexapro"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFourSevenTwoEightOneNineValue}
            onChange={(event) => {
              setTextFieldThreeSixFourSevenTwoEightOneNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36472819")}
          ></TextField>
          <TextField
            label="Quantity"
            placeholder="eg. 120"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFourSevenTwoEightTwoZeroValue}
            onChange={(event) => {
              setTextFieldThreeSixFourSevenTwoEightTwoZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36472820")}
          ></TextField>
          <TextField
            label="Medication Strength (mg)"
            placeholder="eg. 20"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFourSevenTwoEightTwoOneValue}
            onChange={(event) => {
              setTextFieldThreeSixFourSevenTwoEightTwoOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36472821")}
          ></TextField>
          <TextField
            label="Daily Dose"
            placeholder="eg. 2"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixFourSevenTwoEightTwoTwoValue}
            onChange={(event) => {
              setTextFieldThreeSixFourSevenTwoEightTwoTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36472822")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider36472823")}
        ></Divider>
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
