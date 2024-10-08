<template>
    <div class="gambling_sites_section mb-5">
        <div class="container">
            <p class="head">{{ title }}</p>
            <template v-if="cardData && cardData.length">
                
                <div 
                    v-for="(item, index) in cardData"
                    :key="index"
                    class="item"
                >
                    <div class="luckypath_choice">{{ item.badgeTitle }}</div>
                    <div class="row">
                        <div class="col-md-3">
                            <h2>{{ item.title }}</h2>
                            <img :src="item.image" alt="">
                            <template v-if="item.rating">
                                <div class="rating">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.69571 0.571289L10.7443 6.87611H17.3736L12.0104 10.7727L14.0589 17.0775L8.69571 13.1809L3.33251 17.0775L5.38107 10.7727L0.0178699 6.87611H6.64715L8.69571 0.571289Z" fill="#FFD710"/>
                                    </svg>
                                    <p>{{ item.rating }}/5</p>
                                </div>
                            </template>
                        </div>
                        <div class="col-md-5 col-7 align-items-center d-flex">
                            <p>{{ item.description }}</p>
                        </div>
                        <div class="col-md-4 col-5">
                            <div class="bonus">
                                <p>{{ item.receiveBonusText}}</p>
                                <small>CLAIM BELOW
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 9.33333V17.6667H2.66667V9.33333M9.33333 17.6667V5.16667M9.33333 5.16667H5.58333C5.0308 5.16667 4.5009 4.94717 4.11019 4.55647C3.71949 4.16577 3.5 3.63587 3.5 3.08333C3.5 2.5308 3.71949 2.0009 4.11019 1.61019C4.5009 1.21949 5.0308 1 5.58333 1C8.5 1 9.33333 5.16667 9.33333 5.16667ZM9.33333 5.16667H13.0833C13.6359 5.16667 14.1658 4.94717 14.5565 4.55647C14.9472 4.16577 15.1667 3.63587 15.1667 3.08333C15.1667 2.5308 14.9472 2.0009 14.5565 1.61019C14.1658 1.21949 13.6359 1 13.0833 1C10.1667 1 9.33333 5.16667 9.33333 5.16667ZM1 5.16667H17.6667V9.33333H1V5.16667Z" stroke="#B3B3B3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </small>
                                <ul>
                                    <template v-if="item.whatsappLink">
                                        <li>
                                            <a href="#" @click.prevent="openModalSms(item.whatsappLink)" @touchstart.prevent="openModal(item.whatsappLink)">
                                                <img src="/images/whatsapp.png" alt="">
                                            </a>
                                        </li>
                                    </template>
                                    <template v-if="item.telegramLink">
                                        <li>
                                            <a :href="item.telegramLink" target="_blank"><img src="/images/telegram.png" alt=""></a>
                                        </li>
                                    </template>
                                    <template v-if="item.emailLink">
                                        <li>
                                            <a href="#" @click.prevent="openModal(item.emailLink)" ><img src="/images/message.png" alt=""></a>
                                        </li>
                                    </template>
                                </ul>
                                <p class="visiters">LIKES:{{ item.likes }}<img src="/images/like.png" alt="">VISITORS TODAY:{{ item.visitors}}<img src="/images/eye.png" alt=""></p>
                            </div>
                        </div>
                    </div>
                    <!-- <p>
                        <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 6.66667L0 0H13.3333L6.66667 6.66667Z" fill="#D9D9D9"/>
                        </svg>                    
                    </p> -->
                    <p>
                        <span v-html="item.termsAndConditions"></span>
                        <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 6.66667L0 0H13.3333L6.66667 6.66667Z" fill="#D9D9D9"/>
                        </svg>                    
                    </p>
                </div>

            </template>
            <template v-else>
                <p>No Records Found!</p>
            </template>
        </div>

        <!-- Modal structure -->
        <div v-if="showModal" class="modal show" data-aos="fade-down" style="display: block;" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                <div class="modal-body">
                    <NewsletterForm :listtype="casinoClicked"/>
                </div>
            </div>
        </div>
        </div>

        <div v-if="showModalSms" class="modal show" data-aos="fade-down" style="display: block;" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <button type="button" class="btn-close" @click="closeModalSms" aria-label="Close"></button>
                <div class="modal-body">
                    <NewsletterFormsms :casinoname="casinoClicked"/>
                </div>
            </div>
        </div>
        </div>

        <!-- Overlay for the modal backdrop -->
        <div v-if="showModal" @click="closeModal" class="modal-backdrop fade show"></div>
        <div v-if="showModalSms" @click="closeModalSms" class="modal-backdrop fade show"></div>
        
    </div>
