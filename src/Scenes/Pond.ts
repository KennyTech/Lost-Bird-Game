//[SCENE THAT CREATES PAGODA]

import { basicObject, createGrass } from "../Game_Objects/index";
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

    // for (let x = 0; x < 10; x += 1) {
    //     for (let z = 0; z < 10; z += 1) {
    //         const grass_new_animated_3 = new createGrass(
    //             { position: new Vector3(x-15, 0.85-0.1*x, z)}
    //         )
    //     }
    // }
}


export function CreatePlatforms(): void{
    const platform_1_1 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-24, 1.8, -5) }
    )
    const platform_1_2 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-24, 1.8 - (0.8 * 1), -3.2) }
    )
    const platform_1_3 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-25.8, 1.8 - (0.8 * 2), -3.2) }
    )
    const platform_1_4 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-25.8, 1.8 - (0.8 * 3), -5) }
    )
    const platform_1_5 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-28, 1.8, -8) }
    )
    const platform_1_6 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-30, 1.8, -4) }
    )
    const platform_1_7 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-34, 1.8, -2) }
    )
    const platform_1_8 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-38, 1.8, -4) }
    )
    const platform_1_9 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-40, 1.8, 0) }
    )
    const platform_1_10 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        new Transform({
            position: new Vector3(-46, 2.5, 10),
            rotation: Quaternion.Euler(0, 0, -90)
        })
    )
    const platform_1_11 = new basicObject(
        new GLTFShape("models/Platform_1.glb"),
        { position: new Vector3(-40, 1.8, 3) }
    )

    let path_1_1 = []
    path_1_1[0] = new Vector3(-40, 1.8, 3)
    path_1_1[1] = new Vector3(-40, 1.8, 10)
    path_1_1[2] = new Vector3(-40, 1.8, 3)
    platform_1_11.addComponent(new utils.Interval(4, () => {
        platform_1_11.addComponent(new utils.FollowPathComponent(path_1_1, 4));
    }))
}