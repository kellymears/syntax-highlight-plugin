import classnames from 'classnames'
import {createHigherOrderComponent} from '@wordpress/compose'

export const name = `syntax-highlight/add-class`

export const hook = `editor.BlockListBlock`

export const callback = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    if (props.name !== 'core/button' || !props.attributes.language) {
      return <BlockListBlock {...props} />
    }

    const {attributes, className} = props

    return (
      <BlockListBlock
        {...props}
        className={classnames(
          className,
          attributes.language
            ? [`language-${attributes.language}`, `hljs`]
            : null
        )}
      />
    )
  }
}, 'withClientIdClassName')