</template>

<script>
import NewsletterForm from '~/components/NewsletterForm.vue';
import NewsletterFormsms from './NewsletterFormsms.vue';

export default {
    name: 'GamblingSitesCards',
    components: {
        NewsletterForm
    },
    data () {
        return {
            showModal: false,
            showModalSms: false,
            casinoClicked: ""
        }
    },
    props: {
        title: {
            type: String,
            required: true,
            default: () => ''
        },
        cardData: {
            type: Array,
            required: true,
            default: () => []
        },
    },
    methods: {
        openModal(casino) {
            this.casinoClicked = casino;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        } ,
        
        openModalSms(casino) {
            this.casinoClicked = casino;
            this.showModalSms = true;
        },
        closeModalSms() {
            this.showModalSms = false;
        }  
    }
}
</script>


<style scoped>
.modal-body {
    padding: 35px;
}
button.btn-close {
    position: absolute;
    right: -15px;
    top: -15px;
    background-color: #b7b7b7;
    padding: 8px;
    border-radius: 50%;
    opacity: 1;
    z-index: 1;
}
.gambling_sites_section .head {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 56px;
    text-align: center;
}
.gambling_sites_section .container {
    width: 1094px;
}
.gambling_sites_section .item {
    background: #D9D9D926;
    border: 3px solid #D9D9D9;
    border-radius: 20px;
    padding: 15px;
    position: relative;
    margin-bottom: 44px;
}
.gambling_sites_section .item:last-child {
    margin-bottom: 0;
}
.gambling_sites_section .item .luckypath_choice {
    display: inline-block;
    background-color: var(--secondary);
    font-size: 16px;
    font-weight: 800;
    color: var(--white);
    line-height: 39px;
    padding: 0 25px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    margin: -31px 0 0px 15px;
}
.gambling_sites_section .item h2 {
    font-size: 32px;
    margin-bottom: 0;
    margin-right: -180%;
    word-break: break-all;
    position: relative;
    z-index: 1;
}
.gambling_sites_section .item img {
    border-radius: 13px;
}
.gambling_sites_section .item h2 ~ img {
    border-radius: 13px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 7px;
    max-width: 195px;
}
.gambling_sites_section .item .rating {
    border-radius: 4px;
    background-color: var(--dark);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px 3px 3px;
    color: var(--white);
    font-size: 13px;
    font-weight: 800;
}
.gambling_sites_section .col-md-5 > p {
    font-size: 24px;
    text-align: center;
    font-weight: 500;
}
.gambling_sites_section .bonus p {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 2px;
    white-space: nowrap;
    text-align: center;
}
.gambling_sites_section .bonus small {
    font-size: 12px;
    color: #B4B4B4;
    font-weight: 700;
    text-align: center;
    display: block;
}
.gambling_sites_section .bonus small svg {
    filter: drop-shadow(0px 4px 4px #00000040);
}
.gambling_sites_section .bonus ul li a{
    height: 88px;
    width: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #71E06B;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px #00000040;
}
.gambling_sites_section .bonus ul li:nth-child(2) a{
    background-color: #3986C4;
}
.gambling_sites_section .bonus ul li:nth-child(3) a{
    background-color: #F76D1F;
}
.gambling_sites_section .bonus ul li img {
    border-radius: 0;
    transition: all 0.4s;
}
.gambling_sites_section .bonus ul li a:hover img {
    transform: scale(0.92);
}
.gambling_sites_section .bonus ul {
    display: flex;
    align-items: center;
    gap: 13px;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 8px;
}
.gambling_sites_section .bonus .visiters {
    font-size: 11px;
}
.gambling_sites_section .bonus .visiters img {
    margin: 0 6px;
}
.gambling_sites_section .item > p {
    font-size: 10px;
    font-weight: 200;
    border-top: 3px solid #D9D9D9;
    padding-top: 5px;
    margin-top: 8px;
    letter-spacing: 0.094em;
}
.gambling_sites_section .item > p svg {
    margin-left: 6px;
}
.gambling_sites_section .item > p a {
    color: inherit;
    font-weight: inherit;
    font-family: inherit;
}
.gambling_sites_section .item > p a u {
    text-decoration-color: #d9d9d9;
}
.gambling_sites_section .item > p a:hover {
    color: var(--secondary);
}

@media (max-width:991px){
.gambling_sites_section .head {
    font-size: 24px;
    margin-bottom: 45px;
}
.gambling_sites_section .item .luckypath_choice {
    font-size: 13px;
    line-height: 34px;
    padding: 0 18px;
    border-radius: 8px;
    margin: -26px 0 0px 15px;
}
.gambling_sites_section .item h2 {
    font-size: 22px;
    margin-right: -200%;
}
.gambling_sites_section .item h2 ~ img {
    border-radius: 8px;
    margin-bottom:10px;
    max-width: 140px;
}
.gambling_sites_section .item .rating {
    font-size: 12px;
}
.gambling_sites_section .col-md-5 > p {
    font-size: 16px;
}
.gambling_sites_section .bonus ul li a {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    padding: 10px;
}
.gambling_sites_section .bonus p {
    font-size: 10px;
    white-space: pre-wrap;
}
.gambling_sites_section .bonus small {
    font-size: 10px;
}
.gambling_sites_section .bonus .visiters {
    font-size: 9px;
}
.gambling_sites_section .item {
    border-radius: 14px;
    padding: 14px;
    margin-bottom: 40px;
}
}

@media (max-width:767px){
    .modal-body {
        padding: 15px;
    }
  button.btn-close {
    right: -10px;
    top: -10px;
  }
.gambling_sites_section .head {
    display: none;
}
section {
    padding-top: 26px;
    padding-bottom: 26px;
}
.gambling_sites_section .item {
    border-radius: 20px;
    padding: 8px 16px;
}
.gambling_sites_section .item > p {
    font-size: 5px;
    font-weight: 200;
    border-top: 3px solid #D9D9D9;
    letter-spacing: 0.094em;
    margin: 14px -18px 0;
    padding: 5px 41% 0 14px;
}
.gambling_sites_section .item > p svg {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 11px;
}
.gambling_sites_section .item h2 ~ img {
    width: 143px;
    display: block;
    margin: -38px 3px 8px;
    border-radius: 13px;
    height: 50px;
    box-shadow: none;
}
.gambling_sites_section .item .rating svg {
    width: 14px;
}
.gambling_sites_section .item .rating {
    gap: 4px;
    padding: 2px 6px;
    color: var(--white);
}
.gambling_sites_section .col-md-5 > p {
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 0;
    text-align: left;
}
.gambling_sites_section .item .col-7 {
    border-right: 1px solid rgba(217, 217, 217, 0.7);
    width: 56%;
    margin-right: 8px;
}
.gambling_sites_section .item .col-5 {
    width: 41%;
}
.gambling_sites_section .item .col-6:last-child {
    border-right: 0;
}
.gambling_sites_section .bonus ul li a {
    height: 46px;
    width: 46px;
    border-radius: 20px;
    padding: 10px;
}
.gambling_sites_section .bonus ul {
    margin-bottom: 0;
    margin-top: 19px;
    gap: 8px;
}
.gambling_sites_section .bonus p {
    margin-bottom: 6px;
}
.gambling_sites_section .bonus small svg {
    width: 16px;
}
.gambling_sites_section .bonus small svg,
.gambling_sites_section .bonus p:first-child,
.gambling_sites_section .item .rating,
.gambling_sites_section .item h2,
.gambling_sites_section .item .luckypath_choice {
    display: none;
}
.gambling_sites_section .bonus small {
    font-size: 14px;
}
.gambling_sites_section .container {
    padding: 0 11px;
}
.gambling_sites_section .bonus .visiters {
    font-size: 8px;
    position: absolute;
    top: -8px;
    right: 22px;
    background-color: #FFF;
    padding: 0 5px;
}
.gambling_sites_section .bonus .visiters img:last-child{
    display: none;
}
}
@media (max-width:400px){
.gambling_sites_section .col-md-5 > p {
    font-size: 13px;
}
.gambling_sites_section .bonus ul li a {
    height: 38px;
    width: 38px;
    border-radius: 14px;
    padding: 11px;
}
.gambling_sites_section .bonus small {
    font-size: 13px;
}
.gambling_sites_section .item h2 ~ img {
    width: 110px;
    display: block;
    margin: -31px 3px 8px;
    height: 42px;
    box-shadow: none;
}
.gambling_sites_section .bonus ul {
    margin-bottom: 0;
    margin-top: 12px;
    gap: 6px;
}
}
</style>

<style>
.gambling_sites_section .col-md-5 > p {
    font-size: 24px;
    text-align: center;
    font-weight: 500;
}
.gambling_sites_section .bonus p {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 2px;
    white-space: nowrap;
    text-align: center;
}
</style>