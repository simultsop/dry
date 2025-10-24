import type { DefineComponent } from 'vue'

export const Dev: DefineComponent<{
  tag?: string
  mode?: 'development' | 'production'
}>

export const Prod: DefineComponent<{
  tag?: string
  mode?: 'development' | 'production'
}>

export const Kiss: DefineComponent<{}>

export const Inspect: DefineComponent<{
  data?: any
  tag?: string
}>

export {}
