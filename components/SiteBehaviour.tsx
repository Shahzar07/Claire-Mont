'use client';

import { useEffect } from 'react';
import { initSite } from '@/lib/site';

/**
 * Wires up the interactive behaviour (navigation, accordions, survey form,
 * carousels, testimonials, scroll reveal…) after React has hydrated the page.
 * The behaviour itself is plain DOM code in lib/site.js.
 */
export default function SiteBehaviour() {
  useEffect(() => {
    initSite();
  }, []);

  return null;
}
