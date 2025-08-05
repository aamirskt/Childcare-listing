'use client';
import React from 'react';

export default function BlogHtml({ htmlContent }: { htmlContent: string }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}