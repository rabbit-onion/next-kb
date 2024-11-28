import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='pb-96 flex flex-col gap-4'>
      <section>
        <div className='container'>
          <div className='text-[16vw] font-bold'>thinK Great</div>
          <div className='relative'>
            {/* Image의 width, height는 렌더링 사이즈임 */}
            <Image src='/images/intro.png' alt='' width={1300} height={1300} className='w-full h-[400px] object-cover' />
            <div className='absolute left-5 bottom-10 flex flex-col gap-2'>
              <span className='text-white text-lg font-bold'>KB그룹</span>
              <strong className='text-white text-3xl font-bold'>
                KB그룹광고
                <br />
                드디어 TV방송에서
                <br />
                만나다
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <ul>
            <li>
              <Link href='#' className='flex flex-col gap-3'>
                <Image src='/images/cat.jpg' alt='' width={1300} height={1300} className='w-full aspect-auto object-cover' />
                <div className='flex flex-col'>
                  <span className='text-base text-gray-500'>소셜미디어</span>
                  <strong className='text-xl'>소통과 화합의 현장!KG모빌리티 파트너스 데이</strong>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className='container'>
          <h2>
            <Link href='#'>
              곽재선의 창 <ChevronRight />
            </Link>
          </h2>
          <div>
            <Link href='#'>
              <Image src='/images/chair.jpg' alt='' width={1300} height={1300} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
