import * as React from "react";
import { Medication } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Flex, Icon, Text, Link } from "@aws-amplify/ui-react";
export default function MedCard(props) {
  const { medication, handleTake, overrides, ...rest } = props;
  const vectorThreeSixFiveThreeTwoEightSixSevenOnClick =
    useDataStoreDeleteAction({
      id: medication?.id,
      model: Medication,
      schema: schema,
    });
  return (
    <Flex
      gap="0"
      direction="column"
      width="260px"
      height="unset"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-81deg, rgba(240,121,83,1), rgba(142,194,243,1))"
      {...getOverrideProps(overrides, "MedCard")}
      {...rest}
    >
      <Flex
        gap="1px"
        direction="row"
        width="260px"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="20px 15px 0px 20px"
        {...getOverrideProps(overrides, "options")}
      >
        <Link
          padding="0px 0px 0px 0px"
          width="12px"
          height="14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "delete")}
        >
          <Icon
            width="12px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 14 }}
            paths={[
              {
                d: "M9.42857 4.66667L9.42857 12.4444L2.57143 12.4444L2.57143 4.66667L9.42857 4.66667ZM8.14286 0L3.85714 0L3 0.777778L0 0.777778L0 2.33333L12 2.33333L12 0.777778L9 0.777778L8.14286 0ZM11.1429 3.11111L0.857143 3.11111L0.857143 12.4444C0.857143 13.3 1.62857 14 2.57143 14L9.42857 14C10.3714 14 11.1429 13.3 11.1429 12.4444L11.1429 3.11111Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            onClick={() => {
              vectorThreeSixFiveThreeTwoEightSixSevenOnClick();
            }}
            {...getOverrideProps(overrides, "Vector36532867")}
          ></Icon>
        </Link>
        <Link
          padding="0px 0px 0px 0px"
          width="14px"
          height="14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "edit")}
        >
          <Icon
            width="14px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            paths={[
              {
                d: "M0 11.0837L0 14L2.91627 14L11.5173 5.39895L8.60106 2.48268L0 11.0837ZM13.7726 2.04718L11.9528 0.227426C11.8809 0.155333 11.7954 0.0981367 11.7013 0.059112C11.6073 0.0200872 11.5064 3.45356e-16 11.4046 0C11.3027 0 11.2019 0.0200872 11.1078 0.059112C11.0137 0.0981367 10.9282 0.155333 10.8563 0.227426L9.43316 1.65057L12.3494 4.56684L13.7726 3.1437C13.8447 3.07175 13.9019 2.98629 13.9409 2.89222C13.9799 2.79814 14 2.69729 14 2.59544C14 2.49359 13.9799 2.39274 13.9409 2.29866C13.9019 2.20458 13.8447 2.11912 13.7726 2.04718L13.7726 2.04718Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector36532869")}
          ></Icon>
        </Link>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="20px 20px 0px 0px"
        padding="65px 0px 35px 0px"
        {...getOverrideProps(overrides, "Quantity")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          textTransform="capitalize"
          lineHeight="52.80000305175781px"
          textAlign="center"
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
          {...getOverrideProps(overrides, "120")}
        >
          {medication?.medQuantity}
        </Text>
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Days Remaining")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="22.399999618530273px"
            textAlign="center"
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
            {...getOverrideProps(overrides, "30")}
          >
            {medication?.daysLeft}
          </Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="22.399999618530273px"
            textAlign="center"
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
            {...getOverrideProps(overrides, "days")}
          >
            days
          </Text>
        </Flex>
      </Flex>
      <Flex
        gap="25px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="20px 0px 25px 10px"
        {...getOverrideProps(overrides, "Info")}
      >
        <Flex
          gap="5px"
          direction="column"
          width="240px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Med Info")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            textTransform="capitalize"
            lineHeight="28px"
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
            {...getOverrideProps(overrides, "Med Name")}
          >
            {medication?.medName}
          </Text>
          <Flex
            gap="12px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Strength and Icon")}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Strength")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="22.399999618530273px"
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
                {...getOverrideProps(overrides, "Med Strength")}
              >
                {medication?.medStrength}
              </Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="22.399999618530273px"
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
                {...getOverrideProps(overrides, "Strength Unit")}
              >
                mg
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="240px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Additional Info")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 21px 0px 0px"
            {...getOverrideProps(overrides, "Daily Info")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="13.200000762939453px"
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
              {...getOverrideProps(overrides, "Daily Dose")}
            >
              Daily Dose
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="22.399999618530273px"
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
              {...getOverrideProps(overrides, "4")}
            >
              {medication?.dailyDose}
            </Text>
          </Flex>
          <Link
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-end"
            shrink="0"
            position="relative"
            padding="0px 10px 0px 10px"
            {...getOverrideProps(overrides, "Take Button")}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              border="1px SOLID rgba(0,0,0,0)"
              borderRadius="20px"
              padding="5px 29px 5px 29px"
              backgroundColor="rgba(255,92,0,1)"
              onClick={handleTake}
              {...getOverrideProps(overrides, "Button")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="21px"
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
                {...getOverrideProps(overrides, "label")}
              >
                Take
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
