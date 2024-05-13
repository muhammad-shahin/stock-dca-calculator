import DcaCalculator from '@/components/pages/home/DcaCalculator';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1 className='text-center text-5xl md:text-6xl lg:text-8xl py-10'>
        Stock DCA Calculator
      </h1>
      <DcaCalculator />
    </main>
  );
}
