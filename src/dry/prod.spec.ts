import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Prod from './Prod.vue';

describe('Prod.vue', () => {
  it('does not render Prod component in development mode', () => {
    const wrapper = mount(Prod, {
      props: {
        mode: 'development',
      },
    });
    expect(wrapper.html()).toBe('');
  });

  it('renders Prod component in prod mode', () => {
    const wrapper = mount(Prod, {
      props: {
        mode: 'production',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Prod Component');
  });
});
