import { resolveApiBaseUrl } from './api-base-url';

export const environment = {
  production: true,
  apiBaseUrl: resolveApiBaseUrl('https://backend.tinguilin.yaba-in.com/api/v1'),
  supportEmail: '',
};
