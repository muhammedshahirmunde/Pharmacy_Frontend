import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { addDrugSchema } from "../validation/Validation";

interface DrugModalProps {
  isVisible: boolean;
  onClose: (value: boolean) => void;
}

function DrugModal({ isVisible, onClose }: DrugModalProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
      catagory: "",
      quantity: "",
      price: "",
      expiry: "",
      lowStockThreshold: "",
    },
    validationSchema: addDrugSchema,
    onSubmit: async (values) => {
      console.log(values);
      onClose(false);
    },
  });

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
            Add Drug
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
              value={formik.values.catagory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.catagory && formik.errors.catagory && (
              <p className="text-red-500 text-sm">{formik.errors.catagory}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="quantity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <p className="text-red-500 text-sm">{formik.errors.quantity}</p>
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
              Expiry (in years)
            </label>
            <input
              type="number"
              name="expiry"
              id="expiry"
              value={formik.values.expiry}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.expiry && formik.errors.expiry && (
              <p className="text-red-500 text-sm">{formik.errors.expiry}</p>
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
            Submit
          </button>
        </form>
      </Box>
    </Modal>
  );
}

export default DrugModal;
=======
      console.log(values)
    },
  });

  return (
    <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
