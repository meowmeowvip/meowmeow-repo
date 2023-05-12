

import Image from "next/image";
import { SocialIcon } from 'react-social-icons';
import logo from "../public/assets/cat.png";

import { Righteous, Rubik } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="w-screen flex flex-col justify-center items-center pb-24 ">
      <div className={righteous.className}>
        <div className="font-outline-1 w-full flex items-center justify-center text-white text-[80px] py-12">
          meow us
        </div>

        <div className="flex justify-center items-center">
          <Image width={80} src={logo} className="mb-4" />
         
        </div>
        <div className=" w-full justify-center items-center flex space-x-8 pt-8">
        <SocialIcon url="https://t.me/+mokDfRbVxW4wMDFh" network="telegram" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>
        <SocialIcon url="https://twitter.com/meowmeoweth2023" network="twitter" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>

        <SocialIcon network="discord" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>
</div>
<div className={rubik.className}>
        <div className="w-full flex justify-center text-center">
          <div className="text-[#C04000] w-3/4 font-outline-0 text-2xl py-8">
          $meow coin has no association with anymeow. This meow is simply paying homage to a meme we all love and recognize.
          </div>
        </div>
      </div>
      <div className={rubik.className}>
        <div className="w-full flex justify-center text-center">
          <div className="text-[#C04000] w-3/4 font-outline-0 text-2xl py-8">
          $meow is a meme coin with no intrinsic value or expectation of financial return. There is no formal meowteam or meowmap. the coin is completely meowless and for entertainment purposes only.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
