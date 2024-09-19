import { useState } from "react";
import { Box, Icon, IconButton, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import { actionsItems } from "./actionItems";
import MainDialog from "c/Hybrid/MainDialog";
import { CONFIRM_MESSAGE } from "~/utilities/dialogType";

const ActionsComponent = ({ data, handleIsSeen, onAfterSubmit }) => {
  const theme = useTheme();
  const [open, setOpen] = useState({});

  return (
    <Box
      backgroundColor={theme.palette.neutral[100]}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {actionsItems({ data, handleIsSeen, onAfterSubmit, theme }).map((item) => (
        <IconButton
          key={item.id}
          onClick={() =>
            item.hasConfirm
              ? setOpen({
                  isOpen: true,
                  type: CONFIRM_MESSAGE,
                  message: item.message,
                  onClose: () => setOpen({}),
                  onClick: () => {
                    setOpen({});
                    item.onClick();
                  },
                })
              : item.onClick()
          }
          sx={{ "&:hover": { background: item.color.lighter }, borderRadius: "50%" }}
        >
          <Icon fontSize="large" className={item.icon} sx={{ color: item.color.main }} />
        </IconButton>
      ))}
      <MainDialog open={open} />
    </Box>
  );
};

export default ActionsComponent;
ActionsComponent.propTypes = {
  data: PropTypes.object,
  handleIsSeen: PropTypes.func,
  onAfterSubmit: PropTypes.func,
};
