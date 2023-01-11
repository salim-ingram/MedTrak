import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function AccountDropDown(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="6px 0px 6px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AccountDropDown")}
      {...rest}
    >
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="4px 8px 4px 8px"
        {...getOverrideProps(overrides, "Frame 32236663068")}
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
          {...getOverrideProps(overrides, "Frame 32236663069")}
        >
          <Button
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            variation="link"
            {...getOverrideProps(overrides, "Button36663070")}
          >
            Account
          </Button>
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
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 321")}
        >
          <Button
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            variation="link"
            {...getOverrideProps(overrides, "Button36663073")}
          >
            Sign Out
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
