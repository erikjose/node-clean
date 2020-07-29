import { SignupController } from '../controllers/SignupController'

describe('Signup Controller', () => {
  test('Return 400 if no name provided', () => {
    const sut = new SignupController()

    const HttpRequest = {
      body: {
        email: 'email@gmail.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const HttpResponse = sut.handle(HttpRequest)
    expect(HttpResponse.statusCode).toBe(400)
  })

  test('Return 200 if all completed fields', () => {
    const sut = new SignupController()

    const HttpRequest = {
      body: {
        name: 'name',
        email: 'email@gmail.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const HttpResponse = sut.handle(HttpRequest)
    expect(HttpResponse.statusCode).toBe(200)
  })
})
