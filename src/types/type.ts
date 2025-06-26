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

export interface StockModalProps {
  isVisible: boolean;
  onClose: (value: boolean) => void;
  updater : (data : any) => void
}

export interface StockProps {
  id: number;
  name: string;
  category: string;
  qty: number;
  price: number;
  lowStockThreshold: number;
  createdAt: string;
  updatedAt: string;
}

export interface DispensedProps {
  id: number;
  drugId: string;
  name: string;
  date: string;
  qty: number;
}

