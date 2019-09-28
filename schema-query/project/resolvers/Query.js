const { users, profiles } = require('../data/db')

module.exports = {
    ola() {
        return "Hello !"
    },
    currentTime() {
        return new Date()
    },
    loggedUser(){
        return {
            id: 1,
            name: 'Victor',
            email: 'victor26job@gmail.com',
            age: '23',
            real_salary: 1234.56,
            vip: true,
        }
    },

    featuredProduct(){
        return{
            name: 'Microwave',
            price: 500.00,
            discountPercentage: 15
        }
    },
    megaSenaNumbers(){
        const myPersonalRandom = () => parseInt(Math.random()*60 + 1) //Generate random ints from 1 to 60
        const ascendent = (a, b) => a - b
        return Array(6).fill(0)
            .map(myPersonalRandom)
            .sort(ascendent)
            .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []) //remove duplicates
    },
    users(){
        return users
    },
    user(_, {id}){
        const res = users.filter(f => f.id === id)
        return res ? res[0] : null
    },

    profiles(_, {id, name}){
        let res = profiles
        if(id)
            res = res.filter(f => f.id === id)
        if(name)
            res = res.filter(f => f.name === name)
        return res
    }
}