export default function useSnake() {
  let snake = [{ x: 3, y: 2 }]
  // your code here
  window.addEventListener('keypress', (e) => {
    console.log(e.key)
    switch (e.key) {
      case 'w':
        const object = { x: snake.x, y: snake.y + 1 }
        snake.push(object)
        break;

      default:
        break;
    }

  })
  const state = {
    cols: 20,
    rows: 14,
    board: { width: 700, height: 500 },
    speed: 100,
    snake: [{ x: 3, y: 2 }],
    apple: { x: 16, y: 2 }

  }
  return state
}
