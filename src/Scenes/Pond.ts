//[SCENE THAT CREATES POND SCENE]

import { basicObject, createGrass, glowPlatform } from "../Game_Objects/index";
import utils from "../../node_modules/decentraland-ecs-utils/index";

export function CreatePagodas(): void {
    const pagoda1 = new basicObject(
        new GLTFShape("models/Pagoda.glb"),
        { position: new Vector3(-17, 1, 3) }
    );
    const pagoda2 = new basicObject(
        new GLTFShape("models/Pagoda.glb"),
        { position: new Vector3(-17, 1, -3) }
    );
}

export function CreateBasePond(): void {
    const ground = new basicObject(
        new GLTFShape("models/Ground.glb"),
        { position: new Vector3(0, 0, 0) }
    );
    const wallBoarder = new basicObject(
        new GLTFShape("models/WallBoarder.glb"),
        { position: new Vector3(0, 0, 0) }
    );
    const water = new basicObject(
        new GLTFShape("models/Water.glb"),
        { position: new Vector3(0, 0, 0) }
    );
    const brokenWall = new basicObject(
        new GLTFShape("models/BrokenWall.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const rock_1 = new basicObject(
        new GLTFShape("models/Rock_1.glb"),
        { position: new Vector3(-3, 0, -15) }
    );
    const rock_2 = new basicObject(
        new GLTFShape("models/Rock_2.glb"),
        { position: new Vector3(0, 0, 0) }
    );
    const rock_3 = new basicObject(
        new GLTFShape("models/Rock_3.glb"),
        { position: new Vector3(3, 0, 15) }
    );
    const fish_1 = new basicObject(
        new GLTFShape("models/Bird_1.glb"),
        { position: new Vector3(-25, 2.5, 5) }
    );
    const bird_1 = new basicObject(
        new GLTFShape("models/Fish_1.glb"),
        { position: new Vector3(-25, 0.5, 5) }
    );
}

export function CreateFoliage(): void {
    const grass_1 = new basicObject(
        new GLTFShape("models/Grass_new.glb"),
        new Transform({
            position: new Vector3(-19, .5, -2),
            rotation: Quaternion.Euler(0, 180, 0)
        })
    )
    const grass_2 = new basicObject(
        new GLTFShape("models/Grass_new.glb"),
        new Transform({
            position: new Vector3(-15, 0.7, 4),
            rotation: Quaternion.Euler(0, 45, 0)
        })
    )
    const grass_3 = new basicObject(
        new GLTFShape("models/Grass_new.glb"),
        { position: new Vector3(-14, 0.65, -3) }
    )
    const grass_4 = new basicObject(
        new GLTFShape("models/Grass_new.glb"),
        { position: new Vector3(-32, .65, 5) }
    )
    const palmTree = new basicObject(
        new GLTFShape("models/PalmTree.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const grass_new = new basicObject(
        new GLTFShape("models/Grass_new.glb"),
        { position: new Vector3(-5, 0, 0)}
    )

    const grass_new_animated_1 = new createGrass(
        { position: new Vector3(-6, 0, 3)}
    )
    const grass_new_animated_2 = new createGrass(
        { position: new Vector3(-8, 0, 3)}
    )

    /*
    const slime_1 = new basicObject(
        new GLTFShape("models/Slime_2.glb"),
        { position: new Vector3(-10, 1, 3)}
    )

    slime_1.addComponent(new Animator)
    let slimeClip = new AnimationState('bounce')
    slime_1.getComponent(Animator).addClip(slimeClip)
    slime_1.addComponent(new OnClick(e => {
        }))
    engine.addEntity(slime_1)
    let anim = slime_1.getComponent(Animator).getClip('bounce')
    anim.play()
    */

    // for (let x = 0; x < 10; x += 1) {
    //     for (let z = 0; z < 10; z += 1) {
    //         const grass_new_animated_3 = new createGrass(
    //             { position: new Vector3(x-15, 0.85-0.1*x, z)}
    //         )
    //     }
    // }
}


export function CreatePlatforms(): void{
    const platform_1_1 = new glowPlatform(
        { position: new Vector3(-24, -0.5, -5) }
    )
    const platform_1_2 = new glowPlatform(
        { position: new Vector3(-24, -0.5 - (0.8 * 1), -3.2) }
    )
    const platform_1_3 = new glowPlatform(
        { position: new Vector3(-25.8, -0.5 - (0.8 * 2), -3.2) }
    )
    const platform_1_4 = new glowPlatform(
        { position: new Vector3(-25.8, -0.5 - (0.8 * 3), -5) }
    )
    const platform_1_5 = new glowPlatform(
        { position: new Vector3(-28, -0.5, -8) }
    )
    const platform_1_6 = new glowPlatform(
        { position: new Vector3(-30, -0.5, -4) }
    )
    const platform_1_7 = new glowPlatform(
        { position: new Vector3(-34, -0.5, -2) }
    )
    const platform_1_8 = new glowPlatform(
        { position: new Vector3(-38, -0.5, -4) }
    )
    const platform_1_9 = new glowPlatform(
        { position: new Vector3(-40.5, -0.5, 0) }
    )
    const platform_1_10 = new glowPlatform(
        new Transform({
            position: new Vector3(-44.5, 2.5, 9),
            rotation: Quaternion.Euler(0, 0, -90),
            scale: new Vector3(1.0, 1.5, 1.0)
        })
    )
    const platform_1_11 = new glowPlatform(
        { position: new Vector3(-39.5, -0.5, 3) }
    )
    const platform_1_12 = new glowPlatform(
        { position: new Vector3(-40.25, -0.5, 6.5) }
    )

    const rune = new basicObject(
        new GLTFShape("models/Rune_rock.glb"),
        {   position: new Vector3(-32, 0.3, 6),
            rotation: Quaternion.Euler(0, -90, 0),
            scale: new Vector3(0.9,0.9,0.9)
        }
    )
    rune.addComponent(new Animator)
    let spinClip1 = new AnimationState('spin')
    rune.getComponent(Animator).addClip(spinClip1)
    let anim = rune.getComponent(Animator).getClip('spin')
    engine.addEntity(rune)
    let runOnce = false
    rune.addComponent(new OnClick(e => {
        if (runOnce == false) 
        {
            runOnce = true
            log('clicked rune rock')
            anim.play()
            anim.looping = false

            // Sound Effect
            let sound = new AudioClip("sounds/stones.mp3")
            rune.addComponent(new AudioSource(sound))
            rune.getComponent(AudioSource).playOnce()

            // Glow
            let glowAnim = platform_1_1.getComponent(Animator).getClip('glow')
            anim.play()
            platform_1_1.getComponent(AudioSource).playOnce()
            anim.looping = false

            // Rise Platforms
            let counter = 0
            class RisePlatforms {
                update() {
                    counter ++
                    if (counter <= 180) {
                        let increment = Vector3.Up().scale(0.011)
                        platform_1_1.getComponent(Transform).translate(increment)
                        platform_1_2.getComponent(Transform).translate(increment)
                        platform_1_3.getComponent(Transform).translate(increment)
                        platform_1_4.getComponent(Transform).translate(increment)
                        platform_1_5.getComponent(Transform).translate(increment)
                        platform_1_6.getComponent(Transform).translate(increment)
                        platform_1_7.getComponent(Transform).translate(increment)
                        platform_1_8.getComponent(Transform).translate(increment)
                        platform_1_9.getComponent(Transform).translate(increment)
                        platform_1_11.getComponent(Transform).translate(increment)
                        platform_1_12.getComponent(Transform).translate(increment)
                    }
                }
            }
            engine.addSystem(new RisePlatforms())
        }
        }))
    
}