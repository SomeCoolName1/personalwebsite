import waldoDemo from "../../assets/projects/waldodemo.gif";
import waldoImage from "../../assets/projects/waldoimage.png";
import memoryDemo from "../../assets/projects/memorydemo.gif";
import memoryImage from "../../assets/projects/memoryimage.png";
import betterDoItDemo from "../../assets/projects/betterdoitdemo.gif";
import betterDoItImage from "../../assets/projects/betterdoitimage.png";
import cssIcon from "../../assets/icons/css.png";
import nodeIcon from "../../assets/icons/nodejs.webp";
import firebaseIcon from "../../assets/icons/firebase.png";
import reactIcon from "../../assets/icons/react.png";
import tailwindIcon from "../../assets/icons/tailwind.png";
import sassIcon from "../../assets/icons/sass.png";
import umaHelp from "../../assets/projects/umamusume/command_help.png";
import umaCM from "../../assets/projects/umamusume/command_cm.png";
import umaCondition from "../../assets/projects/umamusume/command_condition.gif";
import umaSkill from "../../assets/projects/umamusume/command_skill.gif";
import umaUma from "../../assets/projects/umamusume/command_uma.gif";

export const projectsList = [
  {
    title: "Where's Waldo",
    image: waldoImage,
    gif: waldoDemo,
    description: "Game based on the Where's Wally? books",
    skills: [sassIcon, firebaseIcon, reactIcon],
    github:
      "https://github.com/SomeCoolName1/PhotoTagging/tree/main/phototaggingmain",
  },
  {
    title: "Better DoIt",
    image: betterDoItImage,
    gif: betterDoItDemo,
    description: "A memory game featuring over 40 DragonBall Z characters",
    skills: [cssIcon, reactIcon],
    github:
      "https://github.com/SomeCoolName1/betterdoit/tree/main/BetterDoIt/betterdoit",
  },
  {
    title: "DragonBall Memory Game",
    image: memoryImage,
    gif: memoryDemo,
    description: "A memory game featuring over 40 DragonBall Z characters",
    skills: [tailwindIcon, reactIcon],
    github: "https://github.com/SomeCoolName1/memorygame",
  },
];

export const digitalBot = {
  title: "DigitalBot",
  help: umaHelp,
  condition: umaCondition,
  CM: umaCM,
  uma: umaUma,
  skill: umaSkill,
  skills: [nodeIcon],
};
