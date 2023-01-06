/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout3OverridesProps = {
    HeroLayout3?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    MedTrak?: PrimitiveOverrideProps<TextProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Easily keep track of medication quantities, remaining days, and more. MedTrack uses a simple user interface to so you can check important information about your medications at a glance."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HeroLayout3Props = React.PropsWithChildren<Partial<FlexProps> & {
    handleClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: HeroLayout3OverridesProps | undefined | null;
}>;
export default function HeroLayout3(props: HeroLayout3Props): React.ReactElement;
