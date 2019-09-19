//[SCENE THAT CREATES PAGODA]

import { basicObject } from "../Game_Objects/index";

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
    )
    const water = new basicObject(
        new GLTFShape("models/Water.glb"),
        { position: new Vector3(0, 0, 0) }
    )
    const brokenWall = new basicObject(
        new GLTFShape("models/BrokenWall.glb"),
        { position: new Vector3(0, 0, 0) }
    )
}

export function CreateFoliage(): void {
    const grass_1 = new basicObject(
        new GLTFShape("models/Grass.glb"),
        { position: new Vector3(-19, .5, -2) }
    )
    const grass_2 = new basicObject(
        new GLTFShape("models/Grass.glb"),
        { position: new Vector3(-15, 0.7, 4) }
    )
    const grass_3 = new basicObject(
        new GLTFShape("models/Grass.glb"),
        { position: new Vector3(-14, 0.65, -3) }
    )
    const grass_4 = new basicObject(
        new GLTFShape("models/Grass.glb"),
        { position: new Vector3(-32, .65, 5) }
    )
    const palmTree = new basicObject(
        new GLTFShape("models/PalmTree.glb"),
        { position: new Vector3(0, 0, 0) }
    )
}
