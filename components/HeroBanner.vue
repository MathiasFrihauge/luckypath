<template>
    <div>
      <section class="hero_banner d-none d-md-block" :style="`background-image: url(${desktopImage});`">
        <div class="container container-lg">
            <div class="row">
                <div class="col-lg-7 col-md-8 text-center text-md-start">
                  <h1 class="fade-up" >{{ title }} </h1>
                  <p class="fade-up" > {{ description }}</p>
                    <div class="text-center fade-up">
                        <nuxt-link :to="ctaLink" class="btn" >{{ ctaText }}</nuxt-link>
                    
                    </div>
                </div>
            </div>
        </div>
        <img :src="mobileImage ? mobileImage : desktopImage" alt="" class="d-md-none d-block">
    </section>
    <div class="bonus_winning">
        <div class="container">
          <p>{{ bottomSubline }}</p>
        </div>
    </div>

      <!-- <section class="hero_banner" :style="desktopImage">
        <div class="container container-lg">
          <div class="row">
            <div class="col-md-7">
              <h1 data-aos="fade-up" >{{ title }} </h1>
              <p data-aos="fade-up" > {{ description }}</p>
              <div class="text-center">
                <a :href="ctaLink" class="btn" data-aos="fade-up" >{{ ctaText }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <div class="bonus_winning">
        <div class="container">
          <p>{{ bottomSubline }}</p>
        </div>
      </div>
  
       -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroBanner',


    methods:{
        subscribeUser() {
            console.log("asdasdas");
      // Ensure PushflowSDK is loaded and initialized before calling askSubscription
     
    }
    },
    props: {
        desktopImage: {
            type: String,
            required: true,
            default: () => ''
        },
        mobileImage: {
            type: String,
            required: true,
            default: () => ''
        },
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
        ctaText: {
            type: String,
            required: true,
            default: () => ''
        },
        ctaLink: {
            type: String,
            required: true,
            default: () => ''
        },
        bottomSubline: {
            type: String,
            required: true,
            default: () => ''
        },
    }
  }
  </script>
  
  <style scoped>
  .hero_banner {
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 36px;
    padding-bottom: 51px;
}
.hero_banner h1 {
    color: var(--white);
    font-size: 64px;
    margin-bottom: 25px;
}
.hero_banner p {
    color: var(--white);
    margin-bottom: 38px;
    font-weight: 200;
    width: 700px;
    max-width: 100%;
}
.hero_banner .btn {
    font-size: 20px;
    font-weight: 800;
    color: var(--white);
    padding: 0 35px;
    line-height: 39px;
}
.bonus_winning {
    background-color: var(--primary);
    padding: 8px 0;
}
.bonus_winning p {
    margin-bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: var(--menufont);
    font-weight: 400;
    color: var(--white);
}

@media (max-width:991px){
.hero_banner h1 {
    font-size: 34px;
    margin-bottom: 12px;
}
.hero_banner p {
    margin-bottom: 20px;
    font-size: 13px;
}
.hero_banner .btn {
    font-size: 15px;
    padding: 0 30px;
    line-height: 35px;
}
.hero_banner {
    padding-top: 35px;
    padding-bottom: 35px;
    background-position: center;
    background-size: cover;
    z-index: 2;
}
.bonus_winning p {
    font-size: 13px;
}
}

@media (max-width:767px){
.hero_banner h1 {
    font-size: 28px;
    margin-bottom: 10px;
}
.hero_banner .btn {
    font-size: 14px;
    padding: 0 24px;
    line-height: 35px;
    border-radius: 8px;
}
.bonus_winning p {
    font-size: 9px;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 700;
}
.hero_banner {
    background: var(--dark);
    padding-bottom: 0;
}
}
  </style>