import React, { useEffect } from 'react';

// Extend JSX.IntrinsicElements to recognize the coingecko-coin-price-marquee-widget
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'coingecko-coin-price-marquee-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'coin-ids': string;
        currency: string;
        'background-color'?: string;
        locale?: string;
      };
    }
  }
}

// Define props type
interface CoinGeckoMarqueeProps {
  coinIds: string; // Comma-separated string of coin IDs
  currency: string;
  backgroundColor?: string; // Optional as it has a default value in widget
  locale?: string; // Optional as it has a default value in widget
}

const CoinGeckoMarquee: React.FC<CoinGeckoMarqueeProps> = ({
  coinIds,
  currency,
  backgroundColor = '#15131D', // Default value
  locale = 'en', // Default value
}) => {
  useEffect(() => {
    // Function to dynamically load the CoinGecko widget script
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    loadScript();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <coingecko-coin-price-marquee-widget
      coin-ids={coinIds}
      currency={currency}
      background-color={backgroundColor}
      locale={locale}
    ></coingecko-coin-price-marquee-widget>
  );
};

export default CoinGeckoMarquee;