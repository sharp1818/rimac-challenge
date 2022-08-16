/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';

function ArmaTuPlan() {
  const methods = useForm({
    defaultValues: {
      amount: 15900,
      options: [
        { visibility: true, value: false },
        { visibility: true, value: false },
        { visibility: true, value: false }
      ]
    }
  });
  const { watch } = methods;
  console.log('watch', watch());
  return (
    <FormProvider {...methods}>
      <Outlet />
    </FormProvider>
  );
}

export default ArmaTuPlan;
