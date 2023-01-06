/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Medication } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedCardOverridesProps = {
    "4"?: PrimitiveOverrideProps<TextProps>;
    "30"?: PrimitiveOverrideProps<TextProps>;
    "120"?: PrimitiveOverrideProps<TextProps>;
    MedCard?: PrimitiveOverrideProps<FlexProps>;
    options?: PrimitiveOverrideProps<FlexProps>;
    delete?: PrimitiveOverrideProps<FlexProps>;
    Vector36532867?: PrimitiveOverrideProps<IconProps>;
    edit?: PrimitiveOverrideProps<FlexProps>;
    Vector36532869?: PrimitiveOverrideProps<IconProps>;
    Quantity?: PrimitiveOverrideProps<FlexProps>;
    "Days Remaining"?: PrimitiveOverrideProps<FlexProps>;
    days?: PrimitiveOverrideProps<TextProps>;
    Info?: PrimitiveOverrideProps<FlexProps>;
    "Med Info"?: PrimitiveOverrideProps<FlexProps>;
    "Med Name"?: PrimitiveOverrideProps<TextProps>;
    "Strength and Icon"?: PrimitiveOverrideProps<FlexProps>;
    Strength?: PrimitiveOverrideProps<FlexProps>;
    "Med Strength"?: PrimitiveOverrideProps<TextProps>;
    "Strength Unit"?: PrimitiveOverrideProps<TextProps>;
    "Additional Info"?: PrimitiveOverrideProps<FlexProps>;
    "Daily Info"?: PrimitiveOverrideProps<FlexProps>;
    "Daily Dose"?: PrimitiveOverrideProps<TextProps>;
    "Take Button"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MedCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    medication?: Medication;
    handleTake?: (event: SyntheticEvent) => void;
} & {
    overrides?: MedCardOverridesProps | undefined | null;
}>;
export default function MedCard(props: MedCardProps): React.ReactElement;