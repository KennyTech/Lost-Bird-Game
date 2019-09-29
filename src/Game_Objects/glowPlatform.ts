export class glowPlatform extends Entity
{
    constructor(
        transform: TranformConstructorArgs
        //sound: AudioClip
    )
    {
        super();
        let platform = this
        engine.addEntity(platform)
        platform.addComponent(new GLTFShape("models/Platform_5.glb"));
        platform.addComponent(new Transform(transform));

        // Make platform glow test
        platform.addComponent(new Animator)
        let platformClip = new AnimationState('glow')
        let platformClip2 = new AnimationState('dim')
        this.getComponent(Animator).addClip(platformClip)
        let anim = platform.getComponent(Animator).getClip('glow')
        let anim2 = platform.getComponent(Animator).getClip('dim')
        anim.play()

        let sound = new AudioClip("sounds/boink.mp3")
        platform.addComponent(new AudioSource(sound))
    
        // Distance Check Setup
        const camera = Camera.instance

        function distance(pos1: Vector3, pos2: Vector3): number {
            const a = pos1.x - pos2.x
            const b = pos1.z - pos2.z
            let c = pos1.y - pos2.y
            c = c * c
            if (c > 16) {
                c = 999
            } else {
                c = 0
            }
            return a * a + b * b + c
        }

        // Distance Update Function
        class Proximity {
            update() {
                let transform = platform.getComponent(Transform)
                let dist = distance(transform.position, camera.position)
                //log('dist: ' + dist)
                if ( dist > 1.3) {
                    anim.playing = false
                    anim2.play()
                    anim2.looping = false
                } else {
                    anim2.playing = false
                    if (anim.playing == false) {
                        anim.play()
                        platform.getComponent(AudioSource).playOnce()
                        anim.looping = false
                    }
                }
            }
        }
        engine.addSystem(new Proximity())
    }
}