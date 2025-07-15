export const convertToDate = (date: string) => {
    const newDate = new Date(date);
    const finalDate = new Intl.DateTimeFormat("pt-PT", {
      dateStyle: "medium",
    }).format(newDate);
    return finalDate;
  };