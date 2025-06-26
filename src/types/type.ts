export interface Drug {
  _id? : number
  name?: string
  category?: string
  price?: number
  qty?: number
  lowStockThreshold?: number
}

export type addDrugI = Exclude<Drug, "id"|"qty">
export interface DispenseModalProps {
  isVisible: boolean;
  onClose: (value: boolean) => void;
  drugToDispense?: DrugI;
  setDrugList?: React.Dispatch<React.SetStateAction<DrugI[]>>
}

export interface DrugModalProps extends DispenseModalProps {
  drugToEdit?: Drug | null;
  setSelectedDrug?: null;
  setDrugList?: React.Dispatch<React.SetStateAction<DrugI[]>>
}

export type StockModalProps = DispenseModalProps

export interface DrugI {
  name: string,
  category: string,
  isDeleted: boolean,
  quantity: number,
  price: number,
  lowStockThreshold: number,
  _id: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}