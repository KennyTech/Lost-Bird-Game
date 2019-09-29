//[MAIN]

import { CreatePagodas, CreateBasePond, CreateFoliage, CreatePlatforms } from "./Scenes/Pond";
import { CreateBaseIsle } from "./Scenes/Isle";

CreatePagodas();
CreateBasePond();
CreateFoliage();
CreatePlatforms();
CreateBaseIsle();

/* ==============================
 * ====== BACKGROUND MUSIC ======
 * ============================== */
const musicEntity = new Entity()

let song = new AudioClip("sounds/One Way Home.mp3")
//let song = new AudioClip("sounds/Deep Under.mp3")
//let song = new AudioClip("sounds/Forgotten.mp3")
//let song = new AudioClip("sounds/Vision.mp3")

let music = new AudioSource(song)
music.playing = true
musicEntity.addComponent(music)
engine.addEntity(musicEntity)

/* ==============================
 * ========== Slime AI ==========
 * ============================== */

import { LerpData, LerpMove } from "./modules/walk";
import { SwitchGoals, Behavior, Goal, setCreatureGoal } from "./modules/goalManager";

// Init
export const camera = Camera.instance
engine.addSystem(new SwitchGoals())
engine.addSystem(new LerpMove())

// ==========

export function setAnimations(creature: IEntity) {
  let sit = creature.getComponent(Animator).getClip('bounce')
  let stand = creature.getComponent(Animator).getClip('bounce')
  let walk = creature.getComponent(Animator).getClip('bounce')
  let drink = creature.getComponent(Animator).getClip('bounce')
  let idle = creature.getComponent(Animator).getClip('bounce')

  sit.playing = false
  stand.playing = false
  walk.playing = false
  drink.playing = false
  idle.playing = false

  switch (creature.getComponent(Behavior).goal) {
    case Goal.Sit:
	  sit.playing = true
	  //sit.looping = false
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
	//sit.looping = false
  }
}

const creature = new Entity()
creature.addComponent(new GLTFShape('models/Bird_1.gltf'))
creature.addComponent(new Animator())
let idleAnimation = new AnimationState('fly')

creature.getComponent(Animator).addClip(idleAnimation)

creature.getComponent(Animator)
  .getClip('fly')
  .play()

creature.addComponent(new Transform({
  position: new Vector3(-10, 1, 3)
}))
creature.addComponent(new Behavior())
creature.addComponent(new LerpData())
creature.addComponent(
  new OnClick(e => {
    log('clicked creature: following')
    setCreatureGoal(creature, Goal.Follow)
    /*
    if (creature.getComponent(Behavior).goal == Goal.Sit) {
	  setCreatureGoal(creature, Goal.Idle)
    } else {
      setCreatureGoal(creature, Goal.Sit)
      creature.getComponent(LerpData).fraction = 1
    }
    */
  })
)
engine.addEntity(creature)



// ===== End of Slime AI =====


/* ===============================
 * ======= Particle System =======
 * =============================== */

 /*
const particleColor = new Color3(0.5, 0.1, 1)

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
const origin = new Vector3(-13, 1.2, -4)
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

*/ 

// === End of Particle System ===