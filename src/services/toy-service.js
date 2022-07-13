
import { utilService } from "./util-service.js"
import axios from 'axios'


const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/toy'
    : '//localhost:3000/api/toy'



export const toyService = {
    getToys,
    removeToy,
    getById,
    save,
    getEmptyToy,
}
const toys = [{
    "_id": "t101",
    "name": "Talking Doll",
    "price": 123,
    "labels": ["Doll", "Battery Powered", "Baby"],
    "createdAt": 1631031801011,
    "inStock": true
}, {
    "_id": "t102",
    "name": "Nature puzzle",
    "price": 23,
    "labels": ["Art", "Puzzle"],
    "createdAt": 1631031891011,
    "inStock": true
}, {
    "_id": "t103",
    "name": "Tetris",
    "price": 123,
    "labels": ["Battery Powered"],
    "createdAt": 1631031871011,
    "inStock": true
}]

function getToys(filterBy) {
    return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data)
}

function removeToy(toyId) {
    return axios.delete(BASE_URL+ toyId).then(res => res.data)
}
function getById(toyId) {
    return axios.get(BASE_URL+ toyId).then((res) => res.data)

}
function save(toy) {
    if (toy._id) return axios.put(BASE_URL + toy._id, toy).then((res) => res.data)
    return axios.post(BASE_URL, toy).then((res) => res.data)
}

function getEmptyToy() {
    return {
        "_id": utilService.makeId(),
        "name": null,
        "price": null,
        "labels": [],
        "createdAt": Date.now(),
        "inStock": false,
    }
}
