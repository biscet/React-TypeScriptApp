import _ from "lodash"

type Mixin = {
  name: string
  func: Function
}

type MixinKeys = keyof Mixin

const mixinCreate: Function = (name: MixinKeys, func: Function) =>
  _.mixin({
    [name]: func
  } as any)

mixinCreate("trace", (article?: string) => {
  console.trace(article)
})

mixinCreate("table", (array: Array<string> | Object, sort?: Array<string>) => {
  console.table(array, sort)
})
