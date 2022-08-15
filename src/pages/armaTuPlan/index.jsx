/* eslint-disable react/jsx-props-no-spreading */
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';

function ArmaTuPlan() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Outlet />
    </FormProvider>
  );
}

export default ArmaTuPlan;
