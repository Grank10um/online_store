import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"}
        ]

        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12", price: 120000, rating: 5, img:'/Users/pavelgrankkin/Documents/lessons/react/online-store-cource/server/static/4ff18e40-1176-44b2-80f9-cd04954cd75e.jpg'},
            {id: 2, name: "Iphone 12", price: 120000, rating: 5, img:'/Users/pavelgrankkin/Documents/lessons/react/online-store-cource/server/static/4ff18e40-1176-44b2-80f9-cd04954cd75e.jpg'},
            {id: 3, name: "Iphone 12", price: 120000, rating: 5, img:'/Users/pavelgrankkin/Documents/lessons/react/online-store-cource/server/static/4ff18e40-1176-44b2-80f9-cd04954cd75e.jpg'},
            {id: 4, name: "Iphone 12", price: 120000, rating: 5, img:'/Users/pavelgrankkin/Documents/lessons/react/online-store-cource/server/static/4ff18e40-1176-44b2-80f9-cd04954cd75e.jpg'},
            {id: 5, name: "Iphone 12", price: 120000, rating: 5, img:'/Users/pavelgrankkin/Documents/lessons/react/online-store-cource/server/static/4ff18e40-1176-44b2-80f9-cd04954cd75e.jpg'}

        ]
        makeAutoObservable(this)

    }

    setTypes(types) {
        this._types=types
        }

    setBrands(brands) {
        this._brands=brands
    }

    setDevuces(devices) {
        this._devices=devices
    }


    get types() {
        return this._types
    }

    get brands() {
    return this._brands
    }

    get devices() {
        return this._devices
    }
}