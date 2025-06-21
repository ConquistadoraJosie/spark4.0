import React from 'react';
import Image from 'next/image';
import mission from './images/mission.png';


export default function Home() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
      <div className="w3-container w3-center">
        <div className="m1">
          <Image src={mission} alt="mission statement" />
        </div>
        <div>Image carosel TBP</div>
      </div>
    </>
  );
}
// 
