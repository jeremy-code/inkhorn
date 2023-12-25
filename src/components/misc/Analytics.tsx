import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Analytics = () => {
  return (
    <>
      <SpeedInsights />
      <VercelAnalytics />
    </>
  );
};

export default Analytics;
