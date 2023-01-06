/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    MedTrak?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    Button36563453?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32236472914"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32236562816"?: PrimitiveOverrideProps<FlexProps>;
    Button36472923?: PrimitiveOverrideProps<ButtonProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    Button36562808?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    firstName?: String;
    lastName?: String;
    handleAuth?: (event: SyntheticEvent) => void;
    authText?: String;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
