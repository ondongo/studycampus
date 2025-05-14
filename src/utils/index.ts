

export const wowAnimation = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW.WOW({ live: false }).init();
    });
  }
};

export function discountPrice (price: number, discount: number) {
  return price - (price * discount) / 100;
}


export const formatKey = (key: string) => {
  return key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
};


export const removeTagInText = (text: string) => {
  return text.replace(/(<([^>]+)>)/gi, "");
};
