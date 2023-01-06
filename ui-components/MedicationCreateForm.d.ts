/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicationCreateFormInputValues = {
    medName?: string;
    medQuantity?: number;
    daysLeft?: number;
    medStrength?: number;
    dailyDose?: number;
};
export declare type MedicationCreateFormValidationValues = {
    medName?: ValidationFunction<string>;
    medQuantity?: ValidationFunction<number>;
    daysLeft?: ValidationFunction<number>;
    medStrength?: ValidationFunction<number>;
    dailyDose?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationCreateFormOverridesProps = {
    MedicationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    medName?: PrimitiveOverrideProps<TextFieldProps>;
    medQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    daysLeft?: PrimitiveOverrideProps<TextFieldProps>;
    medStrength?: PrimitiveOverrideProps<TextFieldProps>;
    dailyDose?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationCreateFormProps = React.PropsWithChildren<{
    overrides?: MedicationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicationCreateFormInputValues) => MedicationCreateFormInputValues;
    onSuccess?: (fields: MedicationCreateFormInputValues) => void;
    onError?: (fields: MedicationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicationCreateFormInputValues) => MedicationCreateFormInputValues;
    onValidate?: MedicationCreateFormValidationValues;
} & React.CSSProperties>;
export default function MedicationCreateForm(props: MedicationCreateFormProps): React.ReactElement;
