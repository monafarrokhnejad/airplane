import { useState, useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";
import {
  Avatar,
  Box,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { postRequestToServer } from "../../../../../services";
import { Add_COMMENTS_API } from "../../../../../utilities/api";
import { getStorage } from "../../../../../helper/appManager";
import { CURRENT_USER } from "../../../../../utilities/storage";
import MainOutlinedInput from "c/Hybrid/MainOutlinedInput";
import Loader from "~/layouts/loader/Loader";
import { useCommentList } from "~/hooks/data/useCommentList";
import { convertTime, getToday } from "~/helper/dateMoment";
import { SHORT_DATE } from "~/utilities/dateFormat";
import { isEmptyOrSpaces } from "~/helper/generalHelper";

const height = 15;

const CommentTab = (dataDetail) => {
  const theme = useTheme();
  const ref = useRef(null);
  const textInputRef = useRef(null);

  const { data: { data } = {}, isLoading, refetch } = useCommentList({ logId: Number(dataDetail?.id) });

  const [comment, setAddComment] = useState("");
  const [containerHeight, setContainerHeight] = useState(height);

  const myUserName = getStorage(CURRENT_USER)?.username;

  useEffect(() => {
    if (!isLoading && data) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isLoading, data, comment, containerHeight]);

  useEffect(() => {
    setTimeout(() => {
      if (textInputRef?.current?.clientHeight === 64) setContainerHeight(height); //15
      if (textInputRef?.current?.clientHeight === 82) setContainerHeight(height + 2); //17
      if (textInputRef?.current?.clientHeight === 99) setContainerHeight(height + 2 + 2); //19
      if (textInputRef?.current?.clientHeight === 116) setContainerHeight(height + 2 + 2 + 1.5); //21.5
      if (textInputRef?.current?.clientHeight === 132) setContainerHeight(height + 2 + 2 + 2 + 1); // 22
    });
  }, [comment]);

  const handleSendMessage = async (e) => {
    if ((e.type === "click" || e.key === "Enter") && !e.shiftKey && !isEmptyOrSpaces(comment)) {
      e.preventDefault();
      if (comment.trim() !== "") {
        await postRequestToServer({
          address: Add_COMMENTS_API,
          dataEntry: {
            comment,
            logId: Number(dataDetail?.id),
          },
        });
        refetch();
        setAddComment("");
      } else {
        setAddComment("");
      }
    }
  };

  const titleDate = new Set(data?.data.map((item) => item?.createDate.slice(0, 10)));
  const uniqueDate = Array.from(titleDate);

  if (isLoading) return <Loader />;
  return (
    <>
      <SimpleBar scrollableNodeProps={{ ref }} style={{ height: `calc(100vh - ${containerHeight}rem)` }}>
        <List>
          {uniqueDate.map((item) => (
            <div key={item}>
              <Box display="flex" justifyContent="center">
                <Typography
                  variant="h3"
                  sx={{
                    background: theme.palette.secondary.darker,
                    borderRadius: theme.customBR.main,
                    p: `${theme.customGaps.small} ${theme.customGaps.component}`,
                  }}
                >
                  {item === getToday().slice(0, 10) ? "Today" : convertTime({ date: item, format: SHORT_DATE })}
                </Typography>
              </Box>
              {data?.data
                ?.sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((message) =>
                  message?.createDate.slice(0, 10) === item ? (
                    <div key={message?.id}>
                      <ListItem
                        sx={{
                          pl: 0,
                          pr: 1,
                          justifyContent: "space-between",
                          flexDirection: "row-reverse",
                          alignItems: "flex-start",
                        }}
                      >
                        <ListItemAvatar sx={{ display: "flex", justifyContent: "flex-end" }}>
                          <Avatar
                            sx={{ borderRadius: theme.customBR.main }}
                            alt={message?.userName}
                            src={message?.userImage}
                          />
                        </ListItemAvatar>
                        <Box
                          p={`${theme.customGaps.small} ${theme.customGaps.component}`}
                          width="100%"
                          display="flex"
                          justifyContent="space-between"
                          flexDirection="column"
                          borderRadius={theme.customBR.main}
                          backgroundColor={
                            message?.userName === myUserName
                              ? theme.palette.primary.light
                              : theme.palette.secondary.lighter
                          }
                          color={
                            message?.userName === myUserName
                              ? theme.palette.secondary.contrastText
                              : theme.palette.primary
                          }
                        >
                          <ListItemText primaryTypographyProps={{ variant: "h2" }}>{message?.userName}</ListItemText>
                          <ListItemText
                            sx={{
                              minHeight: "3rem",
                              maxHeight: "15rem",
                              overflow: "auto",
                              display: "inline",
                              wordBreak: "break-all",
                              whiteSpace: "break-spaces",
                            }}
                          >
                            {message?.comment}
                          </ListItemText>
                          <ListItemText
                            primaryTypographyProps={{
                              variant: "body1",
                              textAlign: "end",
                            }}
                          >
                            {convertTime({ date: message?.createDate })}
                          </ListItemText>
                        </Box>
                      </ListItem>
                    </div>
                  ) : null
                )}
            </div>
          ))}
        </List>
      </SimpleBar>
      <Box ref={textInputRef} sx={{ position: "fixed", bottom: 0, left: 0, width: "100%", pr: 3, pl: 3, pb: 1.8 }}>
        <MainOutlinedInput
          type="text"
          id="message"
          placeholder="Type a message"
          value={comment}
          onChange={(e) => setAddComment(e.target.value)}
          onKeyPress={handleSendMessage}
          multiline={true}
          maxRows={5}
          minRows={1}
          fullWidth
        />
        <IconButton
          sx={{ position: "absolute", right: "3rem", top: "1rem" }}
          onClick={handleSendMessage}
          color="primary"
          aria-label="Send"
        >
          <Icon className="icon-icon-send" fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
};

export default CommentTab;
