export const showError = (
  targetElement,
  messageType = "generic",
  internalError = undefined,
  ...errorArgs
) => {
  const errorTemplates = targetElement.querySelector("[data-errors]");
  let errorTemplate = errorTemplates.content.querySelector(
    `[data-error="${messageType}"]`
  );

  if (!errorTemplate) {
    errorTemplate = errorTemplates.content.querySelector(
      "[data-error='generic']"
    );
  }

  const errorElement = errorTemplate.cloneNode(true);
  targetElement.appendChild(errorElement);
  targetElement.setAttribute("aria-invalid", "true");

  if (internalError) {
    console.warn(internalError, ...errorArgs);
  }
};

export const clearErrors = (targetElement) => {
  const errorElements = targetElement.querySelectorAll("[data-error]");
  errorElements.forEach((errorElement) => {
    errorElement.remove();
  });
  targetElement.setAttribute("aria-invalid", "false");
};
