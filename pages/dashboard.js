
import { MedicationUpdateForm } from '../ui-components';
import MedCardCollection from '../components/MedCardCollectionSaved'
import { DataStore } from '@aws-amplify/datastore';
import { Medication } from '../models';
import { useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';

function Dashboard() {

  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateMed, setUpdateMed] = useState()

  async function updateQuantity(item) {
    const original = await DataStore.query(Medication, item);
    await DataStore.save(
      Medication.copyOf(original, updated => {
        updated.medQuantity = (original.medQuantity - 1)
      })
    );
  }




  async function setDays(item) {
    try {
    const original = await DataStore.query(Medication, item);
    await DataStore.save(
      Medication.copyOf(original, updated => {
        updated.daysLeft = Math.floor((original.medQuantity / original.dailyDose))
      })
    );
    }
    catch(e) {console.error(e)}
  }

  return (
    <>
      <div className='center'>
        <div className='MedCollectionContainer'>
          <MedCardCollection overrideItems={({ item, idx }) => {
            setDays(item)
            return {
              overrides: {
                edit: {
                  as: 'button',
                  onClick: () => {
                    setShowUpdateModal(true)
                    setUpdateMed(item)
                  }
                },
                Button: {
                  as: 'button',
                  onClick: async () => {
                    updateQuantity(item)
                  }
                }
              }
            }
          }}
          />
        </div>
      </div>
      <div className='modal' style={{ display: showUpdateModal === false && 'none' }}>

        <MedicationUpdateForm
          medication={updateMed}
          onSubmit={(fields) => {
            // Example function to trim all string inputs
            const updatedFields = {}
            Object.keys(fields).forEach(key => {
              if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
              } else {
                updatedFields[key] = fields[key]
              }
            })
            return updatedFields
          }}
          onCancel={() => {
            setShowUpdateModal(false)
          }}
          onSuccess={() => {
            setShowAddModal(false)
          }}
        />
      </div>
    </>
  );
}


export default withAuthenticator(Dashboard);