import * as THREE from 'three'
import { terrain } from './terrain'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)

scene.add(terrain)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene,camera)
}
animate()
