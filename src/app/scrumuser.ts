export class Scrumuser {
  constructor(
    public email: string,
    public fullname: string,
    public password: string,
    public projname: string,
    public usertype: string,
    ){}

  toBeTruthy():any {
    throw new Error('Method not implemented');
  }
}

export class Scrumuserdata {
  constructor(
    public email: string,
    public password: string,
    public project: string,
    ){}
}

export class ScrumUserLoginData {
    constructor(
        public email: string,
        public password: string,
        public project: string,
    ) { }
}
