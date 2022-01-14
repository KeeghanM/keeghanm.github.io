import * as THREE from 'three'

const geometry = new THREE.PlaneGeometry(100,100,25,25)
const material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true})
let terrainMesh = new THREE.Mesh(geometry,material)
terrainMesh.rotateX(90)

export const terrain = terrainMesh