/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { firstName, lastName, handleAuth, authText, overrides, ...rest } =
    props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="104px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="MedTrak"
          {...getOverrideProps(overrides, "MedTrak")}
        ></Text>
      </Flex>
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Button
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          variation="link"
          children="Dashboard"
          {...getOverrideProps(overrides, "Button36563453")}
        ></Button>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 8px 0px 8px"
        {...getOverrideProps(overrides, "Frame 32236472914")}
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
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32236562816")}
        >
          <Button
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            variation="link"
            children="Add Medication"
            {...getOverrideProps(overrides, "Button36472923")}
          ></Button>
        </Flex>
        <Divider
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="4px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32129767081")}
        >
          <Button
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            variation="link"
            children={`${authAttributes["given_name"]}${" "}${
              authAttributes["family_name"]
            }`}
            {...getOverrideProps(overrides, "Button36562808")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
