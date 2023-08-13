export default async ({path, ...bud}) =>
  bud
    .entry(`editor`)
    .entry(`client`)
    .alias({
      [`highlight.js/styles`]: path(`@modules/highlight.js/styles`),
      [`highlight.js`]: path(`@modules/highlight.js/es`)
    })
    .compilePaths([
      path(`@src`),
      path(`@modules/highlight.js`)
    ])
    .runtime(false)
