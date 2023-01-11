import * as React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Link } from "@aws-amplify/ui-react";

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
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Link
          fontFamily="Inter"
          fontSize="36px"
          color='#FF5C00'
          fontWeight="600"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent='center'
          width='auto'
          height="auto"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          {...getOverrideProps(overrides, "MedTrak")}
        >
          MedTrak
        </Link>
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
        <Link
          shrink="0"
          alignSelf="stretch"
          width='auto'
          size='normal'
          justifyContent="center"
          isDisabled={false}
          variation="link"
          fontWeight='normal'
          padding='0px 8px 0px 8px'
          fontSize='18px'
          {...getOverrideProps(overrides, "Button36563453")}
        >
          Dashboard
        </Link>
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
          <Link
            shrink="0"
            alignSelf="stretch"
            size='normal'
            isDisabled={false}
            variation="link"
            fontWeight='normal'
            padding='0px 8px 0px 8px'
            fontSize='18px'
            {...getOverrideProps(overrides, "Button36472923")}
          >
            Add Medication
          </Link>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width='large'
          height='30px'
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
            size="normal"
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
          <Link
            shrink="0"
            alignSelf="stretch"
            size='normal'
            isDisabled={false}
            variation="link"
            fontWeight='normal'
            padding='0px 9px 0px 8px'
            fontSize='18px'
            {...getOverrideProps(overrides, "Button36562808")}
          >
            {authAttributes["given_name"]}{" "}{
              authAttributes["family_name"]
            }
          </Link>
          <Flex
            gap="20px"
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
              gap="10px"
              direction="column"
              width="auto"
              height='min-content'
              shrink="0"
              position="relative"
              padding="5px 30px 30px 30px"
              z-index='9'
              {...getOverrideProps(overrides, "DropDownContents")}>
              <Link
                shrink="0"
                alignSelf="stretch"
                size="normal"
                isDisabled={false}
                variation="link"
                fontWeight='normal'
                fontSize='18px'
                {...getOverrideProps(overrides, "AccountButton")}
              >
                Account
              </Link>
              <Link
                className="dropdownButton"
                shrink="0"
                alignSelf="stretch"
                size="normal"
                isDisabled={false}
                variation="link"
                fontWeight='normal'
                whiteSpace='nowrap'
                fontSize='18px'
                {...getOverrideProps(overrides, "SignOutButton")}
              >
                Sign Out
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Link
            shrink="0"
            alignSelf="stretch"
            size='normal'
            isDisabled={false}
            variation="link"
            fontWeight='normal'
            fontSize='18px'
            {...getOverrideProps(overrides, "SignInButton")}
        >
          Sign In
        </Link>
      </Flex>
    </Flex>
  );
}
