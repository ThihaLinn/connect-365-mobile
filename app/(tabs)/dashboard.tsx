import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import React from 'react';

const Dashboard = () => {
  return (
    <Box className="container flex border">
      <Text bold={true} className="text-typography-0">This is the Box</Text>
      <Text className=' text-red-500'>this is text</Text>
    </Box>
  );
};

export default Dashboard;
