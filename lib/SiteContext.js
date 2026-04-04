'use client';

import React, { createContext, useContext } from 'react';
import siteContent from './site-content.json';

// Create the context
const SiteContext = createContext();

// Provider component
export function SiteProvider({ children }) {
const value = {
    branding: siteContent.branding,
    contact: siteContent.contact,
    pages: siteContent.pages,
    navigation: siteContent.navigation,
    seoKeywords: siteContent.seo_keywords,
  };

  return (
    <SiteContext.Provider value={value}>
      {children}
    </SiteContext.Provider>
  );
}

// Custom hook to use the context
export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within SiteProvider');
  }
  return context;
}
