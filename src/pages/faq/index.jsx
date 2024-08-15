import { Box, useTheme } from "@mui/material";
// Material-UI의 Box 컴포넌트와 useTheme 훅을 가져옵니다. Box는 레이아웃 컨테이너로 사용되고, useTheme는 현재 테마를 가져오는 데 사용됩니다.

import Header from "../../components/Header";
// 프로젝트의 Header 컴포넌트를 가져옵니다.

import Accordion from "@mui/material/Accordion";
// Material-UI의 Accordion 컴포넌트를 가져옵니다. 아코디언 컴포넌트는 확장 가능한 패널을 만들 때 사용됩니다.

import AccordionSummary from "@mui/material/AccordionSummary";
// 아코디언의 요약(헤더) 부분을 만드는 데 사용되는 Material-UI의 AccordionSummary 컴포넌트를 가져옵니다.

import AccordionDetails from "@mui/material/AccordionDetails";
// 아코디언의 상세(내용) 부분을 만드는 데 사용되는 Material-UI의 AccordionDetails 컴포넌트를 가져옵니다.

import Typography from "@mui/material/Typography";
// 텍스트 표시를 위한 Material-UI의 Typography 컴포넌트를 가져옵니다.

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// 아코디언 요약 부분의 확장 아이콘으로 사용할 ExpandMoreIcon 아이콘 컴포넌트를 가져옵니다.

import { tokens } from "../../theme";
// 테마의 색상을 가져오는 tokens 유틸리티를 가져옵니다.

const FAQ = () => {
  const theme = useTheme();
  // 현재 테마를 가져옵니다.

  const colors = tokens(theme.palette.mode);
  // 현재 테마 모드(light 또는 dark)에 맞는 색상 팔레트를 가져옵니다.

  return (
    <Box m="20px">
      {/* 박스 외부의 margin을 20px로 설정합니다. */}
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {/* Header 컴포넌트를 사용하여 제목과 부제목을 설정합니다. */}

      <Accordion defaultExpanded>
        {/* 기본적으로 확장된 상태로 설정된 아코디언 컴포넌트입니다. */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {/* 아코디언의 요약 부분으로 확장 아이콘을 포함합니다. */}
          <Typography color={colors.greenAccent[500]} variant="h5">
            {/* 요약 부분의 텍스트를 설정합니다. */}
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* 아코디언의 상세 부분으로 내용을 포함합니다. */}
          <Typography>
            {/* 상세 부분의 텍스트를 설정합니다. */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        {/* 두 번째 아코디언 컴포넌트입니다. */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        {/* 세 번째 아코디언 컴포넌트입니다. */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        {/* 네 번째 아코디언 컴포넌트입니다. */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        {/* 다섯 번째 아코디언 컴포넌트입니다. */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
// FAQ 컴포넌트를 내보내어 다른 파일에서 사용할 수 있게 합니다.
