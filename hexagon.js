function createHexagon({ size, rotate, x, y } = { size: 50, rotate: 0, x: 0, y: 0 }) {
	const hexagon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

	const points = Array(6).fill(undefined).map((_, idx) => ({
		x: x + Math.cos((rotate + 60 * idx) * Math.PI / 180) * size,
		y: y + Math.sin((rotate + 60 * idx) * Math.PI / 180) * size
	}))

	const joinedPoints = points.map(p => `${p.x},${p.y}`).join(' ')

	hexagon.setAttribute('points', joinedPoints)
	hexagon.setAttribute('fill', 'url(#gradient)')

	return hexagon
}