export enum reportType {
  Income = 'income',
  Expense = 'expense',
}
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    crated_at: Date;
    updated_at: Date;
    type: reportType;
  }[];
}

export const data: Data = {
  report: [
    {
      id: 'sa5sa',
      source: '5s45awd',
      amount: 7250,
      crated_at: new Date(),
      updated_at: new Date(),
      type: reportType.Income,
    },
    {
      id: '1234S',
      source: 'Bank',
      amount: 2500,
      crated_at: new Date(),
      updated_at: new Date(),
      type: reportType.Income,
    },
    {
      id: 'sss34S',
      source: 'Bank',
      amount: 1200,
      crated_at: new Date(),
      updated_at: new Date(),
      type: reportType.Expense,
    },
  ],
};
