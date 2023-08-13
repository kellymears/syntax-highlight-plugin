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
    if (props.name !== `core/code`) return <BlockEdit {...props} />

    if (props.attributes.language) {
      props = {
        ...props,
        className: classNames(
          `hljs`,
          `language-${props.attributes.language}`
        ),
      }
    }

    return (
      <Fragment>
        <BlockEdit {...props} />

        <InspectorControls>
          <PanelBody
            title={__('Syntax', 'syntax-highlight')}
            initialOpen={true}
          >
            <SelectControl
              label={__('Language', 'syntax-highlight')}
              value={props.attributes.language}
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
              onChange={(language) => {
                props.setAttributes({
                  ...props.attributes,
                  language,
                })
              }}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    )
  }
}, 'withInspectorControl')
