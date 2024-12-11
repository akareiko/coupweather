'use client';
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RainWithClouds() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Add Clouds (First Cloud)
    const cloudTexture1 = new THREE.TextureLoader().load("https://lh3.googleusercontent.com/proxy/FXcuT_hXNBPLi1YUN9Fr3Ad0wNhpljOcmcNlQtLs9s-wcrc_91Yu-ElZNL6IWhll9vtJrFqTiLh9quw");
    const cloudMaterial1 = new THREE.SpriteMaterial({ 
      map: cloudTexture1, 
      transparent: true,
      opacity: 0.05
    });
    const cloud1 = new THREE.Sprite(cloudMaterial1);
    cloud1.position.set(Math.random() * 10 - 7, 3 + Math.random() * 2, 0);  
    cloud1.scale.set(24, 8, 1);
    scene.add(cloud1);

    // Add Clouds (Second Cloud)
    const cloudTexture2 = new THREE.TextureLoader().load("https://static.vecteezy.com/system/resources/thumbnails/012/595/172/small_2x/realistic-white-cloud-png.png");
    const cloudMaterial2 = new THREE.SpriteMaterial({ 
      map: cloudTexture2, 
      transparent: true,
      opacity: 0.2
    });
    const cloud2 = new THREE.Sprite(cloudMaterial2);
    cloud2.position.set(Math.random() * 10 - 7, 3 + Math.random() * 2, 0);
    cloud2.scale.set(21, 7, 1);
    scene.add(cloud2);

    // Camera Position
    camera.position.z = 5;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate Clouds
      cloud1.position.x += 0.001;
      // cloud1.position.x += 0.08;
      if (cloud1.position.x > 15) cloud1.position.x = -Math.random() * 10 - 15; // Reset to a random off-screen position

      cloud2.position.x += 0.002;
      // cloud2.position.x += 0.08;
      if (cloud2.position.x > 15) cloud2.position.x = -Math.random() * 10 - 15;

      renderer.render(scene, camera);
    };

    animate();

  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}