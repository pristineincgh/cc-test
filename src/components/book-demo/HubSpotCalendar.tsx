'use client';

import { useEffect, useState } from 'react';

const HubSpotCalendar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // HubSpot script creates an iframe with this class when loaded
    const checkIframe = setInterval(() => {
      if (document.querySelector('.meetings-iframe-container iframe')) {
        setIsLoading(false);
        clearInterval(checkIframe);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(checkIframe);
  }, []);

  return (
    <div className="relative min-h-[500px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="loader"></div>
            <p className="text-gray-500 animate-pulse mt-4">
              Loading scheduler...
            </p>
          </div>
        </div>
      )}

      {/* HubSpot Meeting Embed Code */}
      <div
        className="meetings-iframe-container"
        data-src="https://meetings-eu1.hubspot.com/kwasi-baayeh?embed=true"
      />
    </div>
  );
};
export default HubSpotCalendar;
