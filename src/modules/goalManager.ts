import { LerpData, isInBounds } from "./walk";

// camera object to get user position
export const camera = Camera.instance

// list of possible goals
export enum Goal {
    Idle,
    Sit,
    Follow,
    GoDrink,
    Drinking
  }

// store the current and last goal
@Component('behavior')
export class Behavior {
  goal: Goal = Goal.Idle
  previousGoal: Goal = Goal.Idle
  timer: number = 1
}

// component group listing all creatures
export const creatures = engine.getComponentGroup(Behavior)

// evaluate goals randomly
export class SwitchGoals implements ISystem {
    update(dt: number) {
      for (let creature of creatures.entities) {
        let behavior = creature.getComponent(Behavior)
        let walk = creature.getComponent(LerpData)
        let transform = creature.getComponent(Transform)
        behavior.timer -= dt
        if (behavior.timer < 0) {
          behavior.timer = 2
          switch (behavior.goal) {
            case Goal.Idle:
              considerGoals( creature, [
                { goal: Goal.Sit, odds: 0.0 },
                { goal: Goal.Follow, odds: 1.0 }
              ])
              break
            case Goal.Drinking:
              considerGoals(creature, [{ goal: Goal.Sit, odds: 0.0 }])
              break
            case Goal.Follow:
              considerGoals(creature, [{ goal: Goal.Idle, odds: 0.0 }])
              break
            case Goal.GoDrink:
              break
            case Goal.Sit:
              considerGoals(creature, [{ goal: Goal.Follow, odds: 1.0 }])
              break
          }
          if (behavior.goal == Goal.Follow) {
            let newTarget = camera.position.clone()
            newTarget.y = camera.position.y - 0.1
            walk.target = newTarget
            walk.origin = transform.position
            walk.fraction = 0
          }
        }
        if (
          behavior.goal == Goal.GoDrink &&
          Vector3.Distance(walk.target, transform.position) < 1
        ) {
          setCreatureGoal(creature, Goal.Drinking)
          walk.fraction = 1
        }
        if (
          behavior.goal == Goal.Follow &&
          Vector3.Distance(walk.target, transform.position) < 2.5
        ) {
          setCreatureGoal(creature, Goal.Sit)
          walk.fraction = 1
        }
        setAnimations(creature)
      }
    }
}

// choose randomly between goal options
export function considerGoals(creature: IEntity, goals: { goal: Goal; odds: number }[]) {
    for (let i = 0; i < goals.length; i++) {
      if (Math.random() < goals[i].odds) {
        switch (goals[i].goal) {
          case Goal.Follow:
            if (!isInBounds(camera.position)) {
              continue
            }
        }
        setCreatureGoal(creature, goals[i].goal)
        return
      }
    }
}

// set the values in the Behavior component
export function setCreatureGoal(creature: IEntity, goal: Goal) {
    let behavior = creature.getComponent(Behavior)
    behavior.previousGoal = behavior.goal
    behavior.goal = goal
    log('new goal: ' + goal)
}

// set animations
export function setAnimations(creature: IEntity) {
    let sit = creature.getComponent(Animator).getClip('fly')
    let stand = creature.getComponent(Animator).getClip('fly')
    let walk = creature.getComponent(Animator).getClip('fly')
    let drink = creature.getComponent(Animator).getClip('fly')
    let idle = creature.getComponent(Animator).getClip('fly')
  
    sit.playing = false
    stand.playing = false
    walk.playing = false
    drink.playing = false
	  idle.playing = false
	  stand.playing = false
  
    switch (creature.getComponent(Behavior).goal) {
      case Goal.Sit:
		sit.playing = true
		//sit.looping = false
        break
      case Goal.Follow:
        walk.playing = true
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
    // if (creature.getComponent(Behavior).previousGoal == Goal.Sit) {
	//   stand.playing = true
	//   stand.looping = false
    // }
  }