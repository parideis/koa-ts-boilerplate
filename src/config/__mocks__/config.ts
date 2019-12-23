export const APP_PORT = 3001;
export const LOG_LEVEL = 'error';
export const LOGGING_ENABLED = 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DB_ENDPOINT = `${(global as any).__DBURI__}${process.env.JEST_WORKER_ID || ''}`;

// eslint-disable-next-line no-console
console.debug = jest.fn();
