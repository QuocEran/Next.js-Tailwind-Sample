import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  href: string;
  title: string;
  description: string;
}

const ExampleCard = (props: Props) => {
  return (
    <a
      href={props.href}
      className="px-5 py-4 rounded-[12px] bg- bg-[#b4b9bc]/0 border border-solid border-[#838687]/0 flex justify-center items-center flex-col transition-all ease-in-out duration-500 hover:bg-[#b4b9bc]/10 hover:border-[#838687]/20 [&>span]:inline-block [&>span]:transition-transform hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} font-semibold mb-3`}>{props.title}</h2>
      <p className={`${inter.className} m-0 opacity-60 text-[0.9rem] leading-6 max-w-[30ch]`}>{props.description}</p>
    </a>
  );
};

export default ExampleCard;
