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
import { messaging, getToken, onMessage, auth, signInAnonymously } from '~/plugins/firebase'

export default {
  components: {
    Header,
    HeroBanner,
    OnlineGamingMenu,
    GamblingSitesCards,
    HomeCmsBlock,
    PaymentOptions,
    Footer,
    // NotificationPermissionRequest
  },
  mounted() {
    if (process.client && 'serviceWorker' in navigator) {
      // Register the service worker
      navigator.serviceWorker
        .register('/sw.js') // Workbox with Firebase integration
        .then((registration) => {
          // console.log('Service Worker registered with scope:', registration.scope)

          // Wait for the service worker to activate
          if (registration.installing) {
            registration.installing.addEventListener('statechange', (event) => {
              if (event.target.state === 'activated') {
                this.requestNotificationPermission()
              }
            })
          } else if (registration.waiting || registration.active) {
            // SW is already active, request permission immediately
            this.requestNotificationPermission()
          }
        })
        .catch((err) => {
          console.error('Service Worker registration failed:', err)
        })

      // Listen for foreground messages
      onMessage(messaging, (payload) => {
        // console.log('Message received in foreground: ', payload)
      })
    }
  },
  methods: {
    async requestNotificationPermission() {
      if (Notification.permission === 'granted') {
        // Permission already granted
        // await this.authenticateAnonymouslyAndRequestFCMToken()
        await this.getFCMToken()
      } else {
        // Request permission from the user
        Notification.requestPermission().then(async (permission) => {
          if (permission === 'granted') {
            // console.log('Notification permission granted.')
            // await this.authenticateAnonymouslyAndRequestFCMToken()
            await this.getFCMToken()
          } else {
            // console.log('Notification permission denied.')
          }
        })
      }
    },
    // async authenticateAnonymouslyAndRequestFCMToken() {
    //   try {
    //     // Sign in anonymously
    //     const userCredential = await signInAnonymously(auth)
    //     // console.log('User signed in anonymously:', userCredential.user.uid)

    //     // After anonymous authentication, request the FCM token
    //     await this.getFCMToken()
    //   } catch (error) {
    //     console.error('Error signing in anonymously:', error)
    //   }
    // },
    async getFCMToken() {
      console.log('getFCMToken INN');
      
      try {
        const vapidKey = process.env.firebaseConfig.vapidKey;
        console.log('vapidKey ==>> ', vapidKey);
        
        const currentToken = await getToken(messaging, { vapidKey })
        console.log('currentToken ==>> ', currentToken);
        
        if (currentToken) {
          console.log('FCM Token:', currentToken)
          // Send the token to your server for notification handling
        } else {
          console.log('No registration token available.')
        }
      } catch (error) {
        console.error('Error retrieving FCM token:', error)
      }
    }
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
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "Legendspin",
    description: "225% Welcome bonus up to 500 GBP and 100 free spins",
    image: "/images/legendlogo.png",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.8,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 78,
    visitors: 4160,
    whatsappLink: "LEGENDSPIN",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20Legendspin",
    emailLink: "LEGENDSPIN",
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
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
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
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
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "LOVE CASINO",
    description: "400% Welcome bonus up to 2000 GBP and 130 free spins",
    image: "/images/lovecasinologo.png",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.5,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 54,
    visitors: 3890,
    whatsappLink: "LOVECASINO",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20love%20casino",
    emailLink: "LOVECASINO",
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
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
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
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
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
  },
  {
    title: "BOF CASINO",
    description: "250% Welcome bonus up to 500 GBP",
    image: "/images/boflogo.png",
    badgeTitle: "LUCKYPATH CHOICE!",
    rating: 4.4,
    receiveBonusText: "HOW DO YOU WANT TO RECEIVE YOUR BONUS?",
    likes: 76,
    visitors: 4280,
    whatsappLink: "BOFCASINO",
    telegramLink: "https://t.me/Fortuneguide_bot?text=Hey%20I%20want%20my%20free%20spins%20from%20BofCasino",
    emailLink: "BOFCASINO",
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
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
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
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
    termsAndConditions: '<a href=""><u>Full terms apply</u></a>| +18 | #ad | New customers only -<a href="https://www.gambleaware.org/"><u>BeGambleawareNew</u></a> UK Players only. 18+A minimum deposit of £10 applies.Mr Gamble always insists that players gamble responsibly'
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
