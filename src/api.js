import axios from "axios";
const URL = '/src/assets/data.json';
export const API = {
    async allCountries() {
        return (await axios.get(URL)).data
    },

    async filterCountry(country) {
        let countries = await this.allCountries();
        if(country != '') {
            return await  countries.filter((value) => {
                return value.name.toLowerCase().includes(country.toLowerCase())
            })
        }else {
            return await this.allCountries();
        }
    },


    async filterByRegion(region) {
        let countries = await this.allCountries();
        if(region != '') {
            return  await countries.filter((value) => {
                return value.region === region
            })
        }else {
            return  await  countries
        }
    },
    async country(code) {

        let countries = await this.allCountries();

        return await  countries.filter((value) => {
                return value['alpha3Code'] === code.toUpperCase();
            })[0]

    },
}
