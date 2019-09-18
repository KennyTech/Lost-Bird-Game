//[BASIC OBJECT CREATION]

export class basicObject extends Entity
{
    constructor(
        model: GLTFShape,
        transform: TranformConstructorArgs
        //sound: AudioClip
    )
    {
        super();
        engine.addEntity(this);
        this.addComponent(model);
        this.addComponent(new Transform(transform));
    }
}