<template>
    <div>
        <footer>
            <div class="container container-lg">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-12">
                        <a href="#" class="footer_logo"><img src="/images/footer-logo.png" alt=""></a>
                        <vue-country-dropdown
                            class="mb-4"
                            @onSelect="onSelect"
                            :preferredCountries="['TR', 'US', 'GB']"
                            :defaultCountry="'GB'"
                            :immediateCallSelectEvent="true"
                            :enabledFlags="true"
                            :enabledName="true"
                            :enabledPhonecode="false"
                            :showNotSelectedOption="false"
                            :notSelectedOptionText="'Not Selected'"
                            :disabled="false"
                            :clearable="false"
                            :multiple="false"
                            :searchable="true"
                            :closeOnSelect="true"
                            :placeholder="'Select a country'"
                        />
                        <ul class="trademark">
                            <li>1995 - 2023</li>
                            <li>LUCKYPATH</li>
                            <li>Pending Trademark</li>
                        </ul>
                    </div>
                    <div class="col-lg-7 col-md-9">
                        <div class="wrp">
                            <div class="items">
                                <div class="quick_links">
                                    <h3>HELP</h3>
                                    <ul>
                                        <li>
                                            <nuxt-link to="/">Help Center</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Payment & Billing</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Contact Us</nuxt-link>
                                        </li>
                                    </ul>
                                    <img src="/images/footer-right.png" alt="" class="d-block d-md-none">
                                </div>
                            </div>
                            <div class="items order-1">
                                <div class="quick_links sm-fs-lg">
                                    <h3>LEGAL</h3>
                                    <ul>
                                        <li>
                                            <nuxt-link to="/">Terms & Conditions</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Privacy Policy</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Refund Guarantee</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="items d-none d-md-block">
                                <div class="quick_links">
                                    <h3>ABOUT</h3>
                                    <ul>
                                        <li>
                                            <nuxt-link to="/">About Us</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Get Listed</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Sitemap</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="items">
                                <div class="quick_links sm-fs-lg">
                                    <h3>CASINO GUIDES</h3>
                                    <ul>
                                        <li>
                                            <nuxt-link to="/">Real Money Casinos</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Online Slots</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Online Blackjack</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/">Casino Games</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 d-none d-md-block">
                        <img src="/images/footer-right.png" alt="">
                    </div>
                </div>
            </div>
        </footer>
        <div v-if="showAdComponent" class="ad_box" data-aos="fade-up" >
            <button type="button" class="btn-close" @click="hideAd"></button>
            <div class="image">
                <img src="/images/ad-img.jpg" alt="">
            </div>
            <h5>WELCOME BONUS</h5>
            <h4>100% UP TO £1000</h4>
            <a href="#" class="btn">Play Now</a>
            <p><a href="#"><u>Full terms apply</u></a>| +18 | #ad | New customers only </p>
        </div>
        <a href="javascript:void(0)" class="scrollToTop" @click="scrollToTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="49.198" height="78.727" viewBox="0 0 49.198 78.727">
                <path id="arrow-up-long-solid" d="M47.761,28.055a4.918,4.918,0,0,1-6.958,0L29.526,16.784v57a4.92,4.92,0,0,1-9.84,0v-57L8.4,28.055A4.92,4.92,0,1,1,1.446,21.1L21.127,1.416a4.918,4.918,0,0,1,6.958,0L47.766,21.1A4.923,4.923,0,0,1,47.761,28.055Z" transform="translate(-0.005 0.025)" fill="currentColor"></path>
            </svg>
        </a>
    </div>
</template>

<script>
import VueCountryDropdown from 'vue-country-dropdown-2'

