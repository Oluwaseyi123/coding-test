<template>
  <the-header />
  
  <ul>
    <li v-for="(data, index) in domains" :key="index" :data-id="data.id">
      <div class="before"></div>
      <p class="domain">Domain: {{ data.url }}</p>
      <ul>
        <li
          v-for="(page, index) in data.current_user_domain_page_access
            .pages"
          :key="index"
          :page-id="page.id"
          :url="page.website_url"
        >
          <router-link :to="`/view-one/domain/${data.id}/page/${page.id}`" > {{ page.name }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>

export default {
  name: "Home",
  // props: ["id"],
  components: {
    
  },
  computed: {
    domains() {
      return this.$store.state.data.domains;
    },
    gettersData() {
      return this.$store.getters.getData;
    },
  },
  mounted() {
    console.log(this.$store.dispatch("getData"));
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  background: orange;
}
.domain{
  position: relative;
  background: rgba(0, 0, 0, .2); 
  padding-left: 12px;
}
.before{
  content: '';
  width: 10px;
  height: 22px;
  background: purple;
  /* margin-right: 10px; */
  position: absolute;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  text-decoration: underline;
  color: orange;
}
</style>