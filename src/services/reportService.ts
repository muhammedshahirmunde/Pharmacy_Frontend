
import type { DispensedProps, StockProps } from "../types/type";
import api from "./serviceInterceptor";

const path = '/reports';


export const generateReport = (data: StockProps | DispensedProps) => {
  return api.post(path, data);
};
