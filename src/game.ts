//[MAIN]

import { CreatePagodas, CreateBasePond, CreateFoliage, CreatePlatforms } from "./Scenes/Pond";
import { CreateBaseIsle } from "./Scenes/Isle";

CreatePagodas();
CreateBasePond();
CreateFoliage();
CreatePlatforms();
CreateBaseIsle();

// Good job Fukuzawa much efficient code

// Particle Test

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