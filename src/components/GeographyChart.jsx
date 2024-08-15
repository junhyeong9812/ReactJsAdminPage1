// Material-UI 및 기타 라이브러리에서 필요한 모듈과 컴포넌트를 임포트
import { useTheme } from "@mui/material"; // 현재 테마에 접근하기 위한 훅
import { ResponsiveChoropleth } from "@nivo/geo"; // Nivo 라이브러리에서 반응형 카토그램(choropleth) 맵 컴포넌트
import { geoFeatures } from "../data/mockGeoFeatures"; // 모의 지리적 특징 데이터
import { tokens } from "../theme"; // 테마 모드에 따라 색상 토큰을 생성하는 함수
import { mockGeographyData as data } from "../data/mockData"; // 카토그램 맵을 위한 모의 데이터

// GeographyChart 함수형 컴포넌트 정의
const GeographyChart = ({ isDashboard = false }) => {
  // useTheme 훅을 사용하여 현재 테마에 접근
  const theme = useTheme();
  // 현재 테마 모드에 따라 색상 토큰 생성
  const colors = tokens(theme.palette.mode);

  // ResponsiveChoropleth 컴포넌트를 반환
  return (
    <ResponsiveChoropleth
      data={data} // 카토그램 맵을 위한 데이터
      theme={{
        // 카토그램 맵을 위한 테마 커스터마이징
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100], // 축 도메인 선의 색상
            },
          },
          legend: {
            text: {
              fill: colors.grey[100], // 범례 텍스트의 색상
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100], // 틱 선의 색상
              strokeWidth: 1, // 틱 선의 두께
            },
            text: {
              fill: colors.grey[100], // 틱 텍스트의 색상
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100], // 범례 텍스트의 색상
          },
        },
      }}
      features={geoFeatures.features} // 맵을 위한 지리적 특징
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }} // 맵 주변의 여백
      domain={[0, 1000000]} // 맵의 데이터 도메인
      unknownColor="#666666" // 알 수 없는 데이터의 색상
      label="properties.name" // 특징의 라벨
      valueFormat=".2s" // 값의 포맷
      projectionScale={isDashboard ? 40 : 150} // 투영 스케일, isDashboard prop에 따라 다름
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]} // 투영 변환, isDashboard prop에 따라 다름
      projectionRotation={[0, 0, 0]} // 투영 회전
      borderWidth={1.5} // 특징 주변의 테두리 두께
      borderColor="#ffffff" // 특징 주변의 테두리 색상
      legends={
        !isDashboard // isDashboard prop에 따라 범례 조건부 렌더링
          ? [
              {
                anchor: "bottom-left", // 범례 위치
                direction: "column", // 범례 항목의 방향
                justify: true, // 범례 항목 정렬
                translateX: 20, // 범례의 X축 변환
                translateY: -100, // 범례의 Y축 변환
                itemsSpacing: 0, // 범례 항목 사이의 간격
                itemWidth: 94, // 각 범례 항목의 너비
                itemHeight: 18, // 각 범례 항목의 높이
                itemDirection: "left-to-right", // 범례 항목 텍스트의 방향
                itemTextColor: colors.grey[100], // 범례 항목 텍스트의 색상
                itemOpacity: 0.85, // 범례 항목의 불투명도
                symbolSize: 18, // 범례 항목의 심볼 크기
                effects: [
                  {
                    on: "hover", // 범례 항목에 마우스를 올렸을 때의 효과
                    style: {
                      itemTextColor: "#ffffff", // 마우스를 올렸을 때 텍스트 색상
                      itemOpacity: 1, // 마우스를 올렸을 때 불투명도
                    },
                  },
                ],
              },
            ]
          : undefined // isDashboard가 true인 경우 범례 없음
      }
    />
  );
};

// GeographyChart 컴포넌트를 기본 익스포트로 내보내기
export default GeographyChart;
