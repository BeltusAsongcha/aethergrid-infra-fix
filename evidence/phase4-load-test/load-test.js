import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.05']
  }
};

export default function () {
  const res = http.get(__ENV.TARGET_URL, { timeout: '10s' });

  check(res, {
    'HTTP response successful': (r) => r.status >= 200 && r.status < 400
  });

  sleep(1);
}
