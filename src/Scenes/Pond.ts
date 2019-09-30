//[SCENE THAT CREATES POND SCENE]

import { basicObject, createGrass, glowPlatform } from "../Game_Objects/index";
import utils from "../../node_modules/decentraland-ecs-utils/index";

export function CreatePagodas(): void {
    const pagoda1 = new basicObject(
        new GLTFShape("models/Pagoda.glb"),
        { position: new Vector3(-31, 1, 6) }
    );
    const pagoda2 = new basicObject(
        new GLTFShape("models/Pagoda.glb"),
        { position: new Vector3(-17, 1, 3) }
    );
    const pagoda3 = new basicObject(
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

    const rune = new basicObject(
        new GLTFShape("models/Rune_rock.glb"),
        { position: new Vector3(-8, 1, 3)}
    )

    // Clicking this rune is supposed to eventually activate all the platforms (make them rise up from the ground)
    rune.addComponent(new Animator)
    let spinClip1 = new AnimationState('spin')
    rune.getComponent(Animator).addClip(spinClip1)
    let anim = rune.getComponent(Animator).getClip('spin')
    rune.addComponent(new OnClick(e => {
        log('clicked rune rock')
        anim.play()
        anim.looping = false
        }))
    engine.addEntity(rune)

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
    const platform_1 = new glowPlatform(
        { position: new Vector3(-24, 1.8, -5) }
    )
    const platform_2 = new glowPlatform(
        { position: new Vector3(-24, 1.8 - (0.8 * 1), -3.2) }
    )
    const platform_3 = new glowPlatform(
        { position: new Vector3(-25.8, 1.8 - (0.8 * 2), -3.2) }
    )
    const platform_4 = new glowPlatform(
        { position: new Vector3(-25.8, 1.8 - (0.8 * 3), -5) }
    )
    const platform_5 = new glowPlatform(
        { position: new Vector3(-28, 1.8, -8) }
    )
    const platform_6 = new glowPlatform(
        { position: new Vector3(-30, 1.8, -4) }
    )
    const platform_7 = new glowPlatform(
        { position: new Vector3(-34, 1.8, -2) }
    )
    const platform_8 = new glowPlatform(
        { position: new Vector3(-38, 1.8, -4) }
    )
    const platform_9 = new glowPlatform(
        { position: new Vector3(-40.5, 1.8, 0) }
    )
    const platform_10 = new glowPlatform(
        new Transform({
            position: new Vector3(-43, 2.5, 10),
            rotation: Quaternion.Euler(0, 0, -90),
            scale: new Vector3(1.0, 1.8, 1.0)
        })
    )
    const platform_11 = new glowPlatform(
        { position: new Vector3(-40, 1.8, 3) }
    )
    const platform_12 = new glowPlatform(
        { position: new Vector3(-42, 1.8, 8) }
    )

    class SimpleMove implements ISystem {
        update() {
            let transform = myEntity.getComponent(Transform)
            let distance = Vector3.Forward().scale(0.1)
            transform.translate(distance)
        }
    }
    engine.addSystem(new SimpleMove())
      
    const myEntity = new Entity()
    myEntity.addComponent(new Transform())
    myEntity.addComponent(new BoxShape())
      
    engine.addEntity(myEntity)

    /*
    let path_1_1 = []
    path_1_1[0] = new Vector3(-40, 1.8, 3)
    path_1_1[1] = new Vector3(-40, 1.8, 10)
    path_1_1[2] = new Vector3(-40, 1.8, 3)
    platform_1_11.addComponent(new utils.Interval(4, () => {
        platform_1_11.addComponent(new utils.FollowPathComponent(path_1_1, 4));
    }))
    */
    
}