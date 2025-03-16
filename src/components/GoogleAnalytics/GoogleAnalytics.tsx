import { GoogleAnalytics as Google } from "@next/third-parties/google";

export const GoogleAnalytics = () => {
  const ID_GOOGLE_ANALYTICS = "G-ENH14H0BCD";

  return <Google gaId={ID_GOOGLE_ANALYTICS as string} />;
};
