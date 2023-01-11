import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MedCardProps } from "./MedCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedCardCollectionOverridesProps = {
    MedCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    MedCard?: MedCardProps;
} & EscapeHatchProps;
export declare type MedCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MedCardProps;
} & {
    overrides?: MedCardCollectionOverridesProps | undefined | null;
}>;
export default function MedCardCollection(props: MedCardCollectionProps): React.ReactElement;
