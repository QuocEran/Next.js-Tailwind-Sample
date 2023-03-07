import Image from "next/image";
import styles from "styles/module/Home.module.css";

const Logo = () => {
  return (
    <div className={`flex justify-between items-center text-sm max-w-[1100px] w-full z-[2] mono`}>
      <p className={`relative m-0 p-4 ${styles.block_code}`}>
        Get started by editing&nbsp;
        <code className="font-bold mono">pages/index.tsx</code>
      </p>
      <div>
        <a
          className="flex items-center justify-center gap-2"
          href="https://mltechsoft.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/webp/logo.webp"
            alt="Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};

export default Logo;