export default {
    components: {
        VueCountryDropdown
    },
    data () {
        return {
            showAdComponent: true
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        hideAd() {
            this.showAdComponent = !this.showAdComponent;
        },
        scrollToTop(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        onSelect(country) {
            console.log("Selected Country =>> ", country);
        },
        handleScroll() {
            const height = window.scrollY;

            if (height > 50) {
                document.documentElement.classList.add('sticky');
            } else {
                document.documentElement.classList.remove('sticky');
            }
        }
    }

}
</script>

<style scoped>
footer .container-lg {
    width: 1540px;
}
footer {
    background-color: var(--dark);
    padding-top: 21px;
    padding-bottom: 38px;
    color: var(--white);
}
footer .footer_logo {
    margin-bottom: 26px;
    display: block;
    max-width: 367px;
}
footer ul.trademark {
    display: flex;
    align-items: center;
    font-size: 10px;
    font-weight: 400;
}
footer ul.trademark li {
    border-right: 1px solid var(--white);
    padding-right: 8px;
    margin-right: 8px;
    line-height: 14px;
}
footer ul.trademark li:last-child{
    padding-right: 0;
    margin-right: 0;
    border: 0;
}
footer .wrp {
    display: flex;
}
footer .wrp .quick_links h3 {
    font-family: var(--menufont);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-bottom: 22px;
}
footer .wrp .quick_links ul li {
    margin-bottom: 15px;
    display: block;
}
footer .wrp .quick_links ul li:last-child{
    margin-bottom: 0;
}
footer .wrp .quick_links ul a {
    font-size: 12px;
    font-weight: 400;
    color: var(--white);
    display: block;
    line-height: normal;
    letter-spacing: 0;
}
footer .wrp .items {
    padding: 40px 0;
    padding-left: 40px;
    border-left: 2px solid #D9D9D9;
    margin-left: 40px;
    position: relative;
}
footer .row .col-md-4 {
    width: 375px;
}
footer .wrp .items:first-child {
    margin-left: 65px;
}
footer .wrp .quick_links ul a:hover {
    color: var(--secondary);
}
footer .col-md-2 img {
    margin-left: auto;
    max-width: 200px;
    display: block;
}
footer{
    border-top: 45px solid var(--primary);
}
.ad_box {
    background-image: url(/images/ad-bg-img.jpg);
    background-repeat: no-repeat;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px #00000066;
    background-size: cover;
    width: 300px;
    padding: 5px 5px 7px;
    text-align: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
}
.ad_box .image {
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 10px;
}
.ad_box h5 {
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 3px;
}
.ad_box h4 {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 12px;
}
.ad_box .btn {
    font-size: 20px;
    font-weight: 800;
    padding: 0 59px;
    line-height: 56px;
    color: var(--white);
    box-shadow: 0px 4px 4px 0px #00000040;
    text-transform: uppercase;
    margin-bottom: 5px;
}
.ad_box p {
    font-size: 10px;
    font-weight: 200;
}
.ad_box .btn-close {
    padding: 0;
    position: absolute;
    filter: brightness(0) invert(1);
    right: 0;
    margin: 15px;
    height: 14px;
    width: 14px;
    top: 0;
    transition: all 0.4s;
    box-shadow: none;
}
.ad_box.hide {
    display: none;
}
.ad_box p a {
    color: var(--dark);
}
.ad_box p a:hover {
    color: var(--primary);
}


@media (max-width:991px){
footer {
    border-top: 24px solid var(--primary);
}
footer .footer_logo {
    max-width: 170px;
    margin: 0 auto 15px;
}
footer ul.trademark {
    justify-content: center;
    margin-bottom: 15px;
}
footer .wrp .items:first-child {
    margin-left: 0;
    border: 0;
    padding-left: 0;
}
footer .wrp .items {
    padding: 10px 0;
    padding-left: 20px;
    margin-left: 20px;
}
footer .wrp .quick_links h3 {
    font-size: 13px;
    margin-bottom: 16px;
}
footer .wrp .quick_links ul li {
    margin-bottom: 12px;
}
footer {
    padding-top: 25px;
    padding-bottom: 10px;
}
.ad_box h5 {
    font-size: 13px;
}
.ad_box h4 {
    font-size: 16px;
    margin-bottom: 6px;
}
.ad_box .btn {
    font-size: 15px;
    padding: 0 34px;
    line-height: 40px;
}
.ad_box p {
    font-size: 9px;
}
.ad_box {
    width: 260px;
    border-radius: 16px;
}
.ad_box .image {
    border-radius: 14px;
    margin-bottom: 8px;
}
.ad_box .btn-close {
    margin: 13px;
    height: 12px;
    width: 12px;
}
}

@media (max-width:767px){
footer {
    border-top: 24px solid var(--primary);
    padding-top: 16px;
    padding-bottom: 46px;
}
footer .footer_logo {
    max-width: 367px;
    margin: 0 0 26px;
}
footer ul.trademark {
    margin-bottom: 12px;
    justify-content: start;
    letter-spacing: 0.05em;
}
footer .wrp {
    flex-wrap: wrap;
}
footer .wrp .items:first-child {
    margin-left: 0;
    border: 0;
    padding-left: 0;
    width: 100%;
    border-bottom: 2px solid #D9D9D9;
    margin-bottom: 10px;
    padding-bottom: 15px;
}
footer .wrp .quick_links h3 {
    font-size: 14px;
    margin-bottom: 10px;
}
footer .wrp .quick_links ul li {
    margin-bottom: 9px;
}
footer .wrp .items {
    padding: 0;
    padding-left: 0;
    margin-left: 0;
    border: 0;
    width: 50%;
}
footer .wrp .items .sm-fs-lg h3 {
    margin-bottom: 22px;
}
footer .wrp .items .sm-fs-lg.quick_links ul li {
    margin-bottom: 15px;
}
footer .wrp .quick_links > img {
    max-width: 100px;
    position: absolute;
    top: -18px;
    right: 2px;
}
.ad_box {
    width: 190px;
    bottom: 15px;
    right: 15px;
    border-radius: 12px;
}
.ad_box h5 {
    font-size: 11px;
}
.ad_box h4 {
    font-size: 14px;
    margin-bottom: 4px;
}
.ad_box .btn {
    font-size: 12px;
    padding: 0 22px;
    line-height: 32px;
    border-radius: 7px;
}
.ad_box p {
    font-size: 8px;
}
.ad_box .image {
    border-radius: 10px;
    margin-bottom: 6px;
}

}
</style>