import { storageService } from "./async-storage.service.js"

const KEY = 'toyDB'

export const toyService = {
    getToys,
    removeToy,
    getById,
    save,
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

function getToys() {
    if (!localStorage.KEY) localStorage.setItem(KEY, JSON.stringify(toys))
    return storageService.query(KEY)
}

function removeToy(toyId) {
    return storageService.remove(KEY, toyId)
}
function getById(toyId) {
    return storageService.get(KEY, toyId)
}

function save(toy) {
    if (toy._id) return storageService.put(KEY, toy)
    return storageService.post(KEY, toy)
  }


  
