import { IImageResponse } from "./IBaseResponse";

interface ILayoutAttributes {
  nav_bar: IAppLink[];
  horizontal_logo: IImageResponse;
  vertical_logo: IImageResponse;
  invert_horizontal_logo: IImageResponse;
  invert_vertical_logo: IImageResponse;
  footer: {
    title: {
      from: string;
      via: string;
      to: string;
    };
    sp_avatar: IImageResponse;
    sp_title: string;
    sp_subTitle: string;
    sp_buttonTitle: string;
    sp_buttonLink: string;
    social_media_links: ILink[];
    our_page_links: ILink[];
    address: {
      title: string;
      content: string;
    }[];
  };
}

interface ILayoutResponse {
  data: {
    id: number;
    attributes: ILayoutAttributes;
  };

  meta: any;
}

interface IAppLink {
  title: string;
  icon: IImageResponse;
  href: string;
  col: boolean;
  status: boolean;
  childs: ILink[];
}

interface ILink {
  id?: number;
  title: string;
  description: string;
  icon: IImageResponse;
  href: string;
  status: boolean;
}

export type { ILink, IAppLink, ILayoutAttributes };

export default ILayoutResponse;
