import resources from "../dialogueResources";
import { SimpleDialog } from "../modules/simpleDialogue";

// Note: Although this file is named Tutorial.ts, it's actually all the dialogues in the game.

function selectRandom(options: string[]): string {
  return options[Math.floor(Math.random() * (options.length - 1))];
}

export class TutorialDialogue extends SimpleDialog {
    private dialogTree: SimpleDialog.DialogTree;
  
    constructor(gameCanvas: UICanvas) {
      // Create a new SimpleDialog to manage the dialog tree
      super({
        canvas: gameCanvas,
        leftPortrait: {
          width: 512,
          height: 312,
          sourceWidth: 512,
          sourceHeight: 312,
          positionX: "-26%",
          positionY: "-1%"
        },
        rightPortrait: {
          width: 1,
          height: 1,
          sourceWidth: 1,
          sourceHeight: 1,
          positionX: "15%"
        },
        dialogText: {
          width: "40%",
          height: "25%",
          positionY: "-15%",
          textSpeed: 15,
          textIdleTime: 4,
          textConfig: { fontSize: 16, paddingLeft: 30, paddingRight: 30, paddingTop: 60 },
          background: resources.textures.textContainer,
          backgroundConfig: { sourceWidth: 512, sourceHeight: 202 }
        },
        optionsContainer: {
          stackOrientation: UIStackOrientation.VERTICAL,
          spacing: 0,
          width: "40%",
          height: "12%",
          vAlign: "top",
          hAlign: "center",
          positionY: "-65%",
          background: resources.textures.optionsContainer,
          backgroundConfig: { sourceWidth: 512, sourceHeight: 79 },
          optionsTextConfig: { fontSize: 20, paddingLeft: 20, positionY: "-35%" }
        }
      });

        // // Voice
        // const voiceEntity = new Entity()
        // let voiceClip = new AudioClip("sounds/bird_tutorial_voice.mp3")
        // let voice = new AudioSource(voiceClip)

        // voice.playing = true
        // voice.loop = false
        // voiceEntity.addComponent(voice)
        // engine.addEntity(voiceEntity)
  
      // Variables used in the dialog tree
      let firstTimeDialog = true;
  
      // Dialog text colors
      const npcColor = Color4.Black();
      const playerColor = new Color4(0.898, 0, 0.157);
  
      this.dialogTree = new SimpleDialog.DialogTree()
        .if(() => firstTimeDialog)
        .call(() => (firstTimeDialog = false))
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.npcPortraitDefault
        )
        .say(() => "Hello!", { color: npcColor })
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.npcPortraitDefault
        )
        .say(() => "I'm lost, can you help me find my nest?", { color: npcColor })
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.npcPortraitDefault
        )
        .say(() => "First, we have to get over these walls.", { color: npcColor })
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.npcPortraitDefault
        )
        .say(() => "Maybe that funny rock does something?", { color: npcColor })
        .endif()
    }
  
    public run(): void {
      if (!this.isDialogTreeRunning()) {
        this.runDialogTree(this.dialogTree);
      }
    }
  }
  
  // End of Dialogue
  

  // New Dialogue
  export class BoatDialogue extends SimpleDialog {
    private dialogTree: SimpleDialog.DialogTree;
  
    constructor(gameCanvas: UICanvas) {
      // Create a new SimpleDialog to manage the dialog tree
      super({
        canvas: gameCanvas,
        leftPortrait: {
          width: 256,
          height: 256,
          sourceWidth: 256,
          sourceHeight: 256,
          positionX: "-26%",
          positionY: "-10%"
        },
        rightPortrait: {
          width: 1,
          height: 1,
          sourceWidth: 1,
          sourceHeight: 1,
          positionX: "15%"
        },
        dialogText: {
          width: "40%",
          height: "25%",
          positionY: "-15%",
          textSpeed: 15,
          textIdleTime: 4,
          textConfig: { fontSize: 16, paddingLeft: 30, paddingRight: 30, paddingTop: 60 },
          background: resources.textures.duckDialogue,
          backgroundConfig: { sourceWidth: 512, sourceHeight: 202 }
        },
        optionsContainer: {
          stackOrientation: UIStackOrientation.VERTICAL,
          spacing: 0,
          width: "40%",
          height: "12%",
          vAlign: "top",
          hAlign: "center",
          positionY: "-65%",
          background: resources.textures.optionsContainer,
          backgroundConfig: { sourceWidth: 512, sourceHeight: 79 },
          optionsTextConfig: { fontSize: 20, paddingLeft: 20, positionY: "-35%" }
        }
      });
  
      // Variables used in the dialog tree
      let firstTimeDialog = true;
  
      // Dialog text colors
      const npcColor = Color4.Black();
      const playerColor = new Color4(0.898, 0, 0.157);
  
      this.dialogTree = new SimpleDialog.DialogTree()
        .if(() => firstTimeDialog)
        .call(() => (firstTimeDialog = false))
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.duckPortrait
        )
        .say(() => "Hello traveler! I'm Quacky.", { color: npcColor })
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.duckPortrait
        )
        .say(() => "I can give you a lift. Get on me if you want to!", { color: npcColor })
        .endif()
    }
  
    public run(): void {
      if (!this.isDialogTreeRunning()) {
        this.runDialogTree(this.dialogTree);
      }
    }
  }
  
  // End of Dialogue


  // New Dialogue
  export class BoatDialogueArrived extends SimpleDialog {
    private dialogTree: SimpleDialog.DialogTree;
  
    constructor(gameCanvas: UICanvas) {
      // Create a new SimpleDialog to manage the dialog tree
      super({
        canvas: gameCanvas,
        leftPortrait: {
          width: 256,
          height: 256,
          sourceWidth: 256,
          sourceHeight: 256,
          positionX: "-26%",
          positionY: "-10%"
        },
        rightPortrait: {
          width: 1,
          height: 1,
          sourceWidth: 1,
          sourceHeight: 1,
          positionX: "15%"
        },
        dialogText: {
          width: "40%",
          height: "25%",
          positionY: "-15%",
          textSpeed: 15,
          textIdleTime: 4,
          textConfig: { fontSize: 16, paddingLeft: 30, paddingRight: 30, paddingTop: 60 },
          background: resources.textures.duckDialogue,
          backgroundConfig: { sourceWidth: 512, sourceHeight: 202 }
        },
        optionsContainer: {
          stackOrientation: UIStackOrientation.VERTICAL,
          spacing: 0,
          width: "40%",
          height: "12%",
          vAlign: "top",
          hAlign: "center",
          positionY: "-65%",
          background: resources.textures.optionsContainer,
          backgroundConfig: { sourceWidth: 512, sourceHeight: 79 },
          optionsTextConfig: { fontSize: 20, paddingLeft: 20, positionY: "-35%" }
        }
      });
  
      // Variables used in the dialog tree
      let firstTimeDialog = true;
  
      // Dialog text colors
      const npcColor = Color4.Black();
      const playerColor = new Color4(0.898, 0, 0.157);
  
      this.dialogTree = new SimpleDialog.DialogTree()
        .if(() => firstTimeDialog)
        .call(() => (firstTimeDialog = false))
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.duckPortrait
        )
        .say(() => "We're here!", { color: npcColor })
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.duckPortrait
        )
        .say(() => "Just go up that hill. Have a nice day!", { color: npcColor })
        .endif()
    }
  
    public run(): void {
      if (!this.isDialogTreeRunning()) {
        this.runDialogTree(this.dialogTree);
      }
    }
  }
  
  // End of Dialogue
  
  

  export class WinGameDialogue extends SimpleDialog {
    private dialogTree: SimpleDialog.DialogTree;
  
    constructor(gameCanvas: UICanvas) {
      // Create a new SimpleDialog to manage the dialog tree
      super({
        canvas: gameCanvas,
        leftPortrait: {
          width: 512,
          height: 312,
          sourceWidth: 512,
          sourceHeight: 312,
          positionX: "-26%",
          positionY: "-1%"
        },
        rightPortrait: {
          width: 1,
          height: 1,
          sourceWidth: 1,
          sourceHeight: 1,
          positionX: "15%"
        },
        dialogText: {
          width: "40%",
          height: "25%",
          positionY: "-15%",
          textSpeed: 15,
          textIdleTime: 4,
          textConfig: { fontSize: 16, paddingLeft: 30, paddingRight: 30, paddingTop: 60 },
          background: resources.textures.textContainer,
          backgroundConfig: { sourceWidth: 512, sourceHeight: 202 }
        },
        optionsContainer: {
          stackOrientation: UIStackOrientation.VERTICAL,
          spacing: 0,
          width: "40%",
          height: "12%",
          vAlign: "top",
          hAlign: "center",
          positionY: "-65%",
          background: resources.textures.optionsContainer,
          backgroundConfig: { sourceWidth: 512, sourceHeight: 79 },
          optionsTextConfig: { fontSize: 20, paddingLeft: 20, positionY: "-35%" }
        }
      });
  
      // Variables used in the dialog tree
      let firstTimeDialog = true;
  
      // Dialog text colors
      const npcColor = Color4.Black();
      const playerColor = new Color4(0.898, 0, 0.157);
  
      this.dialogTree = new SimpleDialog.DialogTree()
        .if(() => firstTimeDialog)
        .call(() => (firstTimeDialog = false))
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.npcPortraitDefault
        )
        .say(() => "This is my nest!", { color: npcColor })
        .showPortrait(
          SimpleDialog.PortraitIndex.LEFT,
          resources.textures.npcPortraitDefault
        )
        .say(() => "I'm home! Thank you very much! Have a nice day!", { color: npcColor })
        .endif()
    }
  
    public run(): void {
      if (!this.isDialogTreeRunning()) {
        this.runDialogTree(this.dialogTree);
      }
    }
  }