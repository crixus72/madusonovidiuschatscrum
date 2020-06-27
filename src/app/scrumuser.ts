export class Scrumuser {
  constructor(
    public email: string,
    public fullname: string,
    public password: string,
    public usertype: string,
    public project: string,
    ){}
}

export class Scrumuserdata {
  constructor(
    public email: string,
    public password: string,
    public project: string,
    ){}
}

