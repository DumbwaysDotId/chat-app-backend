'use strict'

const Channel = use('App/Models/Channel')
const Message = use('App/Models/Message')

class ChannelController {
  
  async index ({ request }) {
    return Channel.all()
  }

  async messages ({ params }){
    return Message
    .query() 
    .select('*')
    .select('id as _id')   
    .where('channel_id', params.id)    
    .with('user', (builder)=> {
      builder.select('*').select('id as _id')
    })
    .orderBy('id', 'DESC')
    .fetch()
  }

}

module.exports = ChannelController
