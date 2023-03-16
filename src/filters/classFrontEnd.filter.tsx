import classnames from 'classnames'

export const name = 'syntax-highlight/class-front-end'

export const hook = 'blocks.getSaveContent.extraProps'

export const callback = (props: any, block: any, attributes: any) => {
  if (block.name !== `core/code`) return props
  if (!attributes.language) return props

  return {
    ...props,
    className: classnames(
      props.className,
      attributes.language ? [`language-${attributes.language}`, `hljs`] : null
    ),
  }
}
