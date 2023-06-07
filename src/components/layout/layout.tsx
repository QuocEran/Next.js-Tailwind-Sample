import Seo from "components/seo/index";
import ScrollLock from "react-scrolllock";
import appStore from "stores/app";
import { ISeo } from "types/response/base/IBaseResponse";
import { ILayoutAttributes } from "types/response/base/ILayoutResponse";
import FloatContainer from "./floatContainer";

type Props = {
  layout: ILayoutAttributes;
  seoProps: ISeo;
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { openDrawer } = appStore();

  return (
    <>
      <Seo {...props.seoProps} />
      <div className="relative w-full">
        <FloatContainer visible={true} />
        <ScrollLock isActive={openDrawer}>
          <main className="relative z-[0] max-w-[2560px] w-full m-auto pt-[80px]">{props.children}</main>
        </ScrollLock>
      </div>
    </>
  );
};

export default Layout;
