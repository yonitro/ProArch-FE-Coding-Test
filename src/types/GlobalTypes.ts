export interface Search {
  query: any;
}
export interface TableData {
  id: number;
  company_name: string;
  currency_code: string;
  currency: string;
  department: string;
  sales_total: string;
  city: string;
}

export interface Column {
  title: string;
  dataIndex: string;
  
}
