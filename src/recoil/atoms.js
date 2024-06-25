import { atom } from "recoil";

export const menuState = atom({
    key: 'menuState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

export const flipperState = atom({
  key: "flipperState",
  default: 0,
});

export const widthState = atom({
  key: "widthState", 
  default: "w-7/12"
})