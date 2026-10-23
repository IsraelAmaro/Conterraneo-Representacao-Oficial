import { describe, expect, it } from 'vitest';
import { App } from './app';

describe('App', () => {
  it('should create the app component', () => {
    const app = new App();
    expect(app).toBeTruthy();
  });

  it('should expose the default application title', () => {
    const app = new App();
    expect((app as any).title()).toBe('conterraneo-frontend');
  });
});
