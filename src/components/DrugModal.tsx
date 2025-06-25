import { useFormik } from "formik";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { addDrugSchema, editDrugSchema } from "../validation/Validation";
import {type DrugModalProps} from "../types/type"


function DrugModal({ isVisible, onClose, drugToEdit}: DrugModalProps) {
  let drugSchema = undefined
  if(drugToEdit) {
    drugSchema = editDrugSchema
  } else {
    drugSchema = addDrugSchema
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: "",
      lowStockThreshold: "",
    },
    validationSchema: drugSchema,
    onSubmit: async (values) => {
      console.log(values);
      onClose(false);
      formik.resetForm();
    },
  });

  useEffect(()=> {
    if(drugToEdit) {
      console.log("drugToEdit -",drugToEdit);

      formik.setFieldValue("name", drugToEdit.name);
      formik.setFieldValue("category", drugToEdit.category); 
      formik.setFieldValue("price", drugToEdit.price);
      formik.setFieldValue("lowStockThreshold", drugToEdit.lowStockThreshold)
    }
  }, [drugToEdit])

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
            {drugToEdit ? "Edit Drug" : "Add Drug"}
          </h2>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="catagory"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Catagory
            </label>
            <input
              type="text"
              id="catagory"
              name="catagory"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.category && formik.errors.category && (
              <p className="text-red-500 text-sm">{formik.errors.category}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500 text-sm">{formik.errors.price}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="lowStockThreshold"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Low Stock Threshold
            </label>
            <input
              type="number"
              name="lowStockThreshold"
              id="lowStockThreshold"
              value={formik.values.lowStockThreshold}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.lowStockThreshold &&
              formik.errors.lowStockThreshold && (
                <p className="text-red-500 text-sm">
                  {formik.errors.lowStockThreshold}
                </p>
              )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {drugToEdit ? "Update" : "Submit"}
          </button>
        </form>
      </Box>
    </Modal>
  );
}

export default DrugModal