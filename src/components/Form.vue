<template>
  <form action="" method="">
    <span>Город:</span>
    <select v-model="selected.city">
      <option
        v-for="(city, index) in $store.state.cities"
        :key="index"
        :value="city.name"
      >
        {{ city.name }}
      </option>
    </select>

    <span>Цех:</span>
    <select v-model="selected.manufacture">
      <option
        v-for="(manufacture, index) in $store.getters.manufactures" 
        :key="index"
        :value="manufacture.manufactureNumber"
      >
        {{ manufacture.manufactureNumber }}
      </option>
    </select>

    <span>Сотрудник:</span>
    <select v-model="selected.employee">
      <option
        v-for="(employee, index) in $store.getters.employees"
        :key="index"
        :value="employee.nameEmployee"
      >
        {{ employee.nameEmployee }}
      </option>
    </select>

    <span>Бригада:</span>
    <select v-model="selected.brigade">
      <option
        v-for="(brigade, index) in $store.state.brigades"
        :key="index"
        :value="brigade"
      >
        {{ brigade }}
      </option>
    </select>

    <span>Смена:</span>
    <select v-model="selected.workingShift">
      <option
        v-for="(workingShift, index) in $store.state.workingShift"
        :key="index"
        :value="workingShift"
      >
        {{ workingShift }}
      </option>
    </select>
    <button class="submit" @click="submit()">Отправить</button>
  </form>
</template>
<script>

  export default {
    data() {
      return {
        selected: {
          city: null,
          manufacture: null,
          employee: null,
          brigade: null,
          workingShift: null
        }
      }
    },
    methods: {
      submit() {
        this.$store.dispatch("setData", this.selected)
      },
    }
  }
</script>

<style lang="sass" scoped>
  form
    position: fixed
    width: 650px
    height: 500px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    border: solid 1px #555
    font-family: Arial
    select
      width: 450px
      font-size: 20px
      margin: 10px
      text-align: center
    div
      width: 450px
      margin-top: 10px
      label
        font-size: 20px
        margin-left: 10px 
    span
      font-size: 20px
    .submit
      width: 200px
      height: 30px
      margin-top: 30px
      border: none
      font-size: 20px
      cursor: pointer
    .submit:active
        background: #9f9f9f
</style>