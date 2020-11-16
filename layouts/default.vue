<template lang="html">

  <section class="main-view">
    <div class="container-scroller">
      <app-header/>
      <div class="container-fluid page-body-wrapper">
        <app-sidebar/>
        <div class="main-panel">
          <div class="content-wrapper">
            <Nuxt/>
          </div>
          <!-- content wrapper ends -->
          <app-footer/>
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>

</template>

<script>
import AppHeader from '../components/partials/AppHeader'
import AppSidebar from '../components/partials/AppSidebar'
import AppFooter from '../components/partials/AppFooter'
export default {
  data () {
    return {

    }
  },
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  },
  middleware: ['auth']
}
</script>

