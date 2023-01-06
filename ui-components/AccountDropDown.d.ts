/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountDropDownOverridesProps = {
    AccountDropDown?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32236663068"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32236663069"?: PrimitiveOverrideProps<FlexProps>;
    Button36663070?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Button36663073?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AccountDropDownProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AccountDropDownOverridesProps | undefined | null;
}>;
export default function AccountDropDown(props: AccountDropDownProps): React.ReactElement;
