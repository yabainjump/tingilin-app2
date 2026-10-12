import { resolveApiBaseUrl } from './api-base-url';

export const environment = {
  production: true,
  apiBaseUrl: resolveApiBaseUrl('https://backend.tinguilin.yaba-in.com/api/v1'),
  paymentProvider: 'DIGIKUNTZ' as const,
  supportEmail: '',
  // Google Sign-In (Web OAuth Client ID). Le meme ID doit etre configure
  // dans GOOGLE_CLIENT_ID sur l'API.
  googleWebClientId: '352465042993-mdn2aug25q85ohc8gce28gec5hinn4jv.apps.googleusercontent.com',
};
