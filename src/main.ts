import { BoxGeometry, HemisphereLight, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three/src/Three.js';
import './style.css'
import { Graphics } from './graphics';

window.onload = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const scene = new Scene();

  const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const graphics: Graphics = new Graphics(scene, camera, renderer);

  graphics.camera.position.z = 4;
  graphics.camera.lookAt(0, 0, 0);
  const skyColor = 0xB1E1FF;
  const groundColor = 0x3d3729;
  const intensity = 0.8;
  const light = new HemisphereLight(skyColor, groundColor, intensity);
  graphics.scene.add(light);

  const geometry = new BoxGeometry( 1, 1, 1 );
  const material = new MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new Mesh( geometry, material );
  scene.add( cube );

  graphics.render();

  camera.position.z = 5;
}