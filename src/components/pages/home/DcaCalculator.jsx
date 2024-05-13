import Input from '@/components/common/Input';

const DcaCalculator = () => {
  return (
    <div className='container mx-auto'>
      <form className='w-fit p-5 bg-blue-500 rounded'>
        <div className='flex justify-center items-center gap-4'>
          <Input
            className={'text-slate-800'}
            placeholder='Buying Price'
            label='Buying Price'
            required={true}
            type='number'
          />
          <Input
            className={'text-slate-800'}
            placeholder='Token Quantity'
            label='Token QTY'
            required={true}
            type='number'
          />
        </div>
      </form>
    </div>
  );
};

export default DcaCalculator;
