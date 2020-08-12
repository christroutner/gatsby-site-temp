import React from 'react'
import DefaultExample from 'gatsby-ipfs-adminlte/src/components/admin-lte/example'
import { Content, Row, Col, Box, Button } from 'adminlte-2-react'

let _this

class Example extends DefaultExample {
  // class Example extends React.Component {
  constructor (props) {
    super(props)
    console.log('Loading new example view.')

    // this.state = {
    //   importCards: this.addCards()
    // }
    // console.log(`state: ${JSON.stringify(this.state, null, 2)}`)

    _this = this
  }

  render () {
    return (
      <>
        <DefaultExample {...this.props} importComponents={this.addCards()} />
      </>
    )
    // return (
    //   <>
    //     <p>test</p>
    //   </>
    // )
  }

  // componentDidMount () {
  //   setInterval(function () {
  //     _this.setState({
  //       importCards: _this.addCards()
  //     })
  //     console.log('ping')
  //   }, 2000)
  // }

  addCards () {
    return (
      <Row>
        <Col xs={6}>
          <Box
            title="A Third Box"
            type="primary"
            closable
            collapsable
            footer={<Button type="danger" text="Danger Button" />}
          >
            Hello World
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="A Fourth Box">Content goes here</Box>
        </Col>
      </Row>
    )
  }
}

export default Example
