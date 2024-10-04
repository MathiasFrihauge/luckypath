export const Footer = () => import('../../components/global/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/global/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const GamblingSitesCards = () => import('../../components/GamblingSitesCards.vue' /* webpackChunkName: "components/gambling-sites-cards" */).then(c => wrapFunctional(c.default || c))
export const HeroBanner = () => import('../../components/HeroBanner.vue' /* webpackChunkName: "components/hero-banner" */).then(c => wrapFunctional(c.default || c))
export const HomeCmsBlock = () => import('../../components/HomeCmsBlock.vue' /* webpackChunkName: "components/home-cms-block" */).then(c => wrapFunctional(c.default || c))
export const NewsletterForm = () => import('../../components/NewsletterForm.vue' /* webpackChunkName: "components/newsletter-form" */).then(c => wrapFunctional(c.default || c))
export const NewsletterFormsms = () => import('../../components/NewsletterFormsms.vue' /* webpackChunkName: "components/newsletter-formsms" */).then(c => wrapFunctional(c.default || c))
export const OnlineGamingMenu = () => import('../../components/OnlineGamingMenu.vue' /* webpackChunkName: "components/online-gaming-menu" */).then(c => wrapFunctional(c.default || c))
export const PaymentOptions = () => import('../../components/PaymentOptions.vue' /* webpackChunkName: "components/payment-options" */).then(c => wrapFunctional(c.default || c))
export const TwoColumnLayout = () => import('../../components/TwoColumnLayout.vue' /* webpackChunkName: "components/two-column-layout" */).then(c => wrapFunctional(c.default || c))

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
