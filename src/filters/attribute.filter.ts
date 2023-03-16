export const hook = `blocks.registerBlockType`

export const name = `syntax-highlight/code`

export const callback = (settings: any, name: string) => {
  if (name !== `core/core`) return settings

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      language: {type: `string`, default: `php`, value: `php`},
    },
  }
}
