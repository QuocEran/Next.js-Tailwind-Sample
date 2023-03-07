import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "styles/module/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const CenterField = () => {
  return (
    <div className={`${styles.center}`}>
      <Image className="relative" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      <div className={`${styles.thirteen} mr-8`}>
        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
      </div>
      <div className={`self-center mr-8`}>
        <p className={`${inter.className} text-5xl`}>+</p>
      </div>
      <Image
        className="relative"
        src="/images/svg/tailwindcss-logo.svg"
        alt="Next.js Logo"
        width={250}
        height={40}
        priority
      />
    </div>
  );
};

export default CenterField;
