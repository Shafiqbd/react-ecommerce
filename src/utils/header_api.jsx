export const getAllMenuList = async () => {
  const menuList = [
    {
      name: "Products",
      path: "/productlist",
    },
    {
      name: "Pricing",
      path: "/",
    },
    {
      name: "Blog",
      path: "/",
    },
  ];
  return await menuList;
};
