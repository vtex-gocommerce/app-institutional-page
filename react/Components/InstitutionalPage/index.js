import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'vtex.store-components'

/**
 * A hero header
 */
class InstitutionalPage extends Component {
  /**
   * The prop types for this component
   */
  static propTypes = {
    headline: PropTypes.string,
    html: PropTypes.string
  }

  /**
   * Default prop types for this component
   */
  static defaultProps = {
    headline: '',
    html: ''
  }

  /**
   * Schema for component to allow configuration of props from admin configuration
   */
  static schema = {
    title: 'editor.institutional-page.title',
    description: 'editor.institutional-page.description',
    type: 'object',
    properties: {
      headline: {
        title: 'editor.institutional-page.headline.title',
        type: 'string'
      },
      html: {
        title: 'editor.institutional-page.html.title',
        type: 'string'
      }
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { headline, html } = this.props

    return (
      <Container>
        <div>
          <h2 className="t-heading-2 fw3 pv3 c-action-primary">{headline}</h2>
          <div className="t-body lh-copy" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Container>
    )
  }
}

export default InstitutionalPage
