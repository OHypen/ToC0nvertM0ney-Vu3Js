<template>
  <div class="conversor">
      <h2>{{moedaA}} Para {{moedaB}}</h2>
      <input type="text" class="text" v-model="moedaA_value" v-bind:placeholder="moedaA"/>
      <input type="button" class="button" value="Converter" v-on:click="converter"/>
      <h2>{{moedaB_value}}</h2>
  </div>
</template>

<script>
export default {
  name: "Conversor",
  props: ["moedaA","moedaB"],
  data(){
     return{
       moedaA_value : "",
       moedaB_value : 0
     };
  },
  methods: {   
        converter() {           
            let de_para = this.moedaA + '_' +  this.moedaB;
            let url = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + de_para + '&compact=y&apiKey=9efaf120b22fde4b9a53';
            fetch(url)
                .then(res => {
                    return res.json()
                })
                .then(json => {
                    let cotacao = json[de_para].val;
                    this.moedaB_value = (parseFloat(this.moedaA_value) * cotacao).toFixed(2)
                })
        }
    }
};
</script>

<style scoped>
  .conversor {
    max-width: 300px;
    padding: 20px;
    background-color: #282a36;
    border-radius: 20px;
    color: #ff79c6;
    border: 2px solid #ff79c6;
  }
  
  .button {
    border: 1px solid #44475a;
    border-radius: 10px;
    background-color: transparent;
    color: #8be9fd;
  }
  
  .text {
    border: 1px solid #44475a;
    background-color: transparent;
    border-radius: 10px;
    color: white;
  }

</style>

