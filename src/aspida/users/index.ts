type User = {
  id: number
  name: string
}

export type Methods = {
  get: {
    resBody: User
  }

  put: {
    reqBody: {
      name: string
    }

    resBody: User
  }
}
