import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";

type Props = { children: React.ReactNode };

function MuiProvider({ children }: Props) {
  return (
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      {children}
    </StyledEngineProvider>
  );
}

export default MuiProvider;
