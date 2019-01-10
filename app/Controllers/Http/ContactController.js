'use strict'

const Contact = use('App/Models/Contact')

class ContactController {

  async index ({ request }) {
    return await Contact.all()
  }

}

module.exports = ContactController
