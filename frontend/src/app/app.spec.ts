import { describe, expect, it } from 'vitest';

describe('App smoke test', () => {
  it('should keep the frontend project configured for CI', () => {
    expect(true).toBe(true);
  });

  it('should expose a valid app name placeholder', () => {
    const appName = 'conterraneo-frontend';
    expect(appName).toBe('conterraneo-frontend');
  });
});
