<template>
  <div>
    <TwoColumnLayout
        :title="block1.title"
        :description="block1.description"
        :image="block1.imagePath"
        layout="left-image-right-content"
    />
    <TwoColumnLayout
        :title="block2.title"
        :description="block2.description"
        :image="block2.imagePath"
        layout="left-content-right-image"
    />
    <TwoColumnLayout
        :title="block3.title"
        :description="block3.description"
        :image="block3.imagePath"
        layout="left-image-right-content"
    />
    <TwoColumnLayout
        :title="block4.title"
        :description="block4.description"
        :image="block4.imagePath"
        layout="left-content-right-image"
    />
  </div>
</template>

<script>
import TwoColumnLayout from './TwoColumnLayout.vue'
export default {
  components: { TwoColumnLayout },
    name: "HomeCmsBlock",
    data () {
        return {
            block1: {
                title:"PLAYER SAFETY IS OUR PRIORITY",
                description:"<p>At Luckypath.com, we prioritize player safety by maintaining high standards. UK players can confidently use our platform, knowing our listed casinos are thoroughly vetted. Our recommendations are tailored based on your location at Bouchot Casino, with easy access to detailed listings.</p><p>We believe claiming bonuses should be simple. That’s why we display all bonuses with clear wagering requirements, limits, and terms, ensuring players know exactly what they’re getting, without surprises.</p>",
                imagePath:"/images/player-safety.jpg"
              },
              block2: {
                title:"ETHICAL CASINO LISTINGS",
                description:"<p>The team at Luckypath.com has developed a refined process to ensure our casino evaluations are top-notch. We personally test each casino to verify promotions, banking options, and withdrawal times. Our technology further enhances this by keeping our listings accurate and up-to-date.</p><p>We’ve dedicated extensive time to perfecting our process, making it easy for UK gamblers to access only the best casinos. With countless options available, Luckypath.com simplifies the choice, ensuring a secure and straightforward selection.</p>",
                imagePath:"/images/casino-listing.jpg"
            },
              block3: {
                title:"STAY UPDATED",
                description:"<p>Luckypath.com is constantly on the lookout for new casinos. Our commitment to finding the best ensures our lists are frequently updated. We refresh our website daily, keeping filters, reviews, and bonuses current so you’re always in the know.</p><p>With Luckypath.com, you’ll be among the first to:</p><ul><li>Discover the latest casinos.</li><li>Access exclusive bonuses.</li><li>Experience top-tier security at Bouchot Casino.</li></ul>",
                imagePath:"/images/stay-updated.jpg"
            },
              block4: {
                title:"THE INDUSTRY’S FAVOURITE COMMUNITY",
                description:"<p>Luckypath.com connects industry professionals who share insights. By joining our platform, you gain access to the thoughts of executives, managers, creators, and policymakers. We offer a network united by a passion for iGaming. If you’re an expert, we’d love to feature your insights.</p><p>Gamblers can also read real player-submitted reviews of online casinos. Users share their experiences and earn Luckypath.com coins, redeemable for rewards. Visit any casino listing, check the ratings and reviews, and engage with our community.</p>",
                imagePath:"/images/favourite-community.jpg"
            },
        }
    }
}
</script>

<style>

</style>