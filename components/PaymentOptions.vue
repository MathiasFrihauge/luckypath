<template>
    <section class="payment_option_section pt-0">
        <div class="container text-md-center">
            <h3>BEST ONLINE GAMBLING PAYMENT OPTIONS</h3>
            <p>THE BEST GAMBLING SITES PROVIDE A RANGE OF TRUSTED PAYMENT OPTIONS. BUT WHAT ARE THE BENEFITS AND DRAWBACKS OF THESE? WE DISCUSS WHAT BANKING METHODS THERE ARE AND WHICH ONES WE RECOMMEND FOR ONLINE GAMBLING. CHECK OUT OUR COMPREHENSIVE PAYMENTS LISTING HERE AND FIND A METHOD YOU ARE COMFORTABLE PLAYING WITH.</p>
            <div class="row align-items-center justify-content-center gx-4 gx-md-5 fade-up">
                <div class="col-lg-auto col-md col">
                    <img src="/images/Google_Pay.png" alt="">
                </div>
                <div class="col-lg-auto col-md col">
                    <img src="/images/paypal.png" alt="">
                </div>
                <div class="col-lg-auto col-md col">
                    <img src="/images/visa.png" alt="">
                </div>
                <div class="col-lg-auto col-md col">
                    <img src="/images/mastercard.png" alt="">
                </div>
                <div class="col-lg-auto col-md col">
                    <img src="/images/applepay.png" alt="">
                </div>
                <div class="col-lg-auto col-md col">
                    <img src="/images/american-express.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PaymentOptions",
}
</script>


<style scoped>
.payment_option_section h3 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 18px;
}
.payment_option_section p {
    font-size: 15px;
    font-weight: 200;
    margin-bottom: 45px;
}
.payment_option_section img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
section.payment_option_section {
    padding-bottom: 32px;
}

@media (max-width:991px){
.payment_option_section h3 {
    font-size: 24px;
    margin-bottom: 12px;
}
.payment_option_section p {
    font-size: 14px;
    margin-bottom: 25px;
}
}

@media (max-width:767px){
    .payment_option_section h3 {
    font-size: 18px;
    margin-bottom: 9px;
}
.payment_option_section p {
    font-size: 12px;
    margin-bottom: 16px;
}
}
</style>