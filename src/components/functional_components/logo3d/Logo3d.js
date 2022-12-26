import React from "react"
import { useRef } from "react";
import { useEffect } from "react";

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import logo_3d from "../../../assets/3d/logo-beije.glb";

const Logo3d = () => {

  // const sceneRef = useRef(new THREE.Scene());
  // const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  // const rendererRef = useRef(new THREE.WebGLRenderer());
  const containerRef = useRef();

  useEffect(() => {

    (async () => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const loader = new GLTFLoader();
      const clock = new THREE.Clock();
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, (containerRect.width - 100) / (containerRect.height - 100), 0.1, 1000);
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

      modelLogo.position.x += 0.6;
      modelLogo.position.y -= 1.3;
      modelLogo.position.z -= 5;

      modelLogo.rotation.x += 0.25;
      modelLogo.rotation.y -= 0.2;

      modelLogo.scale.set(0.8, 0.8, 0.8)

      scene.add(modelLogo);

      camera.position.z = 5;



      function animate() {
        requestAnimationFrame(animate);

        // controls.update();

        const time = clock.getElapsedTime();
        modelLogo.position.y += (Math.cos(time) * 0.004);

        renderer.render(scene, camera);
      }

      animate();

      function handleWindowResize() {
        const { width, height } =
          renderer.domElement.parentElement.getBoundingClientRect();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
      window.addEventListener("resize", handleWindowResize, false);
      return () => {
        window.removeEventListener("resize", handleWindowResize, false);
      };

    })()

  }, [])

  return (
    <>
      {/* 3D ELEMENT */}
      < div ref={containerRef} id="container" style={{ width: "100%", height: "100%" }
      }>

      </div >
    </>
  )
}

export default Logo3d