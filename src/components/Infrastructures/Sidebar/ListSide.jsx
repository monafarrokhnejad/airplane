import SimpleBar from "simplebar-react";
import { useLocation, useNavigate } from "react-router-dom";
import { dataList } from "./dataList";
import { Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { useUserInfo } from "~/hooks/data/useUserInfo";

const ListSide = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname.split("/")[1];
  const { data: { data } = {} } = useUserInfo();
  const hasPermission = data?.data?.isAdmin;

  return (
    <List
      sx={{
        width: "100%",
        height: "max-content",
        overflowY: "auto",
        overflowX: "hidden",
        paddingTop: "1.2rem",
      }}
      component="nav"
      aria-labelledby="side bar list"
    >
      <SimpleBar style={{ height: "calc(100vh - 30rem)", overflowX: "hidden" }}>
        {dataList({ pathname, hasPermission })?.map((item) => {
          return item.isShow ? (
            <ListItemButton
              key={item.id}
              onClick={() => navigate(item.url)}
              sx={{
                pl: "1rem",
                mb: 1,
                borderRadius: theme.customBR.main,
                "&.Mui-selected": {
                  borderRadius: theme.customBR.main,
                  background: `linear-gradient(90deg, ${theme.palette.primary.lighter} 11.30%, ${theme.palette.primary.contrastText} 93.85%)`,
                  "& .MuiListItemIcon-root": {
                    color: theme.palette.primary.main,
                  },
                  "& .MuiListItemText-root": {
                    color: theme.palette.primary.main,
                  },
                },
                ":hover": {
                  backgroundColor: theme.palette.primary.lightest,
                },
              }}
              selected={item.active}
            >
              <ListItemIcon>
                <Icon className={item.iconClassName} fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ variant: "subtitle1" }} />
            </ListItemButton>
          ) : null;
        })}
      </SimpleBar>
    </List>
  );
};
export default ListSide;
