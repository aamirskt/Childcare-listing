// material-ui
import { Theme, TypographyVariantsOptions } from '@mui/material/styles';

// types
import { FontFamily, ThemeMode } from 'types/config';

// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (mode: ThemeMode, fontFamily: FontFamily, theme: Theme): TypographyVariantsOptions => ({
  htmlFontSize: 16,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 600,
    fontSize: '2.375rem',
    lineHeight: 1.21
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.875rem',
    lineHeight: 1.27
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.33
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.4
  },
  h5: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5
  },
  h6: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.57
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
    l5ineHeight: 1.66
  },
  body1: {
    fontSize: '1.125rem',
    lineHeight: 1.57
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.66
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.57
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.66
  },
  overline: {
    lineHeight: 1.66
  },
  button: {
    textTransform: 'capitalize'
  },
  mainheading: {
    fontSize: '3.125rem',
    fontWeight: 700,
    lineHeight: 'normal',
    color: '#000',
    fontFamily:'sans-serif'
  },
  bodytext: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.4,
    color: '#000',
    fontFamily:'sans-serif'
  },
  bodytext1: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4,
    fontFamily:'sans-serif'
  },
  bodytext2: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.4,
    fontFamily:'sans-serif'
  },
  subheading1: {
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: '#000',
    fontFamily:'sans-serif'
  },
  subheading2: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: '#000',
    fontFamily:'sans-serif'
  },
  subheading3: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: '#000',
    fontFamily:'sans-serif'
  },
  numberstyle: {
    color: '#CDCDCD',
    fontWeight: '700',
    fontSize: '3.125rem',
    lineHeight: '110%',
    fontFamily:'sans-serif'
  },
  pagetitle: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '28px',
    color: '#1D2630'
  },
  pagetitle1: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '28px',
    color: '#1D2630'
  },
  sectiontitle: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '22px',
    color: '#1D2630'
  },
  sectiontitle1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '22px',
    color: '#5B6B79'
  },
  heading: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '22px',
    color: '#5B6B79'
  },
  heading1: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: '22px',
    color: '#5B6B79'
  },
  p: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: '22px',
    color: '#000'
  },
  p1: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '22px',
    color: '#000'
  },
  p2: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '22px',
    color: '#000'
  },
  p3: {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '22px',
    color: '#000'
  },
 
});

export default Typography;
