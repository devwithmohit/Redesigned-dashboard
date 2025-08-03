export const GetOrders = async () => {
  return await fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

// export default GetOrders;
// https://dummyjson.com/carts/1

export const getRevenue = async () => {
  return await fetch("https://dummyjson.com/carts").then((res) => res.json());
};
export const getProducts = async () => {
  return await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
};
export const getCustomers = async () => {
  return await fetch("https://dummyjson.com/users").then((res) => res.json());
};
