// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Medication } = initSchema(schema);

export {
  Medication
};