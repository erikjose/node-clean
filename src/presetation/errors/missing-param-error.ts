export class MissingParamError extends Error {
  constructor (paramError: string) {
    super(`Missing param error: ${paramError}`)

    this.name = 'MissingParamError'
  }
}
