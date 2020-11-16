<template lang="html">
  <b-navbar id="template-header" class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row" toggleable="md">
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <nuxt-link class="navbar-brand brand-logo" to="/">
        <img src="../../assets/images/logo_dark.svg" alt="logo" />
      </nuxt-link>
      <nuxt-link class="navbar-brand brand-logo-mini" to="/">
        <img src="../../assets/images/logo_dark_mini.svg" alt="logo" />
      </nuxt-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
       
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click="collapedSidebar()">
    
 <i class="material-icons">menu</i>
      </button>
      <b-navbar-nav class="navbar-nav-right ml-auto">
        <form class="mr-auto search-form d-none d-md-block" action="#">
          <div class="form-group">
            <input type="search" class="form-control" placeholder="Search Here">
          </div>
        </form>
      </b-navbar-nav>
      <button class="navbar-toggler navbar-toggler-right align-self-center" type="button" @click="collapedMobileSidebar()">
        <span class="material-icons">menu</span>
         <i class="material-icons">lock</i>
      </button>
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click="collapedSidebar()">
 <i class="material-icons">add_alert</i>
      </button>
    </div>
  </b-navbar>
</template>

<script>
// eslint-disable-next-line
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'app-header',
  methods: {
    collapedSidebar: function () {
      $('body').toggleClass('sidebar-icon-only')
    },
    collapedMobileSidebar: function () {
      $('#sidebar').toggleClass('active')
    }
  }
}
</script>
