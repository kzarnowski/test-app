export type RequestBase = {
  date: string
  priority: 'high' | 'low'
}

export type AddRequest = {
  request: RequestBase & {
    addField: string
  }
}

export type OtherRequest = {
  request: RequestBase & {
    otherField: string
  }
}

export type Request = AddRequest | OtherRequest

export type Project = {
  project: {
    name: string
    date: string
  }
}

export type AddRequestWithProject = AddRequest & Project

export type OtherRequestWithProject = OtherRequest & Project

export type RequestWithProject = AddRequestWithProject | OtherRequestWithProject