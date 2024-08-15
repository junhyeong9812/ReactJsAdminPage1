import { Box, Typography, useTheme } from '@mui/material';
// Material-UI의 Box, Typography, useTheme 훅을 임포트합니다.

import { DataGrid } from '@mui/x-data-grid';
// Material-UI의 DataGrid 컴포넌트를 임포트하여 데이터 테이블을 생성합니다.

import { tokens } from '../../theme';
// 테마의 색상 토큰을 가져오는 커스텀 함수(tokens)를 임포트합니다.

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
// 각 접근 수준에 따른 아이콘을 임포트합니다.

import Header from '../../components/Header';
// 페이지 상단에 제목과 부제목을 표시하는 헤더 컴포넌트를 임포트합니다.

import { mockDataTeam } from '../../data/mockData';
// 더미 데이터를 임포트하여 DataGrid에 표시할 데이터를 제공합니다.

const User = () => {
  const theme = useTheme();
  // Material-UI의 테마 훅을 사용하여 현재 테마 정보를 가져옵니다.

  const colors = tokens(theme.palette.mode);
  // 현재 테마 모드에 따라 색상 토큰을 가져옵니다.

  const columns = [
    { field: 'id', headerName: 'ID' },
    // field: 데이터 필드 이름, headerName: 컬럼 헤더에 표시될 이름

    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    // field: 데이터 필드 이름, headerName: 컬럼 헤더에 표시될 이름
    // flex: 1 - 컬럼 너비를 유연하게 설정, cellClassName: 'name-column--cell' - 셀에 적용할 클래스 이름

    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    // field: 데이터 필드 이름, headerName: 컬럼 헤더에 표시될 이름
    // type: 'number' - 숫자 타입 컬럼, headerAlign: 'left' - 헤더 정렬 방식
    // align: 'left' - 데이터 정렬 방식

    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    // field: 데이터 필드 이름, headerName: 컬럼 헤더에 표시될 이름
    // flex: 1 - 컬럼 너비를 유연하게 설정

    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    // field: 데이터 필드 이름, headerName: 컬럼 헤더에 표시될 이름
    // flex: 1 - 컬럼 너비를 유연하게 설정

    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        // renderCell: 셀을 커스터마이징하여 표시합니다. 여기서는 접근 수준에 따라 다른 아이콘과 색상을 표시합니다.
        return (
          <Box
            width="60%"
            m="0 auto"
            display="flex"
            justifyContent="center"
            backgroundColor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            {/* 접근 수준에 따라 다른 아이콘을 표시합니다. */}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
            {/* 접근 수준 텍스트를 표시합니다. */}
          </Box>
        );
      },
    },
    // field: 데이터 필드 이름, headerName: 컬럼 헤더에 표시될 이름
    // flex: 1 - 컬럼 너비를 유연하게 설정, renderCell: 셀 내용을 커스터마이징하는 함수
  ];
  // field는 데이터베이스 컬럼 이름과 매핑되고, headerName은 사용자에게 보여질 이름입니다.
  // flex는 컬럼이 필요하면 한 칸 더 추가하는 방식을 사용합니다.

  return (
    <Box m="20px">
      {/* 전체 레이아웃을 위한 Box 컴포넌트 */}
      <Header title="가입자 정보" subtitle="가입자 정보 조회" />
      {/* 페이지 헤더 컴포넌트 */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: 'none !important',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiSvgIcon-root': {
            color: colors.greenAccent[300],
          },
        }}
      >
        {/* 데이터 그리드의 컨테이너 Box 컴포넌트 */}
        <DataGrid rows={mockDataTeam} columns={columns} />
        {/* DataGrid 컴포넌트, rows는 표시할 데이터, columns는 컬럼 정의 */}
      </Box>
    </Box>
  );
};

export default User;
