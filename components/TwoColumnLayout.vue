<template>
    <section class="howto_play_section pt-0">
        <div class="container container-lg">
            <div class="row align-items-lg-center align-items-start">
                <template v-if="layout === 'left-content-right-image'">
                    <div class="col-md-6 pe-4" data-aos="fade-right">
                        <h3>{{ title }}</h3>
                        <div v-html="description" />

                    </div>
                    <div class="col-md-6 ps-4" data-aos="fade-left">
                        <img src="images/casino-listing.jpg" alt="">
                    </div>
                </template>
                
                <template v-if="layout === 'left-image-right-content'">
                    <div class="col-md-6 ps-4 order-1 order-md-0" data-aos="fade-right">
                        <img src="images/stay-updated.jpg" alt="">
                    </div>
                    <div class="col-md-6 pe-4" data-aos="fade-left">
                        <h3>{{ title }}</h3>
                        <div v-html="description" />
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TwoColumnLayout",
    props: {
        title: {
            type: String,
            required: true,
            default: () => ''
        },
        description: {
            type: String,
            required: true,
            default: () => ''
        },
        image: {
            type: String,
            required: true,
            default: () => ''
        },
        layout: {
            type: String,
            required: true,
            default: () => 'left-image-right-content'
        }
    }
}
</script>


<style>
.howto_play_section .container-lg {
    width: 1630px;
}
.howto_play_section img {
    border-radius: 13px;
}
.howto_play_section .col-md-6.pe-4 {
    padding-right: 18px !important;
}
.howto_play_section .col-md-6.ps-4 {
    padding-left: 18px !important;
}
.howto_play_section .row:nth-child(3n + 2) .col-md-6.pe-4 {
    padding-left: 50px !important;
}
.howto_play_section .row:nth-child(3n + 2) .col-md-6.ps-4 {
    padding-right: 50px !important;
}
.howto_play_section h3 {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 19px;
}
.howto_play_section p {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 33px;
}
.howto_play_section p:last-child {
    margin-bottom: 0px;
}
.howto_play_section ul {
    list-style: disc;
    padding-left: 26px;
}
.howto_play_section ul li {
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 200;
}
.howto_play_section ul li:last-child{
    margin-bottom: 0;
}
.howto_play_section .row {
    margin-bottom: 80px;
}
.howto_play_section .row:last-child {
    margin-bottom: 0px;
}
section.howto_play_section {
    padding-bottom: 50px;
}
@media (max-width:991px){
.howto_play_section .col-md-6.ps-4 {
    padding-left: 20px !important;
}
.howto_play_section .col-md-6.pe-4 {
    padding-right: 10px !important;
}
.howto_play_section h3 {
    font-size: 20px;
    margin-bottom: 8px;
}
.howto_play_section p {
    font-size: 14px;
    margin-bottom: 12px;
}
.howto_play_section .col-md-6.ps-4 {
    padding-left: 0;
}
.howto_play_section .row {
    margin-bottom: 35px;
}
.howto_play_section ul li {
    margin-bottom: 8px;
    font-size: 15px;
}
.howto_play_section ul {
    padding-left: 20px;
}
.howto_play_section .row:nth-child(3n + 2) .col-md-6.ps-4 {
    padding-right: 16px !important;
}
.howto_play_section .row:nth-child(3n + 2) .col-md-6.pe-4 {
    padding-left: 16px !important;
}
.howto_play_section ul li {
    margin-bottom: 6px;
    font-size: 14px;
}
}

@media (max-width:767px){
.howto_play_section h3 {
    font-size: 18px;
    margin-bottom: 9px;
}
.howto_play_section p {
    font-size: 12px;
    margin-bottom: 12px;
}
.howto_play_section img {
    border-radius: 13px;
    margin-top: 20px;
}
section.howto_play_section {
    padding: 25px 0 10px;
}
.howto_play_section .col-md-6.ps-4 {
    padding-left: 12px !important;
}
.howto_play_section .row {
    margin-bottom: 22px;
}
.howto_play_section ul li {
    text-align: left;
}
}
</style>
