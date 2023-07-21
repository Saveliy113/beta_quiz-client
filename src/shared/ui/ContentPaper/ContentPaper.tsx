'use client';

import { FC, ReactNode } from 'react';
import Paper from '@mui/material/Paper';

interface ContentPaperProps {
  children: ReactNode;
}

const ContentPaper: FC<ContentPaperProps> = ({ children }) => {
  return (
    <Paper elevation={2} sx={{ borderRadius: '12px', padding: '30px 60px' }}>
      {children}
    </Paper>
  );
};

export default ContentPaper;
