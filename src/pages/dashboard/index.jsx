import { Box } from '@mui/material';
import Header from '../../data/components/Header';

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="대시보드" />
      </Box>
    </Box>
  );
};
export default Dashboard;
