>  <!--shift+alt+f -->

 <template>
  <div>
    <navbar />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import AppFooter from '~/components/Footer' 
export default {
  components: {
    Navbar,
   AppFooter
  }
}
</script>


