<template>
  <div>
    <Header :menuItems="menuItems" />
    <HeroBanner 
    :desktopImage="bannerData.desktopImage"
    :mobileImage="bannerData.mobileImage"
    :title="bannerData.title"
    :description="bannerData.description"
    :ctaText="bannerData.ctaText"
    :ctaLink="bannerData.ctaLink"
    :bottomSubline="bannerData.bottomSubline"
    />
    <OnlineGamingMenu />
    <GamblingSitesCards
      title="BEST GAMBLING SITES IN AUGUST 2024"
      :cardData="gameCardData"
    />
    <HomeCmsBlock />
    <PaymentOptions />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/global/Header.vue'
import HeroBanner from '~/components/HeroBanner.vue'
import OnlineGamingMenu from '~/components/OnlineGamingMenu.vue'
import GamblingSitesCards from '~/components/GamblingSitesCards.vue'
import HomeCmsBlock from '~/components/HomeCmsBlock.vue'
import PaymentOptions from '~/components/PaymentOptions.vue'
import Footer from '~/components/global/Footer.vue'

export default {
  components: {
    Header,
    HeroBanner,
    OnlineGamingMenu,
    GamblingSitesCards,
    HomeCmsBlock,
    PaymentOptions,
    Footer
  },
  data() {
    return {
      menuItems: [
        { name: 'Home', link: '/', active: true },
        { name: 'About Us', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact Us', link: '/contact' }
      ],
      bannerData: { 
        desktopImage: "/images/hero_banner.jpg",
        mobileImage: "/images/hero-banner-sm.jpg",
        title: "THE BEST CASINO FOR YOU",
        description: "ALL THE BEST CASINO DEALS COLLECTED ON ONE PAGE. GET BIG WINS AND FREE SPINS HERE CHOOSE YOUR FAVOURITE CASINO BELOW AND CONNECT WITH US ON WHATSAPP, TELEGRAM OR EMAIL TO GET YOUR DEAL.",
        ctaText: "JOIN THE CREW",
        ctaLink: "#",
        bottomSubline: "GRAB YOUR LUCKYPATH CARD FOR INSTANT ACCESS TO WEEKLY BONUSES AND UNLIMITED WINNING POTENTIAL"
      },
    gameCardData: [
  {
    title: "INSTASPIN",
    description: "175% Welcome bonus up to 1000 GBP and 100 free spins",
    image: "/images/instaspin.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.7,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 45,
    visitors: 3720,
    whatsappLink: "INSTASPIN",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Instaspin",
    emailLink: "INSTASPIN",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "Fat Pirate",
    description: "100% Welcome bonus up to 425 GBP and 200 free spins",
    image: "/images/fatpirate.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.8,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 78,
    visitors: 4160,
    whatsappLink: "FATPIRATE",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Fat%20Pirate",
    emailLink: "FATPIRATE",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "Slot Monster",
    description: "Get 20 FS on singing up and 100% up to 300 GBP on your first deposit",
    image: "/images/slotmonster.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.3,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 65,
    visitors: 3485,
    whatsappLink: "SLOTMONSTER",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Slot%20Monster",
    emailLink: "SLOTMONSTER",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "BUBBLES BET",
    description: "400% 1st Deposit bonus up to 200 GBP and 100 free spins",
    image: "/images/bubblesbet.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.9,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 32,
    visitors: 4590,
    whatsappLink: "BUBBLESBET",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Bubblesbet",
    emailLink: "BUBBLESBET",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "GRANSINO",
    description: "Welcome bonus up to 850 GBP in 3 bonuses",
    image: "/images/gransino.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.5,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 54,
    visitors: 3890,
    whatsappLink: "GRANSINO",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Gransino",
    emailLink: "GRANSINO",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "I WILD CASINO",
    description: "Welcome bonus pack of 550% up to 4000 GBP and 550 free spins",
    image: "/images/iwildcasino.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.6,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 87,
    visitors: 4135,
    whatsappLink: "IWILDCASINO",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20iWild",
    emailLink: "IWILDCASINO",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "LUCKY PAYS",
    description: "100% Welcome bonus up to 777 GBP and 77 free spins",
    image: "/images/luckypays.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.1,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 22,
    visitors: 3120,
    whatsappLink: "LUCKYPAYS",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Lucky%20Pays",
    emailLink: "LUCKYPAYS",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "LUCKYMAX",
    description: "Welcome bonus pack of 275% up to 4000 GBP and 300 free spins",
    image: "/images/luckymax.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.4,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 76,
    visitors: 4280,
    whatsappLink: "LUCKYMAX",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Lucky%20Max",
    emailLink: "LUCKYMAX",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "CASINO LUCKY CHARMS",
    description: "200% 1st Deposit bonus up to 3000 GBP and 200 free spins",
    image: "/images/luckycharms.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.2,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 29,
    visitors: 3315,
    whatsappLink: "CASINOLUCKYCHARMS",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Lucky%20Charms",
    emailLink: "CASINOLUCKYCHARMS",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "SAVANNA WINS",
    description: "400% Welcome bonus up to 1000 GBP and 125 free spins",
    image: "/images/savanna.jpg",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.8,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 91,
    visitors: 3870,
    whatsappLink: "SAVANNAWINS",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Savanna",
    emailLink: "SAVANNAWINS",
    termsAndConditions: '<a href="https://offers.zetbet.com/en-GB/bigbass-welcomeoffer?AR=14570&PAR=B8EAD1782F441CBE57DA68C44AA679BF"><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
]

    }
  }
}
</script>

<style scoped>
.content-section {
  padding: 50px 0;
  text-align: center;
}
</style>
