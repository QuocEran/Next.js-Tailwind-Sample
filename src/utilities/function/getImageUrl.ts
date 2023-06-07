export function getImageUrl(url: string) {
  if (url === undefined || url === "undefined") {
    return "https://cms-qr-code.mltechsoft.com/uploads/logo_985e1479a0.webp?updated_at=2023-04-07T05:52:51.919Z";
  } else {
    return "https://cms-qr-code.mltechsoft.com" + url;
  }
}
