import waldoImage from "../../assets/projects/waldoimage.png";
import memoryImage from "../../assets/projects/memoryimage.png";
import marsImage from "../../assets/projects/marsimage.gif";
import digitalBotImage from "../../assets/projects/digitalbotimage.png";
import nodeIcon from "../../assets/icons/nodejs.webp";
import sassIcon from "../../assets/icons/sass.png";
import mongoDBIcon from "../../assets/icons/mongodb.webp";
import expressIcon from "../../assets/icons/express.png";
import umaHelp from "../../assets/projects/umamusume/command_help.png";
import umaCM from "../../assets/projects/umamusume/command_cm.png";
import umaCondition from "../../assets/projects/umamusume/command_condition.gif";
import umaSkill from "../../assets/projects/umamusume/command_skill.gif";
import umaUma from "../../assets/projects/umamusume/command_uma.gif";
import umaCMError from "../../assets/projects/umamusume/command_cm_error.png";
import umaError from "../../assets/projects/umamusume/command_error.png";
export const projectsList = [
  {
    title: "Where's Waldo",
    image: waldoImage,

    description:
      "A web game based on the popular Where's Waldo books. Choose from six unique boards to find 5 beloved characters with player's highscores stored in a Firebase Database.",
    skills: ["Redux", "Sass", "Firebase", "React"],
    github: "https://github.com/SomeCoolName1/PhotoTagging",
    demo: "https://phototagging.vercel.app/gameboard",
  },
  {
    title: "Mars - MERN",
    image: marsImage,

    description:
      "A social media website, inspired by Twitter and Facebook, to allow users to interact with each other with its many features.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Sass", "Redux"],
    github: "https://github.com/SomeCoolName1/Mars",
  },
  {
    title: "DBZ Memory",
    image: memoryImage,

    description:
      "A memory game featuring over 40 DragonBall Z characters designed to challenge the most toughest of players.",
    skills: ["Tailwind", "React"],
    github: "https://github.com/SomeCoolName1/memorygame",
    demo: "https://dbzmemorygame.vercel.app/",
  },
  {
    title: "DigitalBot",
    image: digitalBotImage,
    description:
      "A discord bot that allows users to input commands to obtain up-to-date game information from Cygames' popular Japanese mobile game, ウマ娘.",
    skills: ["Node.js"],
    github: "/digitalbot",
  },
];

export const digitalBot = {
  title: "DigitalBot",
  help: umaHelp,
  condition: umaCondition,
  CM: umaCM,
  uma: umaUma,
  umaError: umaError,
  umaCMError: umaCMError,
  skill: umaSkill,
  skills: [nodeIcon],
};
