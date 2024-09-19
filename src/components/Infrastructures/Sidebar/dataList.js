export const dataList = ({ pathname, hasPermission }) => {
  return [
    {
      id: 1,
      label: "Dashboard",
      url: "/",
      iconClassName: "icon-icon-home",
      active: pathname === "dashboard",
      isShow: true,
    },
    {
      id: 2,
      label: "Logs",
      url: "/logs",
      iconClassName: "icon-icon-list",
      active: pathname === "logs",
      isShow: true,
    },
    {
      id: 3,
      label: "Users",
      url: "/users",
      iconClassName: "icon-icon-users",
      active: pathname === "users",
      isShow: hasPermission,
    },
  ];
};
