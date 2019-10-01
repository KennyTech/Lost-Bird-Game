import { BoatDialogue, BoatDialogueArrived, WinGameDialogue } from "../Scenes/Tutorial";

export class duckBoat extends Entity
{
    constructor(
        transform: TranformConstructorArgs
        //sound: AudioClip
    )
    {
        super();
        let duck = this
        engine.addEntity(duck)
        duck.addComponent(new GLTFShape("models/Big_Bird_Boat.glb"));
        duck.addComponent(new Transform(transform));

        // Make duck boat animation
        
        duck.addComponent(new Animator)
        let platformClip = new AnimationState('Action')
        this.getComponent(Animator).addClip(platformClip)
        let anim = duck.getComponent(Animator).getClip('Action')
        //anim.play()
        anim.speed = 0.35
    
        // Distance Check Setup
        const camera = Camera.instance

        function distance(pos1: Vector3, pos2: Vector3): number {
            const a = pos1.x - pos2.x
            const b = pos1.z - pos2.z
            let c = pos1.y - pos2.y
            c = c * c
            if (c > 99999) {
                c = 999
            } else {
                c = 0
            }
            return a * a + b * b + c
        }

        let runOnce1 = 0
        let runOnce2 = 0
        let runOnce3 = 0
        let runOnce4 = 0
        // Distance Update Function
        class DistCheck {
            update() {
                let transform = duck.getComponent(Transform)
                let dist = distance(transform.position, camera.position)
                let x = camera.position.x
                let y = camera.position.y
                let z = camera.position.z
                //log('x ' + camera.position.x)
                //log('y ' + camera.position.y)
                //log('z ' + camera.position.z)
                if (x < -43 && x > -49 && y > 4.5 && z > 7 && z < 10 && runOnce1 == 0)
                {
                    runOnce1++
                    // Create game canvas UI
                    const gameCanvas = new UICanvas();

                    // Define the dialog tree
                    const dialog = new BoatDialogue(gameCanvas);

                    // Start tutorial dialogue 
                    dialog.run();
                }
                if (x < -51 && x > -53 && y > 5.0 && z < 1.4 && z > -1.8 && runOnce2 == 0) {
                    anim.play()
                    anim.looping = false
                    runOnce2++
                    // Start the boat
                }
                // Boat Arrive Dialogue
                if (x < -140 && x > -160 && y > 3.0 && z > -90 && z < -70 && runOnce3 == 0)
                {
                    runOnce3++
                    // Create game canvas UI
                    const gameCanvas = new UICanvas();

                    // Define the dialog tree
                    const dialog = new BoatDialogueArrived(gameCanvas);

                    // Start tutorial dialogue 
                    dialog.run();
                }
                // Win Game Finish dialogue
                if (x < -225 && x > -255 && y > 39.0 && z > -57 && z < -43 && runOnce4 == 0)
                {
                    runOnce4++
                    // Create game canvas UI
                    const gameCanvas = new UICanvas();

                    // Define the dialog tree
                    const dialog = new WinGameDialogue(gameCanvas);

                    // Start tutorial dialogue 
                    dialog.run();
                }
            }
        }
        engine.addSystem(new DistCheck())
    }
}