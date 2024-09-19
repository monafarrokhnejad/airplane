import { useEffect, useRef, useState } from "react";

import { useNavigate, useOutletContext, useParams } from "react-router-dom";

import { MainDataGrid } from "../../components/Hybrid/MainDataGrid";
import UsersDetail from "../../components/Infrastructures/usersList/usersSideBar/UsersDetail";
import UsersAdd from "../../components/Infrastructures/usersList/usersSideBar/UsersAdd";
import TopBar from "../../layouts/TopBar";
import DetailBar from "../../layouts/DetailBar";
import { columnDefs } from "./columnDefs";
import ToolsBar from "./ToolsBar";
import { useUsersList } from "~/hooks/data/useUsersList";
import { postRequestToServer } from "~/services";
import { GET_USERS_API } from "~/utilities/api";
import { isEmptyObject } from "~/helper/generalHelper";
import { Typography } from "@mui/material";

const UsersList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const gridRef = useRef();
  const [isOpen, refetch] = useOutletContext();

  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [maxWidthDEtailBar, setMaxWidthDEtailBar] = useState(false);

  const onRowDoubleClick = (e) => {
    setDataDetail(e?.row);
    navigate(`/users/${e?.row?.id}`);
  };

  const onClose = () => {
    if (isOpenDetail) {
      setIsOpenDetail(false);
    } else {
      navigate("/users");
    }
    setDataDetail({});
  };

  const onAfterSubmit = () => {
    gridRef.current.refetch();
    refetch();
    onClose();
  };

  useEffect(() => {
    if (id) {
      const asyncFn = async () => {
        const response = await postRequestToServer({
          address: GET_USERS_API,
          dataEntry: {
            id,
            userName: "",
            isAdmin: 2,
            isActive: 2,
            pageNumber: 1,
            pageSize: 1,
          },
        });
        setDataDetail(response?.data?.data?.[0] ?? []);
      };
      asyncFn();
    }
  }, []);

  return (
    <>
      <TopBar title="Users" component={<ToolsBar setIsOpenDetail={setIsOpenDetail} />} />
      <MainDataGrid
        columns={columnDefs}
        useDataSource={useUsersList}
        onRowDoubleClick={onRowDoubleClick}
        ref={gridRef}
      />
      <DetailBar
        isSideOpen={isOpen}
        isOpen={isOpenDetail || (id ? true : false)}
        onClose={onClose}
        dataDetail={dataDetail}
        anchor="right"
        maxWidthDEtailBar={maxWidthDEtailBar}
        setMaxWidthDEtailBar={setMaxWidthDEtailBar}
        component={
          isOpenDetail ? (
            <UsersAdd onAfterSubmit={onAfterSubmit} />
          ) : isEmptyObject(dataDetail) ? (
            <Typography variant="h1">This record does not exist</Typography>
          ) : (
            <UsersDetail dataDetail={dataDetail} onAfterSubmit={onAfterSubmit} />
          )
        }
      />
    </>
  );
};

export default UsersList;
