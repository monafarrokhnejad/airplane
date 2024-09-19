import SimpleBar from "simplebar-react";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, useTheme } from "@mui/material";
import Loader from "~/layouts/loader/Loader";
import { useActionHistoryList } from "~/hooks/data/useActionHistoryList";
import { convertTime } from "~/helper/dateMoment";

const HistoryTab = (dataDetail) => {
  const theme = useTheme();

  const { data: { data } = {}, isLoading } = useActionHistoryList({ logId: Number(dataDetail?.id) });

  if (isLoading) return <Loader />;
  return (
    <List>
      <SimpleBar style={{ height: "calc(100vh - 13rem)", paddingRight: "1.5rem" }}>
        {data?.data?.map((item, index) => (
          <ListItem
            key={index}
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
              }}
            >
              <Box display="flex" alignItems="center">
                <ListItemAvatar>
                  <Avatar alt={item?.userName} src={item?.userImage} />
                </ListItemAvatar>
                <Typography mr={1} variant="h6">
                  {item?.userName} made change - {convertTime({ date: item?.creationDate })}
                </Typography>
              </Box>
              <Box mt={2}>
                {item?.action === "Change Status" ? (
                  <Typography variant="subtitle1">
                    {item?.action} to {item?.value}
                  </Typography>
                ) : item?.action === "JiraLink" ? (
                  <Typography variant="subtitle1">Created Jira link {item?.value}</Typography>
                ) : (
                  <Typography variant="subtitle1">{item?.value} the Issue.</Typography>
                )}
              </Box>
            </ListItemText>
          </ListItem>
        ))}
      </SimpleBar>
    </List>
  );
};

export default HistoryTab;
