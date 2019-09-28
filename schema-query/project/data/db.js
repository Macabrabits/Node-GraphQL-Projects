
const users = [{
    id: 1,
    name: 'João',
    email: 'firstemail@hmail.com',
    age: 13,
    real_salary: 12345.67,
    vip: false,
    profile_id: 2,
    status: 'ACTIVE'

}, {
    id: 2,
    name: 'Maria',
    email: 'secondemail@hmail.com',
    age: 26,
    real_salary: 12345.67,
    vip: true,
    profile_id: 1,
    status: 'INACTIVE'
}]

const profiles = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'User'}
]

module.exports = { users, profiles }