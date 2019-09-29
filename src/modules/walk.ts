import { creatures } from "./goalManager";

// component to store lerp data
@Component('lerpData')
export class LerpData {
  target: Vector3 = Vector3.Zero()
  origin: Vector3 = Vector3.Zero()
  fraction: number = 0
}

// walk
export class LerpMove implements ISystem {
    update(dt: number) {
      for (let creature of creatures.entities) {
        let transform = creature.getComponent(Transform)
        let walk = creature.getComponent(LerpData)
        transform.lookAt(walk.target)
        if (walk.fraction < 1) {
          if (!isInBounds(walk.target)) return
          transform.position = Vector3.Lerp(
            walk.origin,
            walk.target,
            walk.fraction
          )
          walk.fraction += 1 / 45
        }
      }
    }
}

// check if the target is inside the scene's bounds
export function isInBounds(position: Vector3): boolean {
    return (
      true //position.x > 0.5 && position.x < 9.5 && position.z > 0.5 && position.z < 9.5
    )
}