export { default as Footer } from '../../components/global/Footer.vue'
export { default as Header } from '../../components/global/Header.vue'
export { default as GamblingSitesCards } from '../../components/GamblingSitesCards.vue'
export { default as HeroBanner } from '../../components/HeroBanner.vue'
export { default as HomeCmsBlock } from '../../components/HomeCmsBlock.vue'
export { default as NewsletterForm } from '../../components/NewsletterForm.vue'
export { default as NewsletterFormsms } from '../../components/NewsletterFormsms.vue'
export { default as OnlineGamingMenu } from '../../components/OnlineGamingMenu.vue'
export { default as PaymentOptions } from '../../components/PaymentOptions.vue'
export { default as TwoColumnLayout } from '../../components/TwoColumnLayout.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
