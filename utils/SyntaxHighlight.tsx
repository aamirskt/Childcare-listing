'use client';

import { CSSProperties } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import dynamic from 'next/dynamic';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then((mod) => mod.Prism),
  { ssr: false }
);
// project-imports
import { ThemeMode } from 'config';

// ==============================|| CODE HIGHLIGHTER ||============================== //

export default function SyntaxHighlight({ children, customStyle, ...others }: { children: string; customStyle?: CSSProperties }) {
  const theme = useTheme();

  return (
    <SyntaxHighlighter
      language="javascript"
      showLineNumbers
      style={theme.palette.mode === ThemeMode.DARK ? a11yLight : a11yDark}
      customStyle={customStyle}
      {...others}
    >
      {children}
    </SyntaxHighlighter>
  );
}
