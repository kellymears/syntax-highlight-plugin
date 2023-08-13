import classnames from 'classnames'
import {createHigherOrderComponent} from '@wordpress/compose'

export const name = `syntax-highlight/add-class`

export const hook = `editor.BlockListBlock`

export const callback = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    if (props.name !== `core/code`) return <BlockListBlock {...props} />

    if (props.attributes.language) {
      props = {
        ...props,
        className: classnames(
          `hljs`,
          `language-${props.attributes.language}`
        )
      }
    }

    return (
      <BlockListBlock {...props} />
    )
  }
}, `withClientIdClassName`)
