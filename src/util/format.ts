export const { format: formatPrice } = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export const formatPostalCode = (postalCode: string) => {
  const postalCodeFormated = postalCode.replace(
    /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/,
    "$1.$2-$3"
  );

  return postalCodeFormated
};
