import { transform } from "./transformers.mjs";

export const updateHtmlTarget = (target, value) => {
  const element = document.querySelector(`[data-value-target="${target}"]`);
  if (!element) return;

  if (element.hasAttribute("data-value-target-attribute")) {
    const attribute = element.getAttribute("data-value-target-attribute");
    element.setAttribute(attribute, value);
    return;
  } else {
    element.innerHTML = value;
  }
};

export const getElementAttribute = (element, name, transformers = []) => {
  let value = "";

  if (element.hasAttribute(name)) value = element.getAttribute(name);
  if (element.dataset[name]) value = element.dataset[name];

  return transform(value, transformers);
};

export const getElementValue = (element, transformers = []) => {
  let value = "";

  if (element.tagName === "INPUT") {
    value = element.value;
  }

  return transform(value, transformers);
};

export const bindEventListeners = (element, events) => {
  events.forEach((event) => {
    element.addEventListener(event.type, event.handler);
  });
};

export const setElementLoading = (element, isLoading = true) => {
  if (isLoading) {
    element.setAttribute("disabled", true);
    element.classList.add("loading");
    element.setAttribute("aria-busy", "true");
  } else {
    element.removeAttribute("disabled");
    element.classList.remove("loading");
    element.setAttribute("aria-busy", "false");
  }
};

export const ensureElementHasId = (element) => {
  if (!element.id) {
    element.id = `id-${Math.random().toString(36).substr(2, 9)}`;
  }

  return element.id;
}