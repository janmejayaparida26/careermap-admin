import TransactionsTable from "./TransactionsTable";

export default function TransactionsPage() {
  const handleView = (record) => {
    console.log("View Transaction:", record);
  };

  return <TransactionsTable onView={handleView} />;
}