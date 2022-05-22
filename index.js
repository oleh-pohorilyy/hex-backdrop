const root = document.querySelector('#root')
if(!root) throw new Error('No root!')
const svg = document.querySelector('#root > svg')
if(!svg) throw new Error('No svg!')
const mouse = document.querySelector('#mouse')
if(!mouse) throw new Error('No mouse!')

const HEXAGON_SIZE = 40
const GAP = 4

const hexagons = []

for(let y = 0; y < window.innerWidth / HEXAGON_SIZE + 1; y++) {
	for(let x = 0; x < window.innerHeight / (HEXAGON_SIZE - (GAP + 3)*2) + 1; x++) {
		const xCircleGap = (HEXAGON_SIZE - Math.cos(30 * Math.PI / 180) * HEXAGON_SIZE)
		const xOffset = (y % 2 ? HEXAGON_SIZE + xCircleGap + GAP/2 : 0) + xCircleGap * x * 2
		const yOffset = (HEXAGON_SIZE - Math.sin(30 * Math.PI / 180) * HEXAGON_SIZE) * y * 2

		const options = {
			size: HEXAGON_SIZE,
			rotate: 30,
			x: (HEXAGON_SIZE * 2) * (x + y%2) - xOffset + GAP * (x + y%2),
			y: (HEXAGON_SIZE * 2) * y - yOffset + (GAP + HEXAGON_SIZE / 2) * y
		}

		const hexagon = createHexagon(options)
		hexagons.push(hexagon)
	}
}

svg.append(...hexagons)

document.addEventListener('mousemove', (event) => {
	mouse.style.left = `${event.pageX - mouse.clientWidth / 2}px`
	mouse.style.top = `${event.pageY - mouse.clientHeight / 2}px`
})