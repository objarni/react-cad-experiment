import React from 'react'
import './App.css'
import { Position, Rectangle } from './types'
import { mouseClickCalculation, mouseMoveCalculation } from './RectangleTool'

function App() {
  const [clickPosition, setClickPosition] = React.useState<
    Position | undefined
  >(undefined)
  const [toolActive, setToolActive] = React.useState<boolean>(false)
  const [toolRectangle, setToolRectangle] = React.useState<
    Rectangle
  >({
    width: 100,
    height: 200,
    x: 0,
    y: 0,
  })
  const [rectangles, setRectangles] = React.useState<Rectangle[]>([])

  const onMouseClick = (event: MouseEvent) => {
    let { newToolRectangle, clickAt, toolActive, newRectangles } =
      mouseClickCalculation(
        toolRectangle,
        { x: event.clientX, y: event.clientY },
        clickPosition,
        rectangles
      )
    setRectangles(newRectangles)
    setClickPosition(clickAt)
    setToolActive(toolActive)
    setToolRectangle(newToolRectangle)
  }

  const onMouseMove = (event: MouseEvent) => {
    let { x, y } = clickPosition!
    let resultRectangle = mouseMoveCalculation({
      toolActive: toolActive,
      mousePosition: { x: event.clientX, y: event.clientY },
      mouseClickedAt: { x, y },
    })
    if (resultRectangle) setToolRectangle(resultRectangle)
  }

  return (
    <div
      className="App disableSelection"
      onClick={(event: any) => onMouseClick(event)}
      onMouseMove={(event: any) => onMouseMove(event)}
    >
      <RectanglesDiv rectangles={rectangles} />
      <RectangleDiv color={'red'} rectangle={toolRectangle} />
    </div>
  )
}

function RectangleDiv(props: { rectangle: Rectangle; color: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        background: props.color,
        left: props.rectangle.x,
        top: props.rectangle.y,
        width: props.rectangle.width,
        height: props.rectangle.height,
      }}
    >
      Rectangle
    </div>
  )
}

function RectanglesDiv(props: { rectangles: Rectangle[] }) {
  const divs = props.rectangles.map((rectangle: Rectangle) => {
    return <RectangleDiv color={'blue'} rectangle={rectangle} />
  })
  return <div>{divs}</div>
}

export default App
