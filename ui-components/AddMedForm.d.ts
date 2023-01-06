/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Medication } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddMedFormOverridesProps = {
    AddMedForm?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Medication"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Add New Medication"?: PrimitiveOverrideProps<TextProps>;
    Divider36472817?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField36472819?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36472820?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36472821?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36472822?: PrimitiveOverrideProps<TextFieldProps>;
    Divider36472823?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddMedFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    medication?: Medication;
} & {
    overrides?: AddMedFormOverridesProps | undefined | null;
}>;
export default function AddMedForm(props: AddMedFormProps): React.ReactElement;
