//[SCENE THAT CREATES ISLE]

import { basicObject, createGrass } from "../Game_Objects/index";
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
}