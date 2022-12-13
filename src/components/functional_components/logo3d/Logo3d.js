import React from "react"
import { useRef } from "react";
import { useEffect } from "react";

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import logo_3d from "../../../assets/3d/logo-beije.glb";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Logo3d = () => {

  // const sceneRef = useRef(new THREE.Scene());
  // const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  // const rendererRef = useRef(new THREE.WebGLRenderer());
  const containerRef = useRef();

  useEffect(() => {
    (async () => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const loader = new GLTFLoader();
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, containerRect.width / containerRect.height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      // const controls = new OrbitControls(camera, renderer.domElement);


      const light = new THREE.AmbientLight(0x100100100, 5); // soft white light
      scene.add(light);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight2.position.set(5, 100, 300);
      scene.add(directionalLight, directionalLight2);
      const pointLight = new THREE.PointLight(0xff0000, 1, 100);
      const pointLight2 = new THREE.PointLight(0xff0000, 1, 100);
      pointLight.position.set(10, 50, 10);
      pointLight2.position.set(0, 0, 30);
      scene.add(pointLight, pointLight2);

      renderer.setSize(containerRect.width, containerRect.height);
      renderer.setClearColor(0xffffff, 0);

      containerRef.current.appendChild(renderer.domElement);

      const modelLogo = await loadGLB();

      function loadGLB() {
        return new Promise(resolve => {
          loader.load(logo_3d, gltf => resolve(gltf.scene))
        })
      }

      modelLogo.position.x -= 0.3;
      modelLogo.position.y -= 1.9;
      modelLogo.position.z -= 1.25;

      modelLogo.rotation.x += 0.25;
      // modelLogo.rotation.y -= 0.2;
      // modelLogo.rotation.z += 0.1;

      // modelLogo.scale(1, 1, 1)


      scene.add(modelLogo);

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
      }

      animate();
    })()

  }, [])

  return (
    <>
      {/* 3D ELEMENT */}
      < div ref={containerRef} id="container" style={{ width: "1234px", height: "857px", border: "1px solid red" }
      }>

      </div >
    </>
  )
}

export default Logo3d