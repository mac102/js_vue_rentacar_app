/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { log } from 'util'
import router from './router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        vehicles: [],
        locations: [],
        filteredVehicles: [],
        currentVehicle: {},
        location: null,
        pickup: '',
        dropoff: '',
        user: {},
        token: '',
        loginErrors: [],
        invalidCredentials: ''
    },
    getters: {
        allVehicles: state => state.vehicles,
        allLocations: state => state.locations,
        filteredVehicles: state => state.filteredVehicles,
        currentVehicle: state => state.currentVehicle,
        pickupDate: state => state.pickup,
        dropOffDate: state => state.dropoff,
        user: state => state.user,
        token: state => state.token,
        loginErrors: state => state.loginErrors,
        invalidCredentials: state => state.invalidCredentials
    },
    mutations: {
        GET_VEHICLES: (state, vehicles) => {
            state.vehicles = vehicles
        },
        GET_LOCATIONS: (state, locations) => {
            state.locations = locations
        },

        SET_FILTERED: (state, vehicles) => {
            state.filteredVehicles = vehicles
        },

        SET_VEHICLE: (state, vehicle) => {
            state.currentVehicle = vehicle
        },

        SET_LOCATION: (state, location) => {
            state.location = location
        },

        SET_PICKUP: (state, pickup) => {
            state.pickup = pickup
        },

        SET_DROPOFF: (state, dropoff) => {
            state.dropoff = dropoff
        },
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_LOGIN_ERRORS: (state, loginErrors) => {
            state.loginErrors = loginErrors
        },
        SET_INVALID_CREDENTIALS: (state, credentials) => {
            state.invalidCredentials = credentials
        },
        LOGOUT: (state) => {
            state.token = ''
        }
    },
    actions: {
        getVehicles({ commit }) {
            axios.get('http://localhost/vuerentcar/api/vehicles').then(response => {
                commit('GET_VEHICLES', response.data)
            })
        },
        getVehicle({ commit, state }, slug) {
            const vehicle = this.state.vehicles.find(vehicle => vehicle.slug === slug)

            commit('SET_VEHICLE', vehicle)
        },
        getLocations({ commit }) {
            axios.get('http://localhost/vuerentcar/api/locations/list').then(response => {
                commit('GET_LOCATIONS', response.data)
            })
        },
        filterVehicles({ commit, state }) {
            const filtered = state.vehicles.filter(vehicle => {
                let foundLocations = vehicle.locations.findIndex(location => {
                    return location.id === this.state.location
                })

                return foundLocations !== -1
            })

            const filteredVehicles = []

            filtered.forEach(vehicle => {
                if (vehicle.dates.length > 0) {

                    const overlaps = []
                    vehicle.dates.forEach(date => {
                        const startDate1 = new Date(date.pickup)
                        const endDate1 = new Date(date.drop_off)

                        const startDate2 = new Date(this.state.pickup)
                        const endDate2 = new Date(this.state.dropoff)

                        overlaps.push((startDate1 < endDate2) && (startDate2 < endDate1))
                    })

                    if (!overlaps.includes(true)) {
                        filteredVehicles.push(vehicle)
                    }

                    return
                }

                filteredVehicles.push(vehicle)
            })
            commit('SET_FILTERED', filteredVehicles)
        },
        setLocation({ commit, state }, value) {
            commit('SET_LOCATION', value)
        },
        filterOnApi({ commit }, value) {
            axios.get('http://localhost/vuerentcar/api/vehicles/filter/' + value).then(response => {
                commit('SET_FILTERED', response.data)
            })
        },
        setDates({ commit, state }, date) {
            if (date.type === 'pickup') {
                commit('SET_PICKUP', date.value)
                localStorage.setItem('pickup', date.value)
                return
            }

            commit('SET_DROPOFF', date.value)
            localStorage.setItem('dropoff', date.value)
        },
        registerUser({ commit, state }, user) {
            axios.post('http://localhost/vuerentcar/api/api/auth/register', user).then(response => {
                console.log(response)
            })
        },
        logout({ commit }) {
            commit('LOGOUT')
            router.push({ name: 'home' })
        },
        loginUser({ commit, state }, user) {
            axios.post('http://localhost/vuerentcar/api/api/auth/login', user).then(response => {
                commit('SET_TOKEN', response.data.token)
                commit('SET_USER', response.data.user)

                router.push({ name: 'confirmation' })
            }).catch(error => {
                commit('SET_INVALID_CREDENTIALS', '')
                commit('SET_LOGIN_ERRORS', [])

                console.log(error.response)
                if (error.response.data.error) {
                    commit('SET_INVALID_CREDENTIALS', error.response.data.error)
                } else {
                    const errors = []

                    for (const key of Object.keys(error.response.data.errors)) {
                        error.response.data.errors[key].forEach(err => {
                            errors.push(err)
                        })
                    }

                    commit('SET_LOGIN_ERRORS', errors)
                }
            })
        },
        makeReservation({ commit, state }, resData) {
            const authorization = {
                headers: {
                    'Authorization': 'Bearer ' + this.state.token
                }
            }
            axios.post('http://localhost/vuerentcar/api/create-reservation', resData, authorization).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error.response)
            })
        }
    }
})