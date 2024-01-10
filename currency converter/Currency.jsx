const Currency = ({price}) => {
  return Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    maximumFractionDigits: 2,
  }).format(price / 1);
};

export default Currency;
