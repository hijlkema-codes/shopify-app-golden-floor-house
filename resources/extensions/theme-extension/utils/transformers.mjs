const TRANSFORMERS = {
  /**
   * @param {string} value The string representation of the price in cents
   * @returns {number} The price as float.
   */
  parse_float: (value) => parseFloat(value),
  /**
   * @param {string} value
   * @returns {boolean}
   */
  parse_boolean: (value) =>
    ["true", "1", "on", "yes"].includes(value.toLowerCase()),

  to_currency: (value) => {
    const formatter = new Intl.NumberFormat(undefined, {
      currency: "EUR",
      style: "currency",
    });

    return formatter.format(value);
  },

  to_currency_unsigned: (value) => {
    const formatter = new Intl.NumberFormat(undefined, {
      currency: "EUR",
      style: "currency",
      currencyDisplay: "code",
    });

    return formatter.format(value).replace("EUR", "").trim();
  },

  from_cents: (value) => value / 100
};

export const transform = (value, transformers) => {
  return transformers.reduce((acc, transformer) => {
    if (TRANSFORMERS[transformer]) {
      return TRANSFORMERS[transformer](acc);
    }
    return acc;
  }, value);
};
