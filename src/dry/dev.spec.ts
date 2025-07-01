import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Dev from './Dev.vue';

describe('Dev.vue', () => {
  it('does not render Dev component in production mode', () => {
    const wrapper = mount(Dev, {
      props: {
        mode: 'production',
      },
    });
    expect(wrapper.html()).toBe('<!--v-if-->');
  });

  it('renders Dev component in dev mode', () => {
    const wrapper = mount(Dev, {
      props: {
        mode: 'development',
      },
    });
    expect(wrapper.text()).toContain('Dev Component');
  });
});
