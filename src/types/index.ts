export type UserRole = 'super' | 'admin' | 'viewer';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
}

export interface ClientProfile {
  id: string;
  clientId: string;
  industry: string;
  name: string;
  contactFirstName: string;
  contactLastName: string;
  contactEmail: string;
  accountingSystem: string;
}

export interface COATemplate {
  id: string;
  name: string;
  industry: string;
  interval: 'Monthly' | 'Quarterly';
  functionalGroups: {
    id: string;
    name: string;
    code: string;
  }[];
  operationalGroups: {
    id: string;
    name: string;
    code: string;
  }[];
}

export interface Datapoint {
  id: string;
  templateId: string;
  accountName: string;
  accountDescription: string;
  type: 'Financial' | 'Operational' | 'Calculated';
  accountType: 'Assets' | 'Liabilities' | 'Equity' | 'Revenue' | 'Expenses';
  balanceType: 'Debit' | 'Credit';
  coreGLAccount: string;
  functionalGroupId: string;
  operationalGroupId: string;
  formula?: string;
  sortOrder: number;
}

export interface Import {
  id: string;
  clientId: string;
  fileName: string;
  period: string;
  timestamp: string;
  status: 'completed' | 'failed';
  rowCount?: number;
  importedBy: string;
}