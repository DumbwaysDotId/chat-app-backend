'use strict'

const User = use('App/Models/User')

class UserController {

    async register({ request }){
        const user = await User.create(request.all())

        return user
    }

}

module.exports = UserController
