import * as React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function MyInfo(props) {
  const { firstName, lastName, handleAuth, authText, overrides, ...rest } =
    props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="25px"
      direction="column"
      width="auto"
      height="unset"
      justifyContent="center"
      alignItems='center'
      position="relative"
      padding="24px 32px 24px 32px"
      {...getOverrideProps(overrides, "MyInfoMain")}
    >   
    <Flex
        gap='25px'
        width='min-content'
        height='min-content'
        display='flex'
        direction='column'
        alignItems='flex-start'
    >
        <Flex
            gap="20px"
            direction="row"
            width="auto"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
            padding="0px"
            {...getOverrideProps(overrides, "EmailFlex")}
        >
            <Text
                fontFamily="Inter"
                fontSize="16px"
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
                {...getOverrideProps(overrides, "Email")}
            >
                Email:
            </Text>
                        <Text
                fontFamily="Inter"
                fontSize="16px"
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
                {...getOverrideProps(overrides, "EmailInsert")}
            >
            </Text>
        </Flex>
        <Flex
            gap="20px"
            direction="row"
            width="auto"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
            padding="0px"
            {...getOverrideProps(overrides, "PhoneFlex")}
        >
            <Text
                fontFamily="Inter"
                fontSize="16px"
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
                {...getOverrideProps(overrides, "Phone")}
            >
                Phone:
            </Text>
            <Text
                fontFamily="Inter"
                fontSize="16px"
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
                whiteSpace="nowrap"
                children="blank"
                {...getOverrideProps(overrides, "PhoneInsert")}
            ></Text>
        </Flex>
        <Flex
            gap="20px"
            direction="row"
            width=""
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
            padding="0px"
            {...getOverrideProps(overrides, "FirstNameFlex")}
        >
            <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="300"
                color="rgba(0,0,0,1)"
                textTransform="none"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="flex"
                direction="row"
                justifyContent="unset"
                width="max-content"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace='nowrap'
                {...getOverrideProps(overrides, "FirstName")}
            >
                First Name:
            </Text>
            <Text
                fontFamily="Inter"
                fontSize="16px"
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
                {...getOverrideProps(overrides, "FirstNameInsert")}
            ></Text>
        </Flex>
        <Flex
            gap="20px"
            direction="row"
            width=""
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
            padding="0px"
            {...getOverrideProps(overrides, "LastNameFlex")}
        >
            <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="300"
                color="rgba(0,0,0,1)"
                textTransform="none"
                lineHeight="24.204544067382812px"
                textAlign="left"
                display="flex"
                direction="row"
                justifyContent="unset"
                width="max-content"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace='nowrap'
                {...getOverrideProps(overrides, "LastName")}
            >
                Last Name:
            </Text>
            <Text
                fontFamily="Inter"
                fontSize="16px"
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
                {...getOverrideProps(overrides, "LastNameInsert")}
            ></Text>
        </Flex>
    </Flex>
    </Flex>
  );
}
