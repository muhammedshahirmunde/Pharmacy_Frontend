import type { DrugI, Drug} from "../types/type";
import api from "./serviceInterceptor";

const basePath = 'api/drugs'
 
export const listDrugs = async() => {
  try {
    const response = await api.get(basePath + '/getAllDrugs');    
    return response.data
  } catch (error) {
    console.error(error);
    throw error
  }
};

export const addDrugs = async (drug: Drug) => {
  try {
    const response = await api.post('/api/drugs', drug); 
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editDrugs = async (drug: DrugI, drugData: Drug) => {
  try {
    const response = await api.patch(`${basePath}/updateDrug/${drugData._id}`, drug); 
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const dispenseDrug = async (drug: DrugI, quantity: number) => {
    try {
    const reqBody = {drugId: drug._id, qty: Number(quantity)}  
    const response = await api.post(`${basePath}/dispensed/${drug._id}`, reqBody); 
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}