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
