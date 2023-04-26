import { Position, Rectangle } from './types'

export function mouseClickCalculation(
  toolRectangle: Rectangle,
  mouseClick: Position,
  previousClick: Position | undefined,
  rectangles: Rectangle[]
) {
  let newToolRectangle = { ...toolRectangle }
  let clickAt: Position | undefined = mouseClick
  let toolActive: boolean
  let newRectangles
  if (previousClick === undefined) {
    toolActive = true
    newToolRectangle.x = mouseClick.x
    newToolRectangle.y = mouseClick.y
    newToolRectangle.width = 10
    newToolRectangle.height = 10
    newRectangles = [...rectangles]
  } else {
    let { x, y } = previousClick
    toolActive = false
    const minX = Math.min(x, mouseClick.x)
    const minY = Math.min(y, mouseClick.y)
    newToolRectangle = {
      width: Math.abs(mouseClick.x - x),
      height: Math.abs(mouseClick.y - y),
      x: minX,
      y: minY,
    }
    newRectangles = [...rectangles, newToolRectangle]
    clickAt = undefined
  }
  return { newToolRectangle, clickAt, toolActive, newRectangles }
}

export function mouseMoveCalculation({
  toolActive,
  mousePosition,
  mouseClickedAt,
}: {
  toolActive: boolean
  mousePosition: Position
  mouseClickedAt: Position | undefined
}): Rectangle | undefined {
  if (!toolActive) return undefined
  if (mouseClickedAt === undefined) return undefined
  return {
    x: Math.min(mousePosition.x, mouseClickedAt.x),
    y: Math.min(mousePosition.y, mouseClickedAt.y),
    width: Math.abs(mousePosition.x - mouseClickedAt.x),
    height: Math.abs(mousePosition.y - mouseClickedAt.y),
  }
}
