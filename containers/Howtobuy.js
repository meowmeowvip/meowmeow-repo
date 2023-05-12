import Steps from "../components/Steps";
import wallet from "../public/assets/wallet.png";
import eth from "../public/assets/eth.png";
import uniswap from "../public/assets/uniswap.png";
import swap from "../public/assets/meowswap.png";


import { Righteous } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
import { motion } from "framer-motion";

export default function Howtobuy({ id }) {
  return (
    <div className="w-screen flex flex-col justify-center items-center mb-16 ">
      <div className={righteous.className}>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            scale: 0.6,
            opacity:0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
          id={id}
          className="w-full flex items-center justify-center font-outline-1 text-white text-[60px] md:text-[80px] py-12"
        >
          how to meow
        </motion.div>
      </div>
      <Steps
        src={wallet}
        title="create a meow"
        sub="download metamask meow or your wallet meow of choice from the meow store or google play meow store for free. Desktop users, download the google chrome meow by going to metamask.io."
      ></Steps>
      <Steps
        src={eth}
        title="get some meow"
        sub="have ETH in your wallet to switch to $MEOW. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."
      ></Steps>
      <Steps
        src={uniswap}
        title="go to Unimeow"
        sub="connect to unimeow. Go to app.uniswap.org in meow chrome or on the browser inside your Metamask meow. Connect your meow. Paste the $MEOW token address into Unimeow, select MEOW, and confirm. When Metamask prompts you for a wallet signature, meow."
      ></Steps>
      <Steps
        src={swap}
        title="switch eth for $meow"
        sub="switch eth for $meow. We have ZERO meows so you don’t need to meow about buying with a specific meow slippage, although you may need to meow slippage during times of market volatility."
      ></Steps>

      
    </div>
  );
}
