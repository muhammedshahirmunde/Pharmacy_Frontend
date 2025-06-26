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
  Chip,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { Drug, DrugI } from "../types/type";
import DispenseModal from "../components/DispenseModal";
import { Add as AddIcon } from '@mui/icons-material';
import DrugModal from "./DrugModal";
import {listDrugs} from "../services/drugService"


const AvailabilityChip = ({ quantity } : {quantity : number}) => {
  if(quantity > 0)
  return <Chip size='small' label='In stock' color='success' />;
  
  return <Chip size='small' label = 'Out of stock' color='warning'/>
};


const Drugs = ({type}: {type : string}) => {
  const [search, setSearch] = useState("");
  const [isAddingDrug, setIsAddingDrug] = useState<boolean>(false)
  const [selectDrug, setSelectedDrug] = useState<Drug | null>(null)
  const [isDispensing, setIsDispensing] = useState<boolean>(false)
  const [drugList, setDrugList] = useState<DrugI[]>([])

  useEffect(() => {
    async function detchDrugList() {
      try {
        const fetchedDrugList= await listDrugs()
        setDrugList(fetchedDrugList?.drugs || [])
      } catch (error) {
        console.error(error)
        setDrugList([]);
      }
    }
    detchDrugList()
  }, [])

  const handleAddDrug = () => {
    setSelectedDrug(null);
    setIsAddingDrug(true)
  }

  const handleEditDrug = (drug: Drug) => {
    setSelectedDrug(drug)
    setIsAddingDrug(true)
  }
  
  const handleDispenseDrug = (drug: Drug) => {
    setSelectedDrug(drug)
    setIsDispensing(true)
  }
  
  const filteredDrugs: DrugI[] | [] = drugList?.filter((drug) =>
    drug.name.toLowerCase().includes(search.toLowerCase()) && 
    (type === 'all_drugs' || (type === 'in_stock' && drug.quantity > 0))
  ) || []

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

        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddDrug}>
          Add Drug
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDrugs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No records found.
                </TableCell>
              </TableRow>
            ): (
              filteredDrugs.map((drug, index) => (
              <TableRow key={drug._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{drug.name}</TableCell>
                <TableCell>{drug.category}</TableCell>
                <TableCell>{drug.price}</TableCell>
                { type === 'all_drugs' && <TableCell>
                  <AvailabilityChip quantity={drug.quantity}/>
                </TableCell>}
                <TableCell>{drug.quantity}</TableCell>
                {
                  type === 'all_drugs' &&
                  <TableCell>
                    <div className="flex justify-between">
                    <Button variant='contained' onClick={() => handleEditDrug(drug)}>Edit</Button>
                    <Button variant='outlined' onClick={() => handleDispenseDrug(drug)}>Dispense</Button>
                    </div>
                  </TableCell>
                }
              </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    <DrugModal isVisible = {isAddingDrug} onClose = {setIsAddingDrug} drugToEdit={selectDrug} setDrugList={setDrugList}/>
    <DispenseModal isVisible = {isDispensing} onClose = {setIsDispensing} drugToDispense={selectDrug} setDrugList={setDrugList}/>
    </Container>
  );
};

export default Drugs;