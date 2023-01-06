/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeroLayout3Props } from "./HeroLayout3";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout2OverridesProps = {
    HeroLayout2?: PrimitiveOverrideProps<ViewProps>;
    HeroLayout3?: HeroLayout3Props;
} & EscapeHatchProps;
export declare type HeroLayout2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroLayout2OverridesProps | undefined | null;
}>;
export default function HeroLayout2(props: HeroLayout2Props): React.ReactElement;
