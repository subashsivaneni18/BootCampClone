import Image from 'next/image';
import React from 'react'

const P7 = () => {
  return (
    <div className="w-[80vw] mx-auto">
      <div className="mb-32">
        <p className="mt-20 text-3xl leading-10 font-semibold tracking-wider max-w-7xl mx-auto mb-10 text-zinc-800 dark:text-white px-3 text-center">
          How the app looks like, dark and light mode
        </p>
        <Image
          src="/images/3.png"
          width={1200}
          height={200}
          alt="3"
          className="mb-10"
        />
        <Image
          src="/images/4.png"
          width={1200}
          height={200}
          alt="3"
          className="mb-10"
        />
        <div>
          <Image src="/images/5.png" width={1200} height={200} alt="3" />
          <Image src="/images/6.png" width={1200} height={200} alt="3" />
          <Image src="/images/7.png" width={1200} height={200} alt="3" />
        </div>

        <p className="mt-20 text-3xl leading-10 font-semibold tracking-wider max-w-7xl mx-auto mb-10 text-zinc-800 dark:text-white px-3 text-center">
          Did I say the app we&apos;ll build looks great as a PWA on a
          phone/tablet?
        </p>

        <Image src="/images/8.png" width={1200} height={200} alt="3" />
      </div>
    </div>
  );
}

export default P7
