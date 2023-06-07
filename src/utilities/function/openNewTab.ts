const openInNewTab = (url: string) => {
  window && window.open(url, "_blank", "noopener,noreferrer");
};

export default openInNewTab;
