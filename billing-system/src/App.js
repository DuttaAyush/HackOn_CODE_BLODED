import React from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceList from "./components/InvoiceList";
const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow-md p-6">{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const dummyInvoices = [
  { clientName: "John Doe", amount: 5000, date: "2025-02-21" },
  { clientName: "Jane Smith", amount: 7500, date: "2025-02-20" },
];
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Billing & Invoicing System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent>
            <InvoiceForm />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
          <InvoiceList invoices={dummyInvoices} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
