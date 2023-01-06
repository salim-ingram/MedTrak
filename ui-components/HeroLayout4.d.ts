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
export declare type HeroLayout4OverridesProps = {
    HeroLayout4?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    MedTrak?: PrimitiveOverrideProps<TextProps>;
    "Easily keep track of medication quantities, remaining days, and more."?: PrimitiveOverrideProps<TextProps>;
    Form?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "MedTrack uses a simple user interface to so you can check important information about your medications at a glance."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroLayout4Props = React.PropsWithChildren<Partial<FlexProps> & {
    handleClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: HeroLayout4OverridesProps | undefined | null;
}>;
export default function HeroLayout4(props: HeroLayout4Props): React.ReactElement;
