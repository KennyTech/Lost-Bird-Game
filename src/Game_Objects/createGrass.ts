export class createGrass extends Entity
{
    constructor(
        transform: TranformConstructorArgs
    )
    {
        super();
        engine.addEntity(this);
        this.addComponent(new GLTFShape("models/grass_new_animated_4.gltf"));
        this.addComponent(new Transform(transform));
        this.addComponent(new Animator)
        let grassclip = new AnimationState('sway.001')
        let grassSlash = new AnimationState('slash')
        this.getComponent(Animator).addClip(grassclip)
        this.getComponent(Animator).addClip(grassSlash);
        this.addComponent(new OnClick(e => {
            grassSlash.playing =! grassSlash.playing
            grassSlash.looping = true
            }))
        engine.addEntity(this)
        let anim = this.getComponent(Animator).getClip('sway.001')
        anim.play()
    }
}