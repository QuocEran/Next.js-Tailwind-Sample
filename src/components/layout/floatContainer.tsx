import ThemeChangerBtn from "components/common/button/themeChangerBtn";
import { useEffect, useState } from "react";

type Props = {
  visible?: boolean;
};

const FloatContainer = (props: Props) => {
  const [visible, setVisible] = useState(props.visible);
  const scrollDown = () => {
    if (visible) {
      window &&
        window.scrollTo({
          top: 630,
          behavior: "smooth",
        });
    }
  };

  const scrollOnTop = () => {
    if (!visible) {
      window &&
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    }
  };
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled < 300) {
        setVisible(true);
      } else if (scrolled >= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
  }, []);
  return (
    <>
      <div className="fixed z-[999] left-in bottom-16">
        <ThemeChangerBtn animate={true} />
      </div>

      <div className="fixed z-[999] right-in bottom-8">
        <div
          onClick={() => scrollDown()}
          className={`flex-col items-center justify-center h-full gap-2 w-max transition-all duration-700 ease-in-out ${
            visible ? "opacity-100 cursor-pointer" : "opacity-0"
          }`}
        >
          <div className="duration-300 ease-in-out mouse_scroll hover:drop-shadow-2xl">
            <div className="border-2 mouse border-gray-70 dark:border-white">
              <div className="border-2 wheel border-gray-70 dark:border-white bg-gray-70 dark:bg-white"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu dark:border-white"></span>
              <span className="m_scroll_arrows doi dark:border-white"></span>
              <span className="m_scroll_arrows trei dark:border-white"></span>
            </div>
          </div>
          <p className="text-sm font-medium dark:text-white text-gray-70">Scroll down for more</p>
        </div>
      </div>
      <div className="fixed z-[999] right-in bottom-16">
        <button
          className={`btn btn-circle btn-primary hover:bg-secondary transition-all duration-700 ease-in-out ${
            !visible ? "opacity-100 cursor-pointer" : "opacity-0"
          }`}
          onClick={() => scrollOnTop()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default FloatContainer;
