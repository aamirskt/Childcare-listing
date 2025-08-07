import React from "react";
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), { ssr: false });

export default function Index() {
  return (
    <Box
      className="youtube-container" // 👈 Add a custom class
      sx={{
        mt: { md: 4, xs: 2 },
        height: { lg: '592px', xs: 'auto' }
      }}
    >
      <LiteYouTubeEmbed
        id="cOKsDi_txSo"
        playlistCoverId="cOKsDi_txSo"
        poster="hqdefault"
        title="ChildrenKare"
      />
    </Box>
  );
}
