'use strict'

const Channel = use('App/Models/Channel')
const Message = use('App/Models/Message')

class ChannelController {
  
  async index ({ request }) {
    return Channel.all()
  }

  async messages ({ params }){
    return Message.query()
    .where('channel_id', params.id)
    .fetch()
  }

}

module.exports = ChannelController
