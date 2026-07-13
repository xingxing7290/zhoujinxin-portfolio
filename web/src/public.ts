import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type * as ThreeNamespace from "three";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

type NavigatorWithMemory = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };

const nav = navigator as NavigatorWithMemory;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
const lowPower = reducedMotion || Boolean(nav.connection?.saveData) || (nav.deviceMemory ?? 8) <= 4 || navigator.hardwareConcurrency <= 4 || coarsePointer;
document.documentElement.classList.add(lowPower ? "motion-lite" : "motion-full");

function initReveals() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  if (reducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
}

function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;
  let previous = 0;
  window.addEventListener(
    "scroll",
    () => {
      const current = window.scrollY;
      header.classList.toggle("is-condensed", current > 48);
      header.classList.toggle("is-hidden", current > previous && current > 420);
      previous = current;
    },
    { passive: true },
  );
}

function initPointerEffects() {
  if (coarsePointer || reducedMotion) return;
  document.querySelectorAll<HTMLElement>(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const box = element.getBoundingClientRect();
      gsap.to(element, { x: (event.clientX - box.left - box.width / 2) * 0.14, y: (event.clientY - box.top - box.height / 2) * 0.14, duration: 0.35, ease: "power3.out" });
    });
    element.addEventListener("pointerleave", () => gsap.to(element, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.35)" }));
  });
  document.querySelectorAll<HTMLElement>(".tilt").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const box = element.getBoundingClientRect();
      const rx = ((event.clientY - box.top) / box.height - 0.5) * -3;
      const ry = ((event.clientX - box.left) / box.width - 0.5) * 4;
      element.style.setProperty("--rx", `${rx}deg`);
      element.style.setProperty("--ry", `${ry}deg`);
    });
    element.addEventListener("pointerleave", () => {
      element.style.setProperty("--rx", "0deg");
      element.style.setProperty("--ry", "0deg");
    });
  });
}

function roundedBox(THREE: typeof ThreeNamespace, width: number, height: number, depth: number, radius: number) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSegments: 4, bevelSize: 0.06, bevelThickness: 0.06 });
}

async function initChipScene() {
  const canvas = document.querySelector<HTMLCanvasElement>("#chip-scene");
  const hero = document.querySelector<HTMLElement>(".hero");
  const steps = Array.from(document.querySelectorAll<HTMLElement>(".hero-step"));
  if (!canvas || !hero || lowPower) return;
  const THREE = await import("three");

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x090b0f, 0.032);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 1.3, 9.5);
  scene.add(new THREE.AmbientLight(0x91a4bf, 1.25));
  const key = new THREE.DirectionalLight(0xeaf2ff, 5.5);
  key.position.set(-3, 5, 4);
  scene.add(key);
  const rim = new THREE.PointLight(0x5b8cff, 16, 20);
  rim.position.set(5, -1, 2);
  scene.add(rim);

  const world = new THREE.Group();
  scene.add(world);
  const chip = new THREE.Mesh(
    roundedBox(THREE, 3.5, 2.3, 0.38, 0.22),
    new THREE.MeshPhysicalMaterial({ color: 0x151b24, metalness: 0.86, roughness: 0.25, clearcoat: 0.6, clearcoatRoughness: 0.16 }),
  );
  chip.geometry.center();
  chip.rotation.x = -0.28;
  world.add(chip);

  const core = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.08, 1.05), new THREE.MeshPhysicalMaterial({ color: 0x1f3556, emissive: 0x193255, emissiveIntensity: 0.7, metalness: 0.7, roughness: 0.2 }));
  core.position.set(0, 0.26, 0.05);
  core.rotation.x = -Math.PI / 2 - 0.28;
  world.add(core);

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x718ebd, transparent: true, opacity: 0.46 });
  const paths = new THREE.Group();
  for (let i = 0; i < 18; i += 1) {
    const angle = (i / 18) * Math.PI * 2;
    const start = new THREE.Vector3(Math.cos(angle) * 1.5, Math.sin(angle) * 0.95, 0);
    const end = new THREE.Vector3(Math.cos(angle) * (4.3 + (i % 3)), Math.sin(angle) * (2.7 + (i % 2)), -1 - (i % 4) * 0.55);
    const curve = new THREE.CatmullRomCurve3([start, start.clone().multiplyScalar(1.25), end]);
    paths.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(28)), lineMaterial));
  }
  world.add(paths);

  const nodeGeometry = new THREE.IcosahedronGeometry(0.11, 1);
  const nodeMaterial = new THREE.MeshStandardMaterial({ color: 0x9cb8e9, emissive: 0x406aaf, emissiveIntensity: 1.4, metalness: 0.4, roughness: 0.25 });
  const nodes = new THREE.Group();
  const nodePositions = [[-4.4, 2.2, -2], [4.9, 1.4, -3], [-3.6, -2.8, -4], [3.2, -2.4, -5], [0.4, 3.7, -6]];
  nodePositions.forEach(([x, y, z]) => {
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    node.position.set(x, y, z);
    nodes.add(node);
  });
  world.add(nodes);

  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(420 * 3);
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 18;
    positions[i + 1] = (Math.random() - 0.5) * 12;
    positions[i + 2] = -Math.random() * 14;
  }
  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  scene.add(new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: 0x7797c8, size: 0.018, transparent: true, opacity: 0.6 })));

  const cameraTrack = [
    { x: 0, y: 1.3, z: 9.5, lookX: 0, lookY: 0 },
    { x: 3.5, y: 1.7, z: 6.7, lookX: 0.4, lookY: -0.2 },
    { x: -3.7, y: -0.2, z: 4.2, lookX: -0.2, lookY: 0 },
    { x: 1.8, y: 3.1, z: 1.4, lookX: 0, lookY: 0.4 },
    { x: 0, y: 0.3, z: -2.2, lookX: 0, lookY: 0 },
  ];
  const state = { progress: 0 };
  gsap.to(state, {
    progress: 1,
    ease: "none",
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom bottom", scrub: 0.7 },
  });
  steps.forEach((step) => ScrollTrigger.create({
    trigger: step,
    start: "top 62%",
    end: "bottom 38%",
    onToggle: (self) => step.classList.toggle("is-active", self.isActive),
  }));

  function resize() {
    const width = canvas!.clientWidth;
    const height = canvas!.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  let frame = 0;
  function render() {
    const segment = Math.min(cameraTrack.length - 2, Math.floor(state.progress * (cameraTrack.length - 1)));
    const local = state.progress * (cameraTrack.length - 1) - segment;
    const eased = local * local * (3 - 2 * local);
    const a = cameraTrack[segment];
    const b = cameraTrack[segment + 1];
    camera.position.set(THREE.MathUtils.lerp(a.x, b.x, eased), THREE.MathUtils.lerp(a.y, b.y, eased), THREE.MathUtils.lerp(a.z, b.z, eased));
    camera.lookAt(THREE.MathUtils.lerp(a.lookX, b.lookX, eased), THREE.MathUtils.lerp(a.lookY, b.lookY, eased), -1.5 - state.progress * 2);
    world.rotation.y = state.progress * 1.8 + frame * 0.00035;
    world.rotation.z = Math.sin(state.progress * Math.PI * 2) * 0.12;
    nodes.children.forEach((node, index) => { node.scale.setScalar(1 + Math.sin(frame * 0.025 + index) * 0.22); });
    renderer.render(scene, camera);
    frame += 1;
    requestAnimationFrame(render);
  }
  resize();
  render();
}

initReveals();
initHeader();
initPointerEffects();
initChipScene();
