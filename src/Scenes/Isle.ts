//[SCENE THAT CREATES ISLE]

import { basicObject, createGrass, glowPlatform } from "../Game_Objects/index";
import utils from "../../node_modules/decentraland-ecs-utils/index";

export function CreateBaseIsle(): void {
    const ground = new basicObject(
        new GLTFShape("models/Isle.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const water = new basicObject(
        new GLTFShape("models/Isle_water.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const isle_finish = new basicObject(
        new GLTFShape("models/Isle_Island_Finish.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const Boarder = new basicObject(
        new GLTFShape("models/Boarder.glb"),
        { position: new Vector3(0, 0, 0) }
    )
}
export function CreateIslePlatforms(): void {
    const platform_0 = new glowPlatform(
        { position: new Vector3(-130, 9.5, -54) }
    )
    const platform_1 = new glowPlatform(
        { position: new Vector3(-130, 12.5, -50) }
    )
    const platform_2 = new glowPlatform(
        { position: new Vector3(-130, 11, -52) }
    )
    const platform_3 = new glowPlatform(
        { position: new Vector3(-125, 12.5, -50) }
    )
    const platform_4 = new glowPlatform(
        { position: new Vector3(-125, 11.8, -55) }
    )
    const platform_5 = new glowPlatform(
        { position: new Vector3(-122, 11, -58) }
    )
    const platform_6 = new glowPlatform(
        { position: new Vector3(-117, 11, -58) }
    )
    const platform_7 = new glowPlatform(
        { position: new Vector3(-114, 11.5, -54) }
    )
    const platform_8 = new glowPlatform(
        { position: new Vector3(-114, 11.5, -50) }
    )
    const platform_8_1 = new glowPlatform(
        { position: new Vector3(-117, 12, -47.5) }
    )
    const platform_9 = new glowPlatform(
        { position: new Vector3(-114, 11.5, -45) }
    )
    const platform_10 = new glowPlatform(
        { position: new Vector3(0,0,0) }
    )
    const platform_11 = new glowPlatform(
        { position: new Vector3(0,0,0) }
    )
    const platform_12 = new glowPlatform(
        new Transform({
            position: new Vector3(-125.5, 12.5, -28.5),
            rotation: Quaternion.Euler(-90, 0, 0)
       })
    )
    const Big_Bird = new basicObject(
        new GLTFShape("models/Big_Bird.glb"),
        new Transform({
             position: new Vector3(-90, 0, 0),
             rotation: Quaternion.Euler(90, 0, -115)
        })
    )
    const Big_Bird2 = new basicObject(
        new GLTFShape("models/Big_Bird_rotate.glb"),
        new Transform({
             position: new Vector3(-178, 25, 20)
             //rotation: Quaternion.Euler(90, 0, -115)
        })
    )
    // const Cheat = new basicObject(
    //     new GLTFShape("models/Cheat.glb"),
    //     { position: new Vector3(0,0,0) }
    // )
    Big_Bird2.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0)))

    let path_1 = []
    path_1[0] = new Vector3(-114, 11.8, -40)
    path_1[1] = new Vector3(-124, 11.8, -40)
    path_1[2] = new Vector3(-114, 11.8, -40)
    platform_10.addComponent(new utils.Interval(7, () => {
        platform_10.addComponent(new utils.FollowPathComponent(path_1, 7));
    }))
    let path_2 = []
    path_2[0] = new Vector3(-124, 11.8, -37.75)
    path_2[1] = new Vector3(-114, 11.8, -37.75)
    path_2[2] = new Vector3(-124, 11.8, -37.75)
    path_2[3] = new Vector3(-124, 11.8, -30)
    path_2[4] = new Vector3(-124, 11.8, -37.75)
    platform_11.addComponent(new utils.Interval(7, () => {
        platform_11.addComponent(new utils.FollowPathComponent(path_2, 7));
    }))

    const platform_13 = new glowPlatform(
        { position: new Vector3(-228, 23, -55) }
    )
    let path_3 = []
    path_3[0] = new Vector3(-228, 23, -55)
    path_3[1] = new Vector3(-228, 20, -55)
    path_3[2] = new Vector3(-228, 23, -55)
    platform_13.addComponent(new utils.Interval(4, () => {
        platform_13.addComponent(new utils.FollowPathComponent(path_3, 4));
    }))
    const platform_14 = new glowPlatform(
        new Transform({
            position: new Vector3(-229, 24, -52.8),
            rotation: Quaternion.Euler(0, 0, -90)
        })
    )
    const platform_15 = new glowPlatform(
        new Transform({
            position: new Vector3(-229, 25.2, -51),
            rotation: Quaternion.Euler(0, 0, -90)
        })
    )
    const platform_16 = new glowPlatform(
        new Transform({
            position: new Vector3(-229, 26.4, -49.2),
            rotation: Quaternion.Euler(0, 0, -90)
        })
    )
    const platform_17 = new glowPlatform(
        new Transform({
            position: new Vector3(-229, 27.6, -51),
            rotation: Quaternion.Euler(0, 0, -90)
        })
    )
    let path_4 = []
    path_4[0] = new Vector3(-229, 27.6, -51)
    path_4[1] = new Vector3(-232, 27.6, -51)
    path_4[2] = new Vector3(-229, 27.6, -51)
    platform_17.addComponent(new utils.Interval(4, () => {
        platform_17.addComponent(new utils.FollowPathComponent(path_4, 4));
    }))
    const platform_18 = new glowPlatform(
        new Transform({
            position: new Vector3(-230.5, 28.8, -52.8),
            rotation: Quaternion.Euler(0, 0, -90)
        })
    )
    const platform_19 = new glowPlatform(
        new Transform({
            position: new Vector3(-230.5, 30, -54.6),
            rotation: Quaternion.Euler(0, 0, -90)
        })
    )
    let path_5 = []
    path_5[0] = new Vector3(-230.5, 30, -54.6)
    path_5[1] = new Vector3(-230.5, 38, -54.6)
    path_5[2] = new Vector3(-230.5, 30, -54.6)
    platform_19.addComponent(new utils.Interval(4, () => {
        platform_19.addComponent(new utils.FollowPathComponent(path_5, 4));
    }))
}
export function CreateIsleProps(): void {
    const Bridge = new basicObject(
        new GLTFShape("models/Bridge.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    // const Rock = new basicObject(
    //     new GLTFShape("models/Isle_Rocks/Rock_01.glb"),
    //     { position: new Vector3(0, 0, 0) }
    // )
    // const Rock2 = new basicObject(
    //     new GLTFShape("models/Isle_Rocks/Rock_02.glb"),
    //     { position: new Vector3(0, 0, 0) }
    // )
    // const Rock3 = new basicObject(
    //     new GLTFShape("models/Isle_Rocks/Rock_03.glb"),
    //     { position: new Vector3(0, 0, 0) }
    // )
    const test = new basicObject(
        new GLTFShape("models/rock_tree.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const nest = new basicObject(
        new GLTFShape("models/Birds_nest.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const path = new basicObject(
        new GLTFShape("models/path.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const flowers = new basicObject(
        new GLTFShape("models/flowers.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const mushrooms = new basicObject(
        new GLTFShape("models/mushrooms.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const lantern = new basicObject(
        new GLTFShape("models/lantern.glb"),
        { position: new Vector3(0, 0, 0) }
    )
}