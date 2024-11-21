import { QueryClientProvider, QueryClient } from "react-query";
// import { Provider } from 'react-redux'
// import { useEffect, useMemo, useState } from "react";
// import { ThemeProvider } from '@mui/material'
// import { ReactQueryDevtools } from "react-query/devtools";
// import { createTheme } from '@mui/material/styles'
// import { StyledEngineProvider } from '@mui/material'
// import useListenSystemTheme from './hooks/useListenSystemTheme'
// import paletteDark from './assets/theme/paletteDark'
// import paletteLight from './assets/theme/paletteLight'
// import ErrorBoundary from "./ErrorBoundary";
// import { useQueryParams } from "./hooks/useQueryParams";
// import { theme } from './assets/theme'
// import store from './redux-toolkit/store'
// import { CacheProvider } from '@emotion/react'
// import { createEmotionCache } from '../utils/createEmotionCache'
import "dayjs/locale/ru";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import "react-datepicker/dist/react-datepicker.css";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
interface ProvidersProps {
  children?: ReactNode; // Using ReactNode type for children
}
function Providers({ children }: ProvidersProps) {
  // const emotionCache = createEmotionCache();
  //dayjs
  dayjs.extend(utc);
  dayjs.extend(relativeTime);
  dayjs.extend(localeData);
  dayjs.extend(customParseFormat);
  dayjs.extend(updateLocale);
  dayjs.extend(timezone);
  dayjs.extend(duration);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default Providers;
