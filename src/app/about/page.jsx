import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <section>
        <div>
          <div className='text-[18vw] font-bold'>thinK Great</div>
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
    </div>
  );
};

export default AboutPage;
