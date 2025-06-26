import { useState } from "react";
import {
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Add as AddIcon, Edit as EditIcon } from "@mui/icons-material";
import StockModal from "./StockModal";

const mockStocks = [
  {
    _id: "64a1f2c3e1b1a2b3c4d5e6f9",
    drugId: "64a1f2c3e1b1a2b3c4d5e6f7",
    incomingQty: 50,
    remainingQty: 20,
    expirationDate: "2026-06-01T00:00:00Z",
    createdDate: "2025-06-01T10:30:00Z",
  },
  {
    _id: "64a1f2c3e1b1a2b3c4d5e6fa",
    drugId: "64a1f2c3e1b1a2b3c4d5e6f7",
    incomingQty: 100,
    remainingQty: 100,
    expirationDate: "2026-07-01T00:00:00Z",
    createdDate: "2025-07-01T09:00:00Z",
  },
  {
    _id: "64a1f2c3e1b1a2b3c4d5e6fb",
    drugId: "64a1f2c3e1b1a2b3c4d5e6f8",
    incomingQty: 30,
    remainingQty: 30,
    expirationDate: "2026-05-15T00:00:00Z",
    createdDate: "2025-06-10T11:00:00Z",
  },
  {
    _id: "64a1f2c3e1b1a2b3c4d5e6fc",
    drugId: "64a1f2c3e1b1a2b3c4d5e6f9",
    incomingQty: 80,
    remainingQty: 75,
    expirationDate: "2026-08-01T00:00:00Z",
    createdDate: "2025-06-20T15:00:00Z",
  },
];

const Stocks = () => {
  const [search, setSearch] = useState("");
  const [isAddingStock, setIsAddingStock] = useState<boolean>(false)

  const handleAddStock = () => {
    setIsAddingStock(true)
  }
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom mt={4}> Stocks </Typography>
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <TextField
          variant="outlined"
          placeholder="Search stock..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1 }}
        />
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddStock}>
          Add Stock
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Added Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          </TableBody>
        </Table>
      </TableContainer>
      <StockModal isVisible = {isAddingStock} onClose = {setIsAddingStock}/>
    </Container>
  );
};

export default Stocks;