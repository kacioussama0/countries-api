<template>
  <router-link to="/" class="btn btn-outline-light text-black mb-5">Back</router-link>

  <div class="row gx-5">
    <div class="col-md-6">
      <img :src="country.flags.svg" alt="" class="img-fluid">
    </div>
    <div class="col-md-6">
      <h2 class="my-3">{{country.name}}</h2>
      <ul class="list-unstyled vstack gap-2">
          <li>
            <b>Native Name: </b> {{country.nativeName}}
          </li>

          <li>
            <b>Population : </b> {{country.population}}
          </li>

          <li>
            <b>Region : </b> {{country.region}}
          </li>

          <li>
            <b>Sub Region : </b> {{country.subregion}}
          </li>

          <li>
            <b>Capital : </b> {{country.capital}}
          </li>

          <li>
            <b>Top Level Domain : </b>
            <span v-for="item in country.topLevelDomain">
              {{item}}
            </span>
          </li>

          <li>
            <b>Currencies : </b>
            <span v-for="item in country.currencies">
                {{item.name}}
              </span>
          </li>

          <li>
            <b>Languages : </b>
            <span v-for="item in country.languages">
                  {{item.name}},
            </span>

          </li>

          <li v-if="country.borders">
            <b>Border Countries : </b>
            <span v-for="item in country.borders">
              <router-link :to="`/country/${item.toLowerCase()}`" class="btn btn-light px-4 m-1">{{item}}</router-link>
            </span>
          </li>
      </ul>
    </div>
  </div>
</template>


<script>
import {API} from "../api.js";
export default  {
  async beforeUpdate() {
    let code = this.$route.params.code.toUpperCase()
    this.country = await API.country(code)
  },
  async beforeMount() {

    let code = this.$route.params.code.toUpperCase()

    this.country = await API.country(code)

  },


  data() {
    return {
      country: {}
    }
  },
  methods: {

  }
}

</script>


<style scoped>

</style>