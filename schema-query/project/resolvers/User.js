const { profiles } = require('../data/db')

module.exports = {

    salary(user) {
        return user.real_salary
    },

    profile(user) {
        return profiles.filter(f => f.id === user.profile_id)[0]
    },





}