import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    cities: [
      {
        name: "Москва",
        cityCode: 1
      },
      {
        name: "Санкт-Петербург",
        cityCode: 2
      },
      {
        name: "Нижний Новгород",
        cityCode: 3
      },
      {
        name: "Екатеринбург",
        cityCode: 4
      },
      {
        name: "Казань",
        cityCode: 5
      }
    ],
    manufactures: [
      {
        manufactureNumber: "РЦМ.001",
        cityCode: 1
      },
      {
        manufactureNumber: "РЦМ.002",
        cityCode: 1
      },
      {
        manufactureNumber: "РЦСП.001",
        cityCode: 2
      },
      {
        manufactureNumber: "РЦНН.001",
        cityCode: 3
      },
      {
        manufactureNumber: "РЦНН.002",
        cityCode: 3
      },
      {
        manufactureNumber: "РЦЕ.001",
        cityCode: 4
      },
      {
        manufactureNumber: "РЦК.001",
        cityCode: 5
      }
    ],
    employees: [
      {
        nameEmployee: "Яковцов Константин Филимонович",
        manufactureNumber: "РЦМ.001"
      },
      {
        nameEmployee: "Хованский Всеслав Сидорович",
        manufactureNumber: "РЦМ.001"
      },
      {
        nameEmployee: "Опринчук Арсений Левович",
        manufactureNumber: "РЦСП.001"
      },
      {
        nameEmployee: "Валиев Валерий Ефремович",
        manufactureNumber: "РЦСП.001"
      },
      {
        nameEmployee: "Фернандес Василий Ипатович",
        manufactureNumber: "РЦСП.001"
      },
      {
        nameEmployee: "Цуцков Виктор Леонтиевич",
        manufactureNumber: "РЦНН.001"
      },
      {
        nameEmployee: "Алленов Алексей Ульянович",
        manufactureNumber: "РЦНН.001"
      },
      {
        nameEmployee: "Сиваков Святослав Иннокентиевич",
        manufactureNumber: "РЦНН.002"
      },
      {
        nameEmployee: "Сазонтов Валерий Андриянович",
        manufactureNumber: "РЦНН.002"
      },
      {
        nameEmployee: "Кияк Борис Федотович",
        manufactureNumber: "РЦЕ.001"
      },
      {
        nameEmployee: "Зыльков Никита Сигизмундович",
        manufactureNumber: "РЦЕ.001"
      },
      {
        nameEmployee: "Уржумцев Аркадий Демьянович",
        manufactureNumber: "РЦК.001"
      },
      {
        nameEmployee: "Зыков Данила Кондратович",
        manufactureNumber: "РЦК.001"
      },
      {
        nameEmployee: "Краевский Петр Самсонович",
        manufactureNumber: "РЦК.001"
      }
    ],
    brigades: [
      "Бригада 1",
      "Бригада 2"
    ],
    workingShift: [
      "Первая (8:00-20:00)",
      "Вторая (20:00-8:00)"
    ],
    cityCode: 1,
    manufacture: "РЦМ.001",
    savesData: [],
    json: {},
  },
  getters: {
    manufactures(state) {
      return state.manufactures.filter(manufacture => {
        manufacture.cityCode === state.cityCode;
      });
    },
    employees(state) {
      return state.employees.filter(employee => {
        employee.manufactureNumber === state.manufacture;
      });
    }
  },
  mutations: {
    setData(state, value) {
      state.savesData.push(value);
      state.json = JSON.stringify(value);
      document.cookie = state.json;
      console.log(document.cookie)
    }
  },
  actions: {
    setData(state, data) {
      state.commit("setData", data)
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});