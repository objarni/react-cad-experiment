export type Rectangle = {
  width: number;
  height: number;
  x: number;
  y: number;
};

function getSecondMouseClick() {}

describe('My test suite', () => {
  // eslint-disable-next-line jest/valid-title
  it.skip(`
  clicking left mouse button twice, at different locations of the
  screen, should add a rectangle with it's diagonal between the two points clicked.
`, () => {
    // //Arrange
    // const expected: Rectangle = {
    //   width: 10,
    //   height: 20,
    //   x: 0,
    //   y: 0,
    // };
    //
    // // Act
    // const eventQueue = [];
    // // Simulate click at 0, 0
    // const click1 = eventQueue.pop();
    // // Simulate click at 10, 20
    // const click2 = eventQueue.pop();
    // // find data model,
    //
    // // Assert
    // // verify it's a rectangle
    // const actual: Rectangle = something(click1, click2);
    // const isValid = isValidRectangle(actual);
    // renderer.renderEntity(actual);
    // expect(renderer.renderedEntities[0]).toBe(actual);
    // expect(actual).toEqual(expected);
  });
});

const isValidRectangle = (rectangle: Rectangle) => {
  const { height, width, x, y } = rectangle;
  if (height <= 0 || width <= 0 || x < 0) {
    return false;
  }
  return true;
};

describe('is valid rectangle', () => {
  it('A rectangle with positive width and height at coordinate 0,0 is valid', () => {
    const rectangle: Rectangle = {
      width: 10,
      height: 20,
      x: 0,
      y: 0,
    };
    expect(isValidRectangle(rectangle)).toBe(true);
  });

  it('A rectangle with negative width and height at coordinate 0,0 is invalid', () => {
    const rectangle: Rectangle = {
      width: -10,
      height: -20,
      x: 0,
      y: 0,
    };
    expect(isValidRectangle(rectangle)).toBe(false);
  });

  it('A rectangle with no width at coordinate 0,0 is invalid', () => {
    const rectangle: Rectangle = {
      width: 0,
      height: 20,
      x: 0,
      y: 0,
    };
    expect(isValidRectangle(rectangle)).toBe(false);
  });

  it('A rectangle with no height at coordinate 0,0 is invalid', () => {
    const rectangle: Rectangle = {
      width: 10,
      height: 0,
      x: 0,
      y: 0,
    };
    expect(isValidRectangle(rectangle)).toBe(false);
  });

  it('A rectangle with width and height at coordinate 10, 20 is valid', () => {
    const rectangle: Rectangle = {
      width: 10,
      height: 20,
      x: 10,
      y: 20,
    };
    expect(isValidRectangle(rectangle)).toBe(true);
  });

  it('A rectangle with width and height at coordinate x < 0, y = 20 is invalid', () => {
    const rectangle: Rectangle = {
      width: 10,
      height: 20,
      x: -10,
      y: 20,
    };
    expect(isValidRectangle(rectangle)).toBe(false);
  });
});
