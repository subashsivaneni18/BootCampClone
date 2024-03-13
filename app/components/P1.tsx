import Image from 'next/image';
import React from 'react'

const P1 = () => {
  return (
    <div className="justify-center  flex py-10 px-5">
      <div className="felx flex-col justify-center ">
        <div>
          <Image src="/images/1.png" width={580} height={230} alt="1" />
        </div>
        <div className="text-center mt-10">
          <p className="text-3xl font-bold leading-10">
            Learn How To Build This Web App:
          </p>
        </div>
      </div>
    </div>
  );
}

export default P1
