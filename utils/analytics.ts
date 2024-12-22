export const GA_TRACKING_ID = 'G-SYX55BV24F';

// Google Analytics page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }
};

// Google Analytics event tracking
export const event = ({ action, category, label, value }: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, params = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      ...params,
      non_interaction: false,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
  });
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackEvent('outbound_link', {
    url: url,
  });
};

// Track file downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};