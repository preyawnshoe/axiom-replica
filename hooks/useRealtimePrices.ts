import { useEffect, useState, useCallback } from 'react';
import { websocketMock, PriceUpdate } from '@/lib/websocket-mock';

export type PriceFlash = {
  [key: string]: 'increase' | 'decrease' | 'neutral' | null;
};

export function useRealtimePrices(onUpdate?: (update: PriceUpdate) => void) {
  const [priceFlash, setPriceFlash] = useState<PriceFlash>({});

  const handlePriceUpdate = useCallback((update: PriceUpdate) => {
    // Flash the price change color
    setPriceFlash(prev => ({
      ...prev,
      [update.id]: update.change,
    }));

    // Clear the flash after animation completes
    setTimeout(() => {
      setPriceFlash(prev => ({
        ...prev,
        [update.id]: null,
      }));
    }, 1000);

    // Call external update handler
    onUpdate?.(update);
  }, [onUpdate]);

  useEffect(() => {
    websocketMock.connect();
    const unsubscribe = websocketMock.subscribe(handlePriceUpdate);

    return () => {
      unsubscribe();
      websocketMock.disconnect();
    };
  }, [handlePriceUpdate]);

  return priceFlash;
}
