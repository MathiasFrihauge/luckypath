<template>
    <section class="online_games_section">
        <div class="container">
            <div class="row justify-content-lg-between justify-content-center gx-0 gy-md-0 gy-4">
                <div class="col-md-2 col-4">
                    <div class="box fade-up">
                        <img src="/images/casino.png" alt="">
                        <p>ONLINE CASINO</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="box fade-up">
                        <img src="/images/poker.png" alt="">
                        <p>ONLINE POKER</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="box fade-up">
                        <img src="/images/slots.png" alt="">
                        <p>ONLINE SLOTS</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="box fade-up">
                        <img src="/images/blackjack.png" alt="">
                        <p>ONLINE BLACKJACK</p>
                    </div>
                </div>
                <div class="col-md-2 col-4">
                    <div class="box fade-up">
                        <img src="/images/roulette.png" alt="">
                        <p>ONLINE ROULETTE</p>
                    </div>
                </div>
            </div>
            <div class="d-block d-md-none text-center">
                <h1>THE BEST CASINO FOR YOU</h1>
                <p>ALL THE BEST CASINO DEALS COLLECTED ON ONE PAGE. GET BIG WINS AND FREE SPINS HERE CHOOSE YOUR FAVOURITE CASINO BELOW AND CONNECT WITH US ON WHATSAPP, TELEGRAM OR EMAIL TO GET YOUR DEAL.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "OnlineGamingMenu"
}
</script>


<style scoped>
.online_games_section {
    background: linear-gradient(180deg, #BAB6B6 33%, rgba(192, 187, 187, 0) 100%);
    padding: 20px 0;
}
.online_games_section .container {
    width: 890px;
}
.online_games_section .box img {
    height: 100px;
    width: 100px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0px 4px 4px 0px #00000040;
}
.online_games_section .box {
    text-align: center;
}
.online_games_section .box p {
    font-size: 13px;
    font-weight: 200;
    margin-top: 8px;
}
@media (max-width:991px){
.online_games_section .box img {
    height: 70px;
    width: 70px;
}
.online_games_section .box p {
    font-size: 12px;
}
}

@media (max-width:767px){
    .online_games_section .box img {
    height: 64px;
    width: 64px;
}
.online_games_section .box p {
    font-size: 10px;
}
.online_games_section .col-4:nth-last-child(-n + 2) {
    display: none;
}
.online_games_section h1 {
    font-size: 29px;
    margin-top: 13px;
    margin-bottom: 8px;
    color: var(--white);
}
.online_games_section p {
    font-size: 10px;
    margin-bottom: 0;
}
}
</style>