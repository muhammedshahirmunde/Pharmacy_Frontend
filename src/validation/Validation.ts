import * as yup from "yup";

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required"),
});

export const addDrugSchema = yup.object().shape({
  name: yup
    .string()
    .required("Drug name is required")
    .min(2, "Name must be at least 2 characters"),
  
  catagory: yup
    .string()
    .required("Catagory is required"),

  price: yup
    .number()
    .required("Price is required")
    .min(1, "Price must be a positive number"),

  lowStockThreshold: yup
    .number()
    .required("Low stock threshold is required")
    .min(1, "Threshold must be a non-negative number"),
});

export const editDrugSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters"),
  
  catagory: yup
    .string(),

  price: yup
    .number()
    .min(1, "Price must be a positive number"),

  lowStockThreshold: yup
    .number()
    .min(1, "Threshold must be a non-negative number")
});

export const dispenseSchema = yup.object({
  quantity: yup
    .number()
    .min(1, "Quantity must be at least 1")
    .integer("Quantity must be a whole number"),
});
