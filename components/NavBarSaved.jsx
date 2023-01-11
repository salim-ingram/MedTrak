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
      width="auto"
      height="auto"
      justifyContent="flex-start"
      alignItems='baseline'
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="auto"
        height="auto"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent='center'
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
        width="auto"
        height="auto"
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
          width='auto'
          size='normal'
          justifyContent="center"
          isDisabled={false}
          variation="link"
          children="Dashboard"
          fontWeight='normal'
          padding='0px 8px 0px 8px'
          {...getOverrideProps(overrides, "Button36563453")}
        ></Button>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="fit-content"
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
            size='normal'
            isDisabled={false}
            variation="link"
            children="Add Medication"
            fontWeight='normal'
            padding='0px 8px 0px 8px'
            {...getOverrideProps(overrides, "Button36472923")}
          ></Button>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width='large'
          height='large'
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Divider
            height="unset"
            alignItems='center'
            width='2px'
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation='vertical'
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
        </Flex>
        <Flex
          gap="0px"
          direction="column"
          width="auto"
          height="unset"
          justifyContent='space-between'
          alignItems='center'
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32129767081")}
        >
          <Button
            shrink="0"
            alignSelf="stretch"
            size='normal'
            isDisabled={false}
            variation="link"
            children={`${authAttributes["given_name"]}${" "}${
              authAttributes["family_name"]
            }`}
            fontWeight='normal'
            padding='0px 9px 0px 8px'
            {...getOverrideProps(overrides, "Button36562808")}
          ></Button>
          <Flex
            gap="0px"
            direction="column"
            width="auto"
            height="unset"
            justifyContent='center'
            alignItems='center'
            shrink="0"
            position="absolute"
            padding="20% 0px 0px 0px"
            backgroundColor='transparent'
            {...getOverrideProps(overrides, "DropFrame")}
            >
              <Flex
              gap="0px"
              direction="column"
              width="auto"
              height='min-content'
              shrink="0"
              position="relative"
              padding="5px 30px 30px 30px"
              z-index='9'
              {...getOverrideProps(overrides, "DropDownContents")}>
              <Button
                shrink="0"
                alignSelf="stretch"
                size="normal"
                isDisabled={false}
                variation="link"
                children='Account'
                fontWeight='normal'
                {...getOverrideProps(overrides, "AccountButton")}
              ></Button>
              <Button
                className="dropdownButton"
                shrink="0"
                alignSelf="stretch"
                size="normal"
                isDisabled={false}
                variation="link"
                children='SignOut'
                fontWeight='normal'
                {...getOverrideProps(overrides, "SignOutButton")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
        <Button
            shrink="0"
            alignSelf="stretch"
            size='normal'
            isDisabled={false}
            variation="link"
            children='Sign In'
            fontWeight='normal'
            {...getOverrideProps(overrides, "SignInButton")}
          ></Button>
      </Flex>
    </Flex>
  );
}
