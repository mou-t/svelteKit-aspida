/* eslint-disable @typescript-eslint/no-explicit-any */
type LowerHttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch' | 'options'

type AspidaMethodParams = {
  status?: number
  query?: any
  reqHeaders?: any
  reqFormat?: FormData | URLSearchParams | ArrayBuffer | Blob | string | any
  reqBody?: any
  resHeaders?: any
  resBody?: any
}

type AspidaMethod = AspidaMethodParams & {
  polymorph?: AspidaMethodParams[]
}

type AspidaMethods = {
  [method in LowerHttpMethod]?: AspidaMethod
}

export type DefineMethods<T extends AspidaMethods> = T
