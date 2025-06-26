import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Typography,
  FormHelperText,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { generateReport } from "../services/reportService";

type ReportType = "" | "lowStock" | "dispensed";

interface StockProps {
  id: number;
  name: string;
  category: string;
  qty : number;
  price: number;
  lowStockThreshold: number;
  createdAt: string;
  updatedAt: string;
}

interface DispensedProps {
  id: number;
  drugId: string;
  name: string;
  date: string;
  qty: number;
}

const ReportsPage: React.FC = () => {
  const [reportType, setReportType] = useState<ReportType>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [showTable, setShowTable] = useState<boolean>(false);
  const [tableData, setTableData] = useState<(StockProps | DispensedProps)[]>(
    []
  );

  const handleReportChange = (event: SelectChangeEvent) => {
    setReportType(event.target.value as ReportType);
    if (showTable) setShowTable(false);
  };

  const handleSubmit = async () => {
    try {
      const sendingData = {
        type: reportType,
        ...(reportType === "dispensed" && {
          fromDate,
          toDate,
        }),
      };
      const generated = await generateReport(sendingData);
      setTableData(generated.data);
      setShowTable(true);
    } catch (error) {
      console.log("Error while generating report:", error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" className="mb-5" gutterBottom>
        Reports
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="report-select-label">Select Report</InputLabel>
          <Select
            labelId="report-select-label"
            value={reportType}
            label="Select Report"
            onChange={handleReportChange}
          >
            <MenuItem value="lowStock">Low Stock Report</MenuItem>
            <MenuItem value="dispensed">Dispensed Report</MenuItem>
          </Select>
        </FormControl>

        {reportType === "dispensed" && (
          <>
            <TextField
              label="From Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <TextField
              label="To Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </>
        )}

        <Button
          variant="contained"
          sx={{ backgroundColor: "#6a1b9a", color: "#fff" }}
          onClick={handleSubmit}
        >
          Generate Report
        </Button>
      </Box>

      {showTable && (
        <>
          {reportType === "lowStock" && (
            <Box>
              <>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Sl No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableData.map((drug, index) => (
                        <TableRow key={drug.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{drug.name}</TableCell>
                          {/* <TableCell>{drug.category}</TableCell> */}
                          {/* <TableCell>{drug.price}</TableCell> */}
                          <TableCell>{drug.qty}</TableCell>

                          
                          <TableCell>{drug.qty}</TableCell>
                          <TableCell>
                            <div className="flex justify-between">
                              <Button variant="contained">Edit</Button>
                              <Button variant="outlined">Dispense</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            </Box>
          )}

          {reportType === "dispensed" && (
            <Box>
              <>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Drug Name</TableCell>
                        <TableCell>Date</TableCell>\
                        <TableCell>Quantity</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                  </Table>
                </TableContainer>
              </>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default ReportsPage;
