import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import { theme } from '@/shared/theme'; // Adjust to your folder structure

export default function RootLayout() {
  return (
      <PaperProvider theme={theme}>
        <Stack />
      </PaperProvider>
  )
}
