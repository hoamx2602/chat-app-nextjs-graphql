import React from 'react';
import { Box, Paper } from '@mui/material';
import landingPageImage from '../public/11131.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <Box>
      <Paper>
        <Image
          src={landingPageImage}
          alt="Hình ảnh"
          objectFit="fill"
          // style={{ height: '100vh' }}
          style={{
            width: '100%',
            height: '90vh',
          }}
        />
      </Paper>
    </Box>
  );
}
