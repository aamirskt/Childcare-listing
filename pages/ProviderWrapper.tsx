'use client';

import { ReactElement } from 'react';

// next
import { SessionProvider } from 'next-auth/react';

// project-imports
import ThemeCustomization from 'themes';
import { ConfigProvider } from 'contexts/ConfigContext';
import RTLLayout from 'components/RTLLayout';
// import Locales from 'components/Locales';
import ScrollTop from 'components/ScrollTop';
import { Provider } from 'react-redux';
import { store } from '../store';
import Snackbar from 'components/@extended/Snackbar';

// ==============================|| PROVIDER WRAPPER  ||============================== //

export default function ProviderWrapper({ children }: { children: ReactElement }) {
  return (
    <Provider store={store}>
    <ConfigProvider>
      <ThemeCustomization>
        <RTLLayout>
          {/* <Locales> */}
            <ScrollTop>
              <SessionProvider refetchInterval={0}>
                <Snackbar />
                {children}
              </SessionProvider>
            </ScrollTop>
          {/* </Locales> */}
        </RTLLayout>
      </ThemeCustomization>
    </ConfigProvider>
    </Provider>
  );
}
