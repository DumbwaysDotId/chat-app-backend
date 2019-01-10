'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('register', 'UserController.register')
Route.post('login', 'UserController.login')

Route.get('contacts', 'ContactController.index').middleware('auth')

Route.get('channels', 'ChannelController.index').middleware('auth')
Route.get('channel/:id/messages', 'ChannelController.messages').middleware('auth')

Route.post('message', 'MessageController.store').middleware('auth')
