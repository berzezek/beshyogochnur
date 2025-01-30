export const prettyPrice = (price: number | undefined) => {
    if (!price) return '';
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'UZS',
      minimumFractionDigits: 0,
    }).format(price);
  };
  