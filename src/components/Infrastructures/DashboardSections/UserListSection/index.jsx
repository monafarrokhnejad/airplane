import PropTypes from "prop-types";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
} from "@mui/material";
import SvgIconComponent from "c/Hybrid/MainSvgIconComponent";
import { useUsersList } from "~/hooks/data/useUsersList";
import usersIcon from "../../../../assets/SVG/icon-uesers-fill.svg";
import { useNavigate } from "react-router-dom";

// ==============================|| CUSTOM  CARD ||============================== //

const UserListSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { data: { data } = {}, isLoading } = useUsersList({ page: 0, pageSize: 5 });
  const list = data?.data;

  if (isLoading) return null;
  return (
    <Card>
      <CardHeader
        title="Users"
        titleTypographyProps={{ variant: "h3" }}
        action={
          <IconButton onClick={() => navigate("/users")}>
            <SvgIconComponent icon={usersIcon} size={24} />
          </IconButton>
        }
      />
      <CardContent sx={{ mt: 0, pt: 0 }}>
        <List>
          {list?.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                backgroundColor: theme.palette.primary.lightest,
                borderRadius: "6rem",
                height: "5.2rem",
                marginBottom: "1rem",
              }}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => navigate(`/users/${item.id}`)}>
                  <Icon className="icon-icon-link" fontSize="small" color="primary" />
                </IconButton>
              }
            >
              <ListItemAvatar sx={{ display: "flex", alignItems: "center" }}>
                <Avatar src={item.image} sx={{ width: "3.5rem", height: "3.5rem" }} />
              </ListItemAvatar>
              <ListItemText primary={item.userName} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

UserListSection.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.object,
};

export default UserListSection;
