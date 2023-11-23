import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.116.1/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.116.1/examples/jsm/controls/OrbitControls.js";
var scene;
var camera;
var renderer;

function init() 
{
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 0.01;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const radius = 360;
  const widhtsegment = 60;
  const heightsegments = 60;
  const geometry = new THREE.SphereGeometry(
    radius,
    widhtsegment,
    heightsegments
  );
 
  const texture = new THREE.TextureLoader().load('https://cdn.glitch.global/bfabbb42-3b9a-4100-b838-8c3dc9d93851/20231121_174308.jpg?v=1700679347366' );
  const material = new THREE.MeshBasicMaterial({map:texture, side: THREE.DoubleSide });
  
 const primitive3D = new THREE.Mesh(geometry, material);  
  scene.add(primitive3D);
  
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
  renderer.render(scene, camera);
  
  
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
init();
animate();