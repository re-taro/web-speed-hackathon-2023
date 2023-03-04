import { useEffect, useState } from 'react';
import { getActiveOffer } from '../utils/get_active_offer';
import type { LimitedTimeOfferFragmentResponse } from '../graphql/fragments';

export function useActiveOffer(offers: LimitedTimeOfferFragmentResponse[] | undefined) {
  const [activeOffer, setActiveOffer] = useState<LimitedTimeOfferFragmentResponse | undefined>(undefined);
  useEffect(() => {
    const timer = setInterval(() => {
      if (!offers) {
        setActiveOffer(undefined);
        return;
      }
      const offer = getActiveOffer(offers);
      setActiveOffer(offer);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [offers]);

  return { activeOffer };
}
