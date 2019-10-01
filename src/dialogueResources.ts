// Resources for the Dialogue System

export default {
  sounds: {
    // button: new AudioClip("sounds/boink.mp3")
  },
  models: {
    // bird: new GLTFShape("models/Bird_1.gltf"),
  },
  textures: {
    textContainer: new Texture("images/dialogue_box.png"),
    duckDialogue: new Texture("images/dialogue_box_quacky.png"),
    optionsContainer: new Texture("images/dialogue_box.png"),
    playerPortraitDefault: new Texture("images/etherbird.png", {hasAlpha: true}),
    playerPortraitSurprised: new Texture("images/etherbird.png", {hasAlpha: true}),
    npcPortraitDefault: new Texture("images/etherbird.png", {hasAlpha: true}),
    duckPortrait: new Texture("images/duck.png", {hasAlpha: true})
  }
};