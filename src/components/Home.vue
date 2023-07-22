<template>


  <div class="row  justify-content-between">
    <div class="col-md-5">
      <div class="input mb-3">
        <input type="text" class="form-control" placeholder="Search for a country..." v-model="result" @input="filterCountry(result)">
      </div>
    </div>

    <div class="col-md-4">
      <select class="form-select" v-model="region" @click="filterByRegion(region)">
        <option selected value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

    </div>
  </div>




  <div class="row g-5 my-3">

    <div class="col-md-4 col-lg-3" v-for="i in 8" v-if="!countries.length">
      <card>
        <template v-slot:header>
          <div class="placeholder-glow ">
            <span class="placeholder col-12 country-img"></span>
          </div>
        </template>

        <template v-slot:body>
          <div class="placeholder-glow">
            <span class="placeholder col-9"></span>
            <span class="placeholder col-7"></span>
            <span class="placeholder col-7"></span>
            <span class="placeholder col-7"></span>
          </div>
        </template>
      </card>
    </div>

    <div class="col-md-4 col-lg-3" v-for="country in countries" v-else>



      <card>
        <template v-slot:header>
          <div class="country-img" :style="{backgroundImage: `url('${country.flags.svg}')`}"></div>
        </template>

        <template v-slot:body>
            <h6 class="fw-bolder">{{country.name}}</h6>
            <ul class="list-unstyled">
              <li>
                <b>Population:</b> {{country.population}}
              </li>

              <li>
                <b>Region:</b> {{country.region}}
              </li>

              <li>
                <b>Capital:</b> {{country.capital}}
              </li>

            </ul>

            <router-link :to="`country/${country['alpha3Code'].toLowerCase()}`" class="stretched-link"></router-link>

        </template>
      </card>
    </div>
  </div>


</template>


<script>
import card from './Card.vue'
import {API} from "../api.js";
export default{
  async beforeMount() {
      this.countries = await API.allCountries();
  },

  components: {card},
  data() {
    return {
      countries: [],
      result: '',
      region: ''
    }
  },
  methods: {

    async filterCountry(country) {
      this.countries = await API.filterCountry(country)
    },
    async filterByRegion(region) {
      this.countries = await API.filterByRegion(region);
    },


  }
}
</script>


<style scoped>

.country-img {
  min-height: 150px;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.card {
  height: 100%  ;
}

</style>