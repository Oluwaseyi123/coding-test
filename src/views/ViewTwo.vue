<template>
  <the-header />
  <router-link to="/" class="back-cta" >
  <p >Back</p> 
  </router-link>
  <div class="view-two">

    <p>Name: {{ selectedData.name }}</p>
    <p>Description: {{ selectedData.description }}</p> <br>

    <table>
      <tr  v-for="value in selectedData.content.values" :key="value">
          <td v-for="(td,idx) in value" :key="idx" class="table-cell" :class="idx === 0 ? 'wide': ''" :style="{'--color-scale': (td + 10) ?? 0}">
           {{formatNumber(td)}}
          </td>
      </tr>
    </table>
     <button @click="loadData">Refresh Page</button>
  </div>
</template>


<script>
import axios from "axios";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  props: ["domain", "page"],
  data() {
    return {
      selectedData: {},
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData(){
      axios
      .get(
        `https://www.ipushpull.com/api/2.0/domains/id/${this.domain}/page_content/id/${this.page}`
      )
      .then((res) => {
        this.selectedData = res.data;
        
      });
    console.log(this.selectedData);
    },
    formatNumber(amount){
      if(typeof amount === 'number'){
        return amount.toFixed(3)
      }else{
        return amount
      }
    }
  }
};
</script>


<style scoped lang=css>
  .table-cell{
    --color-scale: 1;
    background-color : hsl(calc(var(--color-scale) * 25), 100%, 50%);
    color: hsl(calc(var(--color-scale) / 10), 100%, calc(calc(var(--color-scale)) * 10%));
    font-size: 15px;
    font-weight: bold;
    padding: .3rem;
    text-align: center;
    border: 2px solid white;
  }

  .table-cell.wide{
     min-width: 200px;
    min-height: 40px;
    max-width: 200px;
    max-height: 40px;
  }
  button{
    outline: none;
    border: none;
    display: block;
    margin: 0 auto;
    padding: 10px 25px;
    margin-top: 30px;
    margin-bottom: 3rem;
    background: orange;
    cursor: pointer;
     transition: all .2s ease-in;
  }
  button:hover{
     border: 1px solid orange;
     background: none;
  }
  .back-cta{
    text-decoration: none;
    border: 1px solid orange;
    display: block;
    width: 80px;
    margin: 0px 1rem 1rem;
    padding: 5px 20px;
    color: orange;
    transition: all .2s ease-in;
  }
  .back-cta:hover{
    background: orange;
    color: white;
  }
</style>