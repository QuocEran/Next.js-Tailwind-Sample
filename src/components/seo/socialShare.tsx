import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { toast } from "react-toastify";

interface Props {
  url: string;
}

function SocialShare(props: Props) {
  // toast
  const { url } = props;
  const copyLink = async (link: string) => {
    await navigator.clipboard.writeText(link);
    toast.success("Link copied successfully!", {
      position: "bottom-center",
    });
  };
  return (
    <>
      <div className="flex flex-wrap gap-4 m-auto">
        <FacebookShareButton url={url}>
          <FacebookIcon round size={32} />
        </FacebookShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round size={32} />
        </LinkedinShareButton>
        <PinterestShareButton url={url} media={url} description="">
          <PinterestIcon round size={32} />
        </PinterestShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={32} />
        </TelegramShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon round size={32} />
        </TwitterShareButton>
        <button onClick={() => copyLink(url)}>copy link</button>
      </div>
    </>
  );
}

export default SocialShare;
