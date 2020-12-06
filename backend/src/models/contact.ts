export class Contact {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly phone: string,
    readonly sendCopy: boolean,
    readonly privacy: string,
    readonly message: string
  ) {}
}
