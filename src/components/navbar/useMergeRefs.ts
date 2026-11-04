import type { Ref, RefCallback } from 'react'

// Lets a component use its own ref and still forward the one given by the caller
export const useMergeRefs = <T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> => {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        (ref as { current: T | null }).current = node
      }
    })
  }
}
