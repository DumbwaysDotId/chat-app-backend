'use strict'

const Message = use('App/Models/Message')

class MessageController {
  
  async index ({ request, params }) {
    // return Message.query().where('channel_id', req)
  }

}

module.exports = MessageController
