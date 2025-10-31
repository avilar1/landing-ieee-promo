import type { DirectiveBinding } from 'vue'

interface ObserveOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

interface ObserveElement extends HTMLElement {
  _observer?: IntersectionObserver
}

export default {
  mounted(el: ObserveElement, binding: DirectiveBinding<ObserveOptions>) {
    // Adiciona classe CSS automaticamente
    el.classList.add('fade-in-scroll')
    
    const options: IntersectionObserverInit = {
      threshold: binding.value?.threshold || 0.15,
      rootMargin: binding.value?.rootMargin || '0px'
    }

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            // Observa apenas uma vez por padrão
            if (binding.value?.once !== false) {
              observer.unobserve(entry.target)
            }
          } else if (binding.value?.once === false) {
            // Remove a classe se configurado para observar continuamente
            el.classList.remove('visible')
          }
        })
      },
      options
    )

    observer.observe(el)
    
    // Armazena o observer no elemento para cleanup
    el._observer = observer
  },

  beforeUnmount(el: ObserveElement) {
    if (el._observer) {
      el._observer.unobserve(el)
      el._observer.disconnect()
      delete el._observer
    }
  }
}