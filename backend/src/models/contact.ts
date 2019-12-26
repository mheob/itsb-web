export class Contact {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly sendCopy: boolean,
    public readonly privacy: string,
    public readonly message: string
  ) {}
}
