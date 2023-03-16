import {createHigherOrderComponent} from '@wordpress/compose'
import {Fragment} from 'react'
import {InspectorControls} from '@wordpress/block-editor'
import {PanelBody, SelectControl} from '@wordpress/components'
import {__} from '@wordpress/i18n'

export const name = `syntax-highlight/control`

export const hook = `editor.BlockEdit`

import classNames from 'classnames'

export const callback = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const {name, attributes, setAttributes, onRemove} = props

    if (name !== `core/code`) return <BlockEdit {...props} />

    return (
      <Fragment>
        <BlockEdit
          className={classNames(
            props.className,
            `hljs language-${attributes?.language ?? `html`}`
          )}
          {...props}
        />

        <InspectorControls>
          <PanelBody
            title={__('Syntax', 'syntax-highlight')}
            initialOpen={true}
          >
            <SelectControl
              label={__('Language', 'syntax-highlight')}
              value={attributes?.language}
              options={[
                {
                  label: 'php',
                  value: 'php',
                },
                {
                  label: 'js',
                  value: 'javascript',
                },
                {
                  label: 'css',
                  value: 'css',
                },
                {
                  label: 'html',
                  value: 'html',
                },
                {
                  label: 'json',
                  value: 'json',
                },
                {
                  label: 'xml',
                  value: 'xml',
                },
                {
                  label: 'sql',
                  value: 'sql',
                },
              ]}
              onChange={(value) => {
                setAttributes({language: value})
              }}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    )
  }
}, 'withInspectorControl')
