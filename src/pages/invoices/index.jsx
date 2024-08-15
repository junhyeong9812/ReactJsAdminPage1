import { Box, Button, Typography, useTheme } from "@mui/material";
// MUI의 Box, Typography 컴포넌트와 useTheme 훅을 임포트하여 레이아웃, 텍스트 스타일링 및 테마 사용을 지원합니다.

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// MUI의 DataGrid 컴포넌트를 임포트하여 데이터 그리드를 구성합니다.

import { tokens } from "../../theme";
// theme 파일에서 색상 토큰을 임포트하여 다크 모드와 라이트 모드에 따른 색상을 설정합니다.

import { mockDataInvoices } from "../../data/mockData";
// 모의 데이터를 임포트하여 그리드에 표시할 데이터를 제공합니다.

import Header from "../../components/Header";
import { useState } from "react";
// Header 컴포넌트를 임포트하여 페이지 상단에 제목과 부제목을 표시합니다.

const Invoices = () => {
  const theme = useTheme();
  // 현재 테마(다크 모드 또는 라이트 모드)를 가져옵니다.

  const colors = tokens(theme.palette.mode);
  // 현재 테마에 맞는 색상 토큰을 가져옵니다.

  //체크된 정보 삭제
  const [selectedIds, setSelectedIds] = useState([]);
  const [rows, setRows] = useState(mockDataInvoices);
  const handleDelete = () => {
    const newRows = rows.filter((row) =>  !selectedIds.includes(row.id));
    setRows(newRows);
    setSelectedIds([]);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    // "id" 필드를 정의하고 헤더 이름을 설정합니다.

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      // "name" 필드를 정의하고 헤더 이름, 컬럼 너비, 셀 클래스 이름을 설정합니다.
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      // "phone" 필드를 정의하고 헤더 이름과 컬럼 너비를 설정합니다.
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      // "email" 필드를 정의하고 헤더 이름과 컬럼 너비를 설정합니다.
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
        // "cost" 필드를 정의하고 헤더 이름, 컬럼 너비를 설정하며, 각 셀의 비용을 녹색으로 렌더링합니다.
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      // "date" 필드를 정의하고 헤더 이름과 컬럼 너비를 설정합니다.
    },
  ];

  return (
    <Box m="20px">
      <Header title="잔액정보" subtitle="사용자 잔액 정보" />
      {/* Header 컴포넌트를 사용하여 제목과 부제목을 설정합니다. */}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDelete}
        disabled={selectedIds.length === 0}
      >
        정보 삭제
      </Button>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            // DataGrid의 기본 테두리를 제거합니다.
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            // DataGrid의 셀 아래쪽 테두리를 제거합니다.
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            // name-column--cell 클래스의 셀 색상을 설정합니다.
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            // DataGrid의 컬럼 헤더의 배경색과 아래쪽 테두리를 설정합니다.
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
            // DataGrid의 가상 스크롤러의 배경색을 설정합니다.
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            // DataGrid의 푸터 컨테이너의 위쪽 테두리와 배경색을 설정합니다.
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
            // DataGrid의 체크박스 색상을 설정합니다.
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            // DataGrid의 툴바 컨테이너의 버튼 텍스트 색상을 설정합니다.
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          onSelectionModelChange={(ids) => setSelectedIds(ids)}
          components={{ Toolbar: GridToolbar }}
        />
        {/* DataGrid에 mockDataInvoices 데이터와 컬럼 설정을 추가하고, 체크박스 선택 기능을 활성화합니다.
        onSelectionModelChange={(ids) => setSelectedIds(ids)를 통해 상태를 저장 */}
      </Box>
    </Box>
  );
};

export default Invoices;
// Invoices 컴포넌트를 내보내어 다른 곳에서 사용할 수 있게 합니다.
