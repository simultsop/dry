import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Dev from './Dev.vue';

describe('Dev.vue', () => {
  it('does not render Dev component in production mode', () => {
    const wrapper = mount(Dev, {
      global: {
        mocks: {
          $env: {
            mode: 'production',
          },
        },
      },
    });
    expect(wrapper.exists()).toBe(false);
  });

  it('renders Dev component in dev mode', () => {
    const wrapper = mount(Dev, {
      global: {
        mocks: {
          $env: {
            mode: 'development',
          },
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Dev Component');
  });
});
