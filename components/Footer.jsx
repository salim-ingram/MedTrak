import * as React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { firstName, lastName, handleAuth, authText, overrides, ...rest } =
    props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="20px"
      direction="row"
      width="auto"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="300"
          color="rgba(0,0,0,1)"
          textTransform="none"
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
          children="Developed by Salim Ingram"
          {...getOverrideProps(overrides, "DevBy")}
        ></Text>
    </Flex>
  );
}
