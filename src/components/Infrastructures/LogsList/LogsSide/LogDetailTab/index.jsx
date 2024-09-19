import SimpleBar from "simplebar-react";
import { List, ListItem, ListItemText, useTheme } from "@mui/material";
import { convertLogsDetailData } from "./handleLogDetailItem";

const LogDetailTab = (dataDetail) => {
  const data = Object.keys(dataDetail);
  const theme = useTheme();
  return (
    <List>
      <SimpleBar style={{ height: "calc(100vh - 13rem)", paddingRight: "1.5rem" }}>
        {data.map((item) => (
          <ListItem
            key={item}
            sx={{
              backgroundColor: theme.palette.primary.lightest,
              mb: theme.customGaps.component,
              p: 0,
              borderRadius: theme.customBR.main,
            }}
          >
            <ListItemText
              sx={{
                m: "0 0 0 2rem",
                p: `${theme.customGaps.component} ${theme.customGaps.main}`,
                borderRadius: `0 ${theme.customBR.main} ${theme.customBR.main} 0`,
                backgroundColor: theme.palette.common.white,
                color: theme.palette.secondary.dark,
                minHeight: "5rem",
                maxHeight: "30rem",
                overflow: "auto",
                "& .MuiTypography-body1 ": {
                  fontSize: "1.4rem",
                  lineHeight: "1.6rem",
                  fontWeight: 700,
                  mb: theme.customGaps.component,
                  textTransform: "capitalize",
                },
                "& .MuiTypography-body2 ": {
                  fontSize: "1.2rem",
                  lineHeight: "1.6rem",
                  fontWeight: 500,
                  width: "10rem",
                  display: "inline",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                },
              }}
              primary={convertLogsDetailData({ item, dataDetail }).title}
              secondary={convertLogsDetailData({ item, dataDetail }).desc}
            />
          </ListItem>
        ))}
      </SimpleBar>
    </List>
  );
};

export default LogDetailTab;
