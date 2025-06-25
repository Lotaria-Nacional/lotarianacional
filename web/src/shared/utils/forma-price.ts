export const formatPrice = (value: number) => {
    const newVal = new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "AKZ",
    }).format(value);

    return newVal;
  };