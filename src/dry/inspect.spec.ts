import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Inspect from './Inspect.vue';

describe('Inspect.vue', () => {
  it('renders Inspect component', () => {
    const wrapper = mount(Inspect);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('inspect-component');
  });

  it('renders "No data to inspect" when no data prop is provided', () => {
    const wrapper = mount(Inspect, {
      props: {} // Explicitly no data prop
    });
    expect(wrapper.text()).toBe('undefined'); // Since props.data will be undefined
  });

  it('inspects a simple string value', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: 'hello world'
      }
    });
    expect(wrapper.text()).toBe('"hello world"');
  });

  it('inspects a number value', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: 42
      }
    });
    expect(wrapper.text()).toBe('42');
  });

  it('inspects a boolean value', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: true
      }
    });
    expect(wrapper.text()).toBe('true');
  });

  it('inspects null value', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: null
      }
    });
    expect(wrapper.text()).toBe('null');
  });

  it('inspects undefined value', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: undefined
      }
    });
    expect(wrapper.text()).toBe('undefined');
  });

  it('inspects a function', () => {
    const testFunction = function namedFunction() { return 'test'; };
    const wrapper = mount(Inspect, {
      props: {
        data: testFunction
      }
    });
    expect(wrapper.text()).toBe('[Function: namedFunction]');
  });

  it('inspects an anonymous function', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: function() { return 'test'; }
      }
    });
    expect(wrapper.text()).toBe('[Function: data]'); // Vue assigns prop name as function name
  });

  it('inspects a simple object', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: { name: 'John', age: 30 }
      }
    });
    expect(wrapper.text()).toContain('name: "John"');
    expect(wrapper.text()).toContain('age: 30');
  });

  it('inspects an empty object', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: {}
      }
    });
    expect(wrapper.text()).toBe('{}');
  });

  it('inspects an array', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: [1, 2, 'three']
      }
    });
    expect(wrapper.text()).toBe('Array(3) [1, 2, "three"]');
  });

  it('inspects a Date object', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    const wrapper = mount(Inspect, {
      props: {
        data: date
      }
    });
    expect(wrapper.text()).toBe('2023-01-01T00:00:00.000Z');
  });

  it('uses custom tag when provided', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: 'test',
        tag: 'pre'
      }
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('pre');
  });

  it('applies default styling', () => {
    const wrapper = mount(Inspect, {
      props: {
        data: 'test'
      }
    });
    const style = wrapper.element.style;
    expect(style.fontFamily).toBe('monospace');
    expect(style.padding).toBe('8px');
    expect(style.backgroundColor).toBe('rgb(245, 245, 245)');
  });
});