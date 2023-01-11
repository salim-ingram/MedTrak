import * as React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Flex, Text, Button } from "@aws-amplify/ui-react";
export default function AccountPage(props) {
  const { firstName, lastName, handleAuth, authText, overrides, ...rest } =
    props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="45px"
      direction="column"
      width="max-content"
      height="max-content"
      justifyContent="flex-start"
      alignItems='baseline'
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="transparent"
      {...getOverrideProps(overrides, "AccountNav")}
    >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
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
          children="Your Account"
          {...getOverrideProps(overrides, "YourAccount")}
        ></Text>
        <Flex
            className="listFlex"
            gap="25px"
            direction="column"
            alignItems='flex-start'
            width="auto"
            height="unset"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="transparent"
            {...getOverrideProps(overrides, "AccountNav")}
        >
            <Button
                shrink="0"
                size="normal"
                isDisabled={false}
                variation="link"
                fontWeight='normal'
                padding='0px 8px 0px 8px'
                children="My Information"
                {...getOverrideProps(overrides, "MyInfoButton")}
            ></Button>
            <Button
                shrink="0"
                size="normal"
                isDisabled={false}
                variation="link"
                fontWeight='normal'
                padding='0px 8px 0px 8px'
                children="Change Password"
                {...getOverrideProps(overrides, "ChangePasswordButton")}
            ></Button>
            <Button
                shrink="0"
                size="normal"
                isDisabled={false}
                variation="link"
                fontWeight='normal'
                padding='0px 8px 0px 8px'
                children="Delete Account"
                {...getOverrideProps(overrides, "DeleteAccountButton")}
            ></Button>
        </Flex>
    </Flex>
  );
}
