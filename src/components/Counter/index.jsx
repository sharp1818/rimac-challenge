/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-closing-bracket-location */
import Input from 'antd/lib/input/Input';
import { Controller, useFormContext } from 'react-hook-form';
import './Counter.scss';

function Counter() {
  const { control, watch, setValue } = useFormContext();
  const increase = () => {
    setValue('amount', watch('amount') + 100);
  };
  const decrease = () => {
    setValue('amount', watch('amount') !== 0 ? watch('amount') - 100 : 0);
  };

  return (
    <div className="counter-container">
      <button
        type="button"
        onClick={() => {
          decrease();
        }}>
        -
      </button>
      <div>
        <Controller
          control={control}
          name="amount"
          render={({ field }) => (
            <Input prefix="$ " readOnly bordered={false} type="number" {...field} />
          )}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          increase();
        }}>
        +
      </button>
    </div>
  );
}

export default Counter;
