'use strict'

const Message = use('App/Models/Message')

class MessageController {
  
  async store({ request }){
    const message = Message.create({
      ...request.all(),
      user_id: 1
    })

    return message
  }

}

module.exports = MessageController
