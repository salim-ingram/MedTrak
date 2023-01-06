import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMedication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly medName?: string | null;
  readonly medQuantity?: number | null;
  readonly daysLeft?: number | null;
  readonly medStrength?: number | null;
  readonly dailyDose?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Medication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly medName?: string | null;
  readonly medQuantity?: number | null;
  readonly daysLeft?: number | null;
  readonly medStrength?: number | null;
  readonly dailyDose?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Medication = LazyLoading extends LazyLoadingDisabled ? EagerMedication : LazyMedication

export declare const Medication: (new (init: ModelInit<Medication>) => Medication) & {
  copyOf(source: Medication, mutator: (draft: MutableModel<Medication>) => MutableModel<Medication> | void): Medication;
}