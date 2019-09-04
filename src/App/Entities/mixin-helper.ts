import _ from "lodash"

const mixinCreate: Function = (name: string, func: Function) =>
  _.mixin({
    [name]: func
  })

mixinCreate("trace", (article?: string) => {
  console.trace(article)
})
