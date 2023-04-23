export type RequestBase = {
  'date': string
  'priority': 'high' | 'low'
}

export type AddRequest = RequestBase & {
  'addField': string
}

export type OtherRequest= RequestBase & {
  'otherField': string
}

export type Request = AddRequest | OtherRequest

export type Project = {
  'name': string
  'date': string
}



export type AddRequestWithProject = {
  request: AddRequest
  project: Project
}

export type OtherRequestWithProject = {
  request: OtherRequest
  project: Project
}

export type RequestWithProject = {
  request: Request
  project: Project
}