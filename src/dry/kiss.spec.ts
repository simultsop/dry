import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Kiss from './Kiss.vue';

describe('Kiss.vue', () => {
  it('renders Kiss component', () => {
    const wrapper = mount(Kiss);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Keep It Stupid Simple — Principle');
  });
});
