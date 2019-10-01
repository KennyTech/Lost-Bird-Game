//[MAIN]

/* Table of Contents: 
 *    [1] Level & Object Creation & Dialogue
 *    [2] Background Music
 *    [3] Bird AI
 */

 // GLOBALS
 const camera = Camera.instance

/* ==========================================
 * ===== [1.1] LEVEL & OBJECT CREATION ======
 * ========================================== */

import { CreatePagodas, CreateBasePond, CreateFoliage, CreatePlatforms } from "./Scenes/Pond";
import { CreateBaseIsle, CreateIsleProps, CreateIslePlatforms } from "./Scenes/Isle";

CreatePagodas();
CreateBasePond();
CreateFoliage();
CreatePlatforms();
CreateBaseIsle();
CreateIsleProps();
CreateIslePlatforms();

// End of level & object creation

/* ===========================
 * ===== [1.2] DIALOGUE ======
 * =========================== */

import { TutorialDialogue } from "./Scenes/Tutorial";

// Create game canvas UI
const gameCanvas = new UICanvas();

// Define the dialog tree
const dialog = new TutorialDialogue(gameCanvas);

// Start tutorial dialogue 
dialog.run();

// const voiceEnt = new Entity()
// voiceEnt.addComponent(new Transform({ position: new Vector3(camera.position.x, camera.position.y, camera.position.z)}))
// let voice1 = new AudioClip("sounds/bird_tutorial_voice.mp3")
// voiceEnt.addComponent(new AudioSource(voice1))
// voiceEnt.getComponent(AudioSource).playOnce()

/* =================================
 * ===== [2] BACKGROUND MUSIC ======
 * ================================= */

// Adjustable Variables
let songChoice = "sounds/Deep_Under.mp3" // Choices: Deep_Under.mp3, Forgotten.mp3

// Declaration and setup
const musicEntity = new Entity()
//musicEntity.addComponent(new Transform({ position: new Vector3(-246, 40, -49)})) // Position 3D sound at goal so it gets louder as you near it
let song = new AudioClip(songChoice)
let music = new AudioSource(song)

// Play music
music.playing = true
music.loop = true
music.volume = 1.0
musicEntity.addComponent(music)
engine.addEntity(musicEntity)

// === End of background music ===

/* ====================================
 * ======== [3.1] Lite-bird AI ========
 * ==================================== */


// Adjustable Variables
let animationName = "fly"
let creatureModel = "models/Etherbird_2.gltf"

// Import required packages
import { LerpData, LerpMove } from "./modules/walk";
import { SwitchGoals, Behavior, Goal, setCreatureGoal } from "./modules/goalManager";
import utils from "./../node_modules/decentraland-ecs-utils/index";

// Initialization
engine.addSystem(new SwitchGoals())
engine.addSystem(new LerpMove())

// Setting animations and AI behavior
export function setAnimations(creature: IEntity) {
  let sit = creature.getComponent(Animator).getClip(animationName)
  let stand = creature.getComponent(Animator).getClip(animationName)
  let walk = creature.getComponent(Animator).getClip(animationName)
  let drink = creature.getComponent(Animator).getClip(animationName)
  let idle = creature.getComponent(Animator).getClip(animationName)

  sit.playing = false
  stand.playing = false
  walk.playing = false
  drink.playing = false
  idle.playing = false

  switch (creature.getComponent(Behavior).goal) {
    case Goal.Sit:
	    sit.playing = true
      break
    case Goal.Follow:
      walk.playing = true
      walk.looping = true
    case Goal.GoDrink:
      walk.playing = true
      break
    case Goal.Drinking:
      drink.playing = true
      break
    case Goal.Idle:
      idle.playing = true
      break
  }
  if (creature.getComponent(Behavior).previousGoal == Goal.Sit) {
	stand.playing = true
  }
}

// Spawning in the creature
const creature = new Entity()
creature.addComponent(new GLTFShape(creatureModel))
creature.addComponent(new Animator())
let idleAnimation = new AnimationState(animationName)

creature.getComponent(Animator).addClip(idleAnimation)

creature.getComponent(Animator).getClip(animationName).play()

creature.addComponent(new Transform({
  position: new Vector3(-10, 1, 3)
}))
creature.addComponent(new Behavior())
creature.addComponent(new LerpData())

//creature.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0)))

engine.addEntity(creature)

// ===== End of Lite-bird AI =====


  /* ================================
  * ====== Particle System ======
  * ================================ */

  // Adjustable Variables
  const particleColor = new Color3(0.05, 0.05, 1)

  @Component('particle')
  class Particle {
  life = Math.random()
  seed = Math.random() - Math.random()
  constructor(public origin: Vector3) {}
  }

  const material = new Material()
  material.albedoColor = particleColor;
  material.emissiveColor = particleColor;
  material.emissiveIntensity = 3

  let fireHeight = 0

  class ParticleSystem {
  group = engine.getComponentGroup(Particle)
  update(dt: number) {
      if (true) {
      fireHeight = fireHeight + (2 - fireHeight) / 10
      shape.visible = true
      for (const entity of this.group.entities) {
          const particle = entity.getComponent(Particle)
          const transform = entity.getComponent(Transform)
          const currentMaterial = (particle.life * 10) | 0
          particle.life += dt
          particle.life %= 1
          transform.position = new Vector3(
          particle.origin.x +
              Math.sin((particle.life + particle.seed) * 5) *
              (1 - particle.life / 1.5) *
              0.8,
          particle.origin.y + particle.life * fireHeight * 2,
          particle.origin.z +
              Math.cos((particle.life + particle.seed) * 5) *
              (1 - particle.life / 1.5) *
              0.8
          )
          const scale = 0.2 - particle.life / 5
          transform.scale = new Vector3(scale, scale, scale)
          transform.rotation = Quaternion.Euler(
          0,
          0,
          particle.life * 360 + particle.seed * 360
          )
          const nextMaterial = (particle.life * 10) | 0

      }
      } else {
      fireHeight = 0
      shape.visible = false
      }
  }
  }

  const particles: Entity[] = []
  const origin = new Vector3(-32, 1.3, 6)
  const shape = new PlaneShape()
  const billboard = new Billboard()

  for (let i = 0; i < 50; i++) {
  const particle = new Entity()
  particle.addComponent(shape)
  particle.addComponent(billboard)
  particle.addComponent(material)
  particle.addComponent(new Particle(origin))
  particle.addComponent(
      new Transform({ position: origin, scale: new Vector3(0.1, 0.1, 0.1) })
  )
  engine.addEntity(particle)
  particles.push(particle)
  }

  engine.addSystem(new ParticleSystem())

  // === End of Particle System ===