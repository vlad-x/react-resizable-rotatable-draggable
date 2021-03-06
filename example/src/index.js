import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import ResizableRect from 'react-resizable-rotatable-draggable'

class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      width: 100,
      height: 100,
      top: 100,
      left: 100,
      rotateAngle: 0
    }
  }

  handleResize = ({ style: { top, left, width, height }, isShiftKey, type, event }) => {
    console.log('resize', top, left, width, height, event)
    this.setState({
      top: Math.round(top),
      left: Math.round(left),
      width: Math.round(width),
      height: Math.round(height)
    })
  }

  handleRotate = ({ rotateAngle, event }) => {
    console.log('rotate', rotateAngle, event)
    this.setState({ rotateAngle })
  }

  handleDrag = ({ deltaX, deltaY, event }) => {
    console.log('drag', deltaX, deltaY, event)
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }

  handleRotateEnd = (e) => console.log('RotateEnd', e)

  handleRotateStart = (e) => console.log('RotateStart', e)

  render () {
    const { top, left, width, height, rotateAngle } = this.state
    return <ResizableRect color="#6963da" {...{
      top,
      left,
      width,
      height,
      rotateAngle,
      // aspectRatio: false,
      minWidth: -Infinity,
      minHeight: -Infinity,
      zoomable: 'n, w, s, e, nw, ne, se, sw',
      // rotatable: true,
      onRotateStart: this.handleRotateStart,
      onRotate: this.handleRotate,
      onRotateEnd: this.handleRotateEnd,
      // onResizeStart: this.handleResizeStart,
      onResize: this.handleResize,
      // onResizeEnd: this.handleUp,
      // onDragStart: this.handleDragStart,
      onDrag: this.handleDrag
      // onDragEnd: this.handleDragEnd,
    }} >Hello world</ResizableRect>
  }
}

const initExample = (rootElement = document.getElementById('root')) => ReactDOM.render(
  <App />,
  rootElement
)

export { initExample }
