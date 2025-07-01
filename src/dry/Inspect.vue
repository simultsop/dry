<script lang="ts">
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'Inspect',
  props: {
    data: {
      type: null,
      default: undefined
    },
    tag: {
      type: String,
      default: 'div',
      validator: (value: string) => ['div', 'pre', 'section', 'details', 'code'].includes(value)
    }
  },
  setup(props) {
    const renderValue = (value: any): any => {
      if (value === null) return 'null'
      if (value === undefined) return 'undefined'
      if (typeof value === 'symbol') return value.toString()
      
      const type = typeof value
      
      if (type === 'function') {
        const name = value.name;
        if (!name || name.startsWith('anonymous')) {
          return '[Function: anonymous]';
        }
        return `[Function: ${name}]`;
      }
      
      if (type === 'object') {
        if (Array.isArray(value)) {
          return `Array(${value.length}) [${value.map((item) => renderValue(item)).join(', ')}]`
        }
        
        if (value instanceof Date) {
          return value.toISOString()
        }
        
        // For objects, render key-value pairs
        const entries = Object.entries(value)
        if (entries.length === 0) return '{}'
        
        return entries.map(([k, v]) => `${k}: ${renderValue(v)}`).join(', ')
      }
      
      if (type === 'string') {
        return `"${value}"`
      }
      
      return String(value)
    }

    return () => {
      // Always render the data if props.data exists, even if undefined
      // Only show "No data to inspect" if the component wasn't passed any data prop
      const content = renderValue(props.data);
        
      return h(props.tag, {
        class: 'inspect-component',
        style: {
          fontFamily: 'monospace',
          padding: '8px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ddd',
          borderRadius: '4px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }
      }, content)
    }
  }
})
</script>