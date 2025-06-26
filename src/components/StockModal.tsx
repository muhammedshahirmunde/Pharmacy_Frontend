import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import {  } from "../validation/Validation";
import {type StockModalProps} from "../types/type"
import { useEffect, useState } from "react";
import { listDrugs } from "../services/drugService";
import { createStock } from "../services/stockService";


function StockModal({ isVisible, onClose, updater}: StockModalProps) {   
  
  const [drugs, setDrugs] = useState([])

  useEffect(() => {
     fetchDrugs()
  }, [])

  const formik = useFormik({
    initialValues: {
      drugId: "",
      qty : 0,
      expiryDate: ""
    },
    // validationSchema: ,
    onSubmit: async (values) => {
      try {
        
const payload = {
    drugId: values.drugId,
    quantity: Number(values.qty),
    expiryDate: values.expiryDate // ISO format (e.g., "2025-12-31")
  };

        const created = await createStock(payload)

        updater(created.data)

        onClose(false)
      } catch (error) {
        console.log('Error while creating a stock : ', error)
      }
      console.log(values);


      onClose(false);
      formik.resetForm();
    },
  });


  const fetchDrugs = async () => {
    try {
      const data = await listDrugs()
      setDrugs(data.data)
    } catch (error) {
      console.log('Error while fetching drugs : ', error)
    }
  }


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: '80vh', 
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
    overflowY: 'auto',
    borderRadius: 1, 
  };

  return (
    <Modal
      open={isVisible}
      onClose={() => onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>     
        <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
    Add Stock
  </h2>

  {/* Drug Dropdown */}
  <div className="mb-5">
    <label
      htmlFor="drugId"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Drug Name
    </label>
    <select
      
id="drugId"
  name="drugId"

      value={formik.values.drugId}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="">Select a drug</option>
      {drugs.map((drug: any) => (
        <option key={drug.id} value={drug.name}>
          {drug.name}
        </option>
      ))}
    </select>
    {formik.touched.drugId && formik.errors.drugId && (
      <p className="text-red-500 text-sm">{formik.errors.drugId}</p>
    )}
  </div>

  {/* Quantity Input */}
  <div className="mb-5">
    <label
      htmlFor="qty"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Quantity
    </label>
    <input
      type="number"
      id="qty"
      name="qty"
      value={formik.values.qty}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    {formik.touched.qty && formik.errors.qty && (
      <p className="text-red-500 text-sm">{formik.errors.qty}</p>
    )}
  </div>

  
<div className="mb-5">
  <label
    htmlFor="expiryDate"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Expiry Date
  </label>
  <input
    type="date"
    id="expiryDate"
    name="expiryDate"
    value={formik.values.expiryDate}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
  {formik.touched.expiryDate && formik.errors.expiryDate && (
    <p className="text-red-500 text-sm">{formik.errors.expiryDate}</p>
  )}
</div>


  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
  >
    Submit
  </button>
</form>

      </Box>
    </Modal>
  );
}

export default StockModal