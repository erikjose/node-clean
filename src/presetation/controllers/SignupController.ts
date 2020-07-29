import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest, successRequest } from '../helpers/http-helpers'
import { MissingParamError } from '../errors/missing-param-error'

export class SignupController {
  handle ({ body }: HttpRequest): HttpResponse {
    if (!body.name) {
      return badRequest(new MissingParamError('name'))
    }

    return successRequest('Success')
  }
}
