'use strict'

const User = use('App/Models/User')

class UserController {

    async register({ request }){
        const user = await User.create(request.all())

        return user
    }

    async login({ request, auth }){
        const email = request.input('email')
        const password = request.input('password')

        const user = await User.query().where('email', email).first()    
        const authentication = await auth.attempt(email, password)        

        return {
            ...authentication,
            user
        }
        
    }

}

module.exports = UserController
