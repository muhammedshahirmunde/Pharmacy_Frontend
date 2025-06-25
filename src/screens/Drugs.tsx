import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  IconButton,
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
  Chip
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import DrugModal from "../components/DrugModal";





const mockDrugs = [
  { id: 1, name: "Paracetamol", category: "Tablet", price : 350, qty: 0 },
  { id: 2, name: "Paracetamol", category: "Tablet", price : 350, qty: 30 },
  { id: 3, name: "Paracetamol", category: "Tablet", price : 350, qty: 30 }
];


const AvailabilityChip = ({ quantity } : {quantity : number}) => {
  if(quantity > 0)
  return <Chip size='small' label='In stock' color='success' />;
  
  return <Chip size='small' label = 'Out of stock' color='warning'/>
};

const Drugs = ({type}: {type : string}) => {
  const [search, setSearch] = useState("");
  const [isAddingDrug, setIsAddingDrug] = useState<boolean>(false)

  useEffect(() => {

  }, [])

  const addDrug = () => {
    setIsAddingDrug(true)
  }

  const filteredDrugs = mockDrugs.filter((drug) =>
    drug.name.toLowerCase().includes(search.toLowerCase()) && 
    (type === 'all_drugs' || (type === 'in_stock' && drug.qty > 0))
  );



  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom mt={4}>
        Drugs Inventory
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <TextField
          variant="outlined"
          placeholder="Search drugs..."
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

        <Button variant="contained" startIcon={<AddIcon />} onClick={addDrug}>
          Add Drug
        </Button>
        <Button variant="outlined" startIcon={<RefreshIcon />}>
          Refresh
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              {type === 'all_drugs' && <TableCell>Availability</TableCell>}
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDrugs.map((drug, index) => (
              <TableRow key={drug.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{drug.name}</TableCell>
                <TableCell>{drug.category}</TableCell>
                <TableCell>{drug.price}</TableCell>
                { type === 'all_drugs' && <TableCell>
                  <AvailabilityChip quantity={drug.qty}/>
                </TableCell>}
                <TableCell>{drug.qty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    <DrugModal isVisible = {isAddingDrug} onClose = {setIsAddingDrug}/>
    </Container>
  );
};

export default Drugs;
