import { RollItem } from "../../components/Item/Item";
import OriginalImage from "../../assets/original-cinnamon-roll.jpg";
import RaisinImage from "../../assets/raisin-cinnamon-roll.jpg";
import WalnutImage from "../../assets/walnut-cinnamon-roll.jpg";
import DoubleImage from "../../assets/double-chocolate-cinnamon-roll.jpg";
import AppleImage from "../../assets/apple-cinnamon-roll.jpg";
import StrawberryImage from "../../assets/strawberry-cinnamon-roll.jpg";

export const TYPE_TO_IMAGE = {
  "Original cinnamon roll": OriginalImage,
  "Apple cinnamon roll": AppleImage,
  "Raisin cinnamon roll": RaisinImage,
  "Walnut cinnamon roll": WalnutImage,
  "Double-chocolate cinnamon roll": DoubleImage,
  "Strawberry cinnamon roll": StrawberryImage,
};

const TYPE_TO_BASE_PRICE = {
  "Original cinnamon roll": 2.49,
  "Apple cinnamon roll": 3.49,
  "Raisin cinnamon roll": 2.99,
  "Walnut cinnamon roll": 3.49,
  "Double-chocolate cinnamon roll": 3.99,
  "Strawberry cinnamon roll": 3.99,
};

const NAME_LIST = [
  "Original cinnamon roll",
  "Apple cinnamon roll",
  "Raisin cinnamon roll",
  "Walnut cinnamon roll",
  "Double-chocolate cinnamon roll",
  "Strawberry cinnamon roll",
];

export const ROLLS = NAME_LIST.map(
  (type) => new RollItem(type, TYPE_TO_BASE_PRICE[type], TYPE_TO_IMAGE[type])
);
