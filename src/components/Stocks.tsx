import { useEffect, useState } from "react";
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
import { getStocks } from "../services/stockService";


type StockItem = {
  id : string
  name : string
  drugId : string
  incomingQty : number
  remainingQty : number
  expirationDate : string
  createdDate : string
}


const Stocks = () => {
  const [search, setSearch] = useState("");
  const [isAddingStock, setIsAddingStock] = useState<boolean>(false)
  const [stocks, setStocks] = useState<StockItem[]>([]);


  useEffect(() => {
    fetchStocks()
  }, [])

  const fetchStocks = async () => {
    try {
      const data = await getStocks()
      setStocks(data.data)
    } catch (error) {
      console.log('Error ', error);
    }
  }

  const handleAddStock = () => {
    setIsAddingStock(true)
  }

 const addEntry = (data : StockItem) => {
    setStocks(prev => ([data, ...prev]))
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
              <TableCell>Sl No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Incoming Qty</TableCell>
              <TableCell>Remaining Qty</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Added Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {stocks.map((stock, index) => <TableRow key={stock.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{stock.name}</TableCell>
                          <TableCell>{stock.incomingQty}</TableCell>
                          <TableCell>{stock.remainingQty}</TableCell>
                          <TableCell>{stock. expirationDate}</TableCell>
                          <TableCell>{stock. createdDate}</TableCell>
                          <TableCell>
                            <div className="flex justify-between">
                            <Button variant='outlined' onClick={() => (true)}>Delete</Button>
                            </div>
                          </TableCell>
                        </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
      <StockModal isVisible = {isAddingStock} onClose = {setIsAddingStock} updater = {addEntry}/>
    </Container>
  );
};

export default Stocks;