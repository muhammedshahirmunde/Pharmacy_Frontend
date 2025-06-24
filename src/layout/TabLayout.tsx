// components/VerticalTabs.tsx
import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Container } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface VerticalTabsProps {
  tabLabels: string[];
  tabContents: React.ReactNode[];
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabLabels, tabContents }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: "divider", minWidth: 150 }}
        >
          {tabLabels.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>

        <Box sx={{ flexGrow: 1 }}>
          {tabContents.map((content, index) => (
            <TabPanel key={index} value={value} index={index}>
              {content}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default VerticalTabs;
