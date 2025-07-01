<script lang="ts">
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'Kiss',
  setup(_, { slots }) {
    return () => {
      return h('template', {}, slots.kiss ? slots.kiss() : 'Keep It Stupid Simple — Principle')
    }
  }
})
</script>