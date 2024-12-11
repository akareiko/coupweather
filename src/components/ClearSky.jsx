'use client';
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NightStars() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000033, 0);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const starGeometry = new THREE.SphereGeometry(0.3, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const stars = [];

    for (let i = 0; i < 2000; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      star.position.set(x, y, z);
      scene.add(star);
      stars.push(star);
    }

    camera.position.z = 1;

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}