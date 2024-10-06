<template>
  <header>
        <div class="header-top">
            <!--<div class="nav-toggle" @click="toggleMenu">
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 15H41.5M2.5 2H41.5M2.5 28H41.5" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            -->
            <div class="header-logo">
                <nuxt-link to="/"><img src="/images/logo.png" alt="Logo"></nuxt-link>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
              <div class="row align-items-center justify-content-md-center justify-content-end">
                    <div class="col-auto">
                     <div class="header-menu">
                              <div class="nav-toggle d-lg-none d-md-block"  @click="toggleMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                           
                            <ul>
                                  <li
                                  v-for="(item, index) in menuItems"
                                  :key="index"
                                  :class="{ active: item.active }"
                                >
                                  <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
                                </li>
                              </ul> 
                        </div>
                    </div>
                    <!-- <div class="col-auto d-none">
                        <div class="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="overlay" v-if="menuVisible" @click="toggleMenu"></div>
    </header>    
</template>
  
  <script>
  import VueCountryDropdown from 'vue-country-dropdown-2'

  export default {
    components: {
        VueCountryDropdown
    },
    props: {
      menuItems: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    data() {
      return {
        menuVisible: false
      };
    },
    methods: {
      toggleMenu() {
        document.documentElement.classList.toggle('menu-show');
        this.menuVisible = !this.menuVisible;
      }
    }
  };
  </script>
  
  <style scoped>

  .nav-toggle {
    cursor: pointer;
  }
  
  .overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 98;
  }
  </style>
  