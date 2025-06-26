export interface Drug {
  id : number
  name: string
  category: string
  price: number
  qty: number
  lowStockThreshold: number
}

export interface DispenseModalProps {
  isVisible: boolean;
  onClose: (value: boolean) => void;
}

export interface DrugModalProps extends DispenseModalProps {
  drugToEdit?: Drug | null;
  setSelectedDrug?: null
}

export type StockModalProps = DispenseModalProps