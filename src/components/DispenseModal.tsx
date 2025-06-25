import { useFormik } from "formik";
import {dispenseSchema} from "../validation/Validation"
import {Modal, Box} from "@mui/material";
import {type DispenseModalProps} from "../types/type"


function DispenseModal({isVisible, onClose}: DispenseModalProps) {
  const formik = useFormik({
    initialValues: {
      quantity: "", 
    },
    validationSchema: dispenseSchema,
    onSubmit: (values) => {
        console.log(values);
        onClose(false); 
        formik.resetForm(); 
    },
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
          <div className="mb-5">
            <label
              htmlFor="quantity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.errors.quantity && (
              <p className="text-red-500 text-sm">{formik.errors.quantity}</p>
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

export default DispenseModal;