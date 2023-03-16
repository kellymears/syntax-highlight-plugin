export default async ({path, ...b}) =>
  b
    .entry(`editor`)
    .entry(`client`)
    .compilePaths([path(`@src`), path(`@modules/highlight.js`)])
    .experiments({topLevelAwait: true})
