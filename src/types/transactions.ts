export type TransactionsResponse = {
  status: string;
  data: {
      meta: {
          page: number;
          page_size: number;
          total: number;
      };
      transactions: {
          transaction_date: string;
          from_name: string;
          from_number: string;
          transaction_type: string;
          balance_before: number;
          balance_after: number;
          amount: number;
          to_number: string;
          to_name: string;
          reference: string;
          user_id: string;
      }[];
  };
};