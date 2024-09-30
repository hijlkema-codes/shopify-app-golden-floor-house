/**
 * @param {HTMLElement} element
 * @param {Keyframe[]} animations
 */
export const animateElement = (element, animations) => {
  element.animate(animations, {
    duration: 500,
    easing: "ease-in-out",
    direction: "normal",
    fill: "forwards",
  });
};
