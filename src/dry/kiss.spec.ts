import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Kiss from './Kiss.vue';

describe('Kiss.vue', () => {
  it('renders Kiss component', () => {
    const wrapper = mount(Kiss);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Keep It Stupid Simple — Principle');
  });

  it('renders default slot content', () => {
    const wrapper = mount(Kiss, {
      slots: {
        default: 'Test Slot Content',
      },
    });
    expect(wrapper.text()).not.toContain('Test Slot Content');
  });

  it('renders default slot content', () => {
    const wrapper = mount(Kiss, {
      slots: {
        kiss: 'Test Slot Content',
      },
    });
    expect(wrapper.text()).toContain('Test Slot Content');
  });
});
