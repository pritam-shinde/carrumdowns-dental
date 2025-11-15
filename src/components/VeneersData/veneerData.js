// src/data/veneerData.js

import Discolored from "../../../public/Veneers/Discolored/Discolored.jpg";
import Gappy from "../../../public/Veneers/Gappy/Gappy1.jpg";
import Broken from "../../../public/Veneers/Broken-chipped/Broken-and-chipped1.jpg";
import Overcrowded from "../../../public/Veneers/Overcrowded/Over1.jpg";
import Worn from "../../../public/Veneers/Worn/Worn.jpg";
import Crooked from "../../../public/Veneers/Crooked/Crooked1.jpg";

const veneerData = [
  {
    id: 1,
    title: "DISCOLOURED/STAINED",
    description:
      "Smoking, coffee, and age can leave your teeth with unsightly yellow or brown stains. Veneers can instantly brighten your smile and resist future staining with their special porcelain material.",
    imageUrl: Discolored,
  },
  {
    id: 2,
    title: "GAPPY",
    description:
      "Gaps between teeth can trap food and bacteria, leading to both health concerns and self-consciousness. Veneers can close minor gaps, creating a healthier and more confident appearance.",
    imageUrl: Gappy,
  },
  {
    id: 3,
    title: "BROKEN/CHIPPED",
    description:
      "Injuries, hard foods, and teeth grinding can cause breaks or chips, affecting your confidence and potentially causing pain. Veneers can restore the natural shape of your teeth, giving you a functional, beautiful smile.",
    imageUrl: Broken,
  },
  {
    id: 4,
    title: "OVERCROWDED",
    description:
      "Overcrowded teeth can trap bacteria, increasing the risk of decay and gum disease. Veneers can create the illusion of straighter teeth for mild cases of overcrowding. (For severe overcrowding, orthodontic treatment may be necessary first.)",
    imageUrl: Overcrowded,
  },
  {
    id: 5,
    title: "WORN-DOWN",
    description:
      "Worn teeth can make you look older, cause sensitivity, and affect your ability to eat and drink comfortably. Veneers can restore the appearance and functionality of worn teeth, providing a more youthful look and improved comfort.",
    imageUrl: Worn,
  },
  {
    id: 6,
    title: "CROOKED",
    description:
      "Genetics, habits, and aging can contribute to crooked teeth, impacting your confidence and potentially causing discomfort. Veneers can reshape your smile, creating a symmetrical and stunning look.",
    imageUrl: Crooked,
  },
];

export default veneerData;

