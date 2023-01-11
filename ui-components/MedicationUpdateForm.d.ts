/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Medication } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicationUpdateFormInputValues = {
    medQuantity?: number;
    medStrength?: number;
    dailyDose?: number;
};
export declare type MedicationUpdateFormValidationValues = {
    medQuantity?: ValidationFunction<number>;
    medStrength?: ValidationFunction<number>;
    dailyDose?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationUpdateFormOverridesProps = {
    MedicationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    medQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    medStrength?: PrimitiveOverrideProps<TextFieldProps>;
    dailyDose?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationUpdateFormProps = React.PropsWithChildren<{
    overrides?: MedicationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    medication?: Medication;
    onSubmit?: (fields: MedicationUpdateFormInputValues) => MedicationUpdateFormInputValues;
    onSuccess?: (fields: MedicationUpdateFormInputValues) => void;
    onError?: (fields: MedicationUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MedicationUpdateFormInputValues) => MedicationUpdateFormInputValues;
    onValidate?: MedicationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MedicationUpdateForm(props: MedicationUpdateFormProps): React.ReactElement;
