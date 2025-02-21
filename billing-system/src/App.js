import React from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceList from "./components/InvoiceList";
const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow-md p-6">{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;


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
            <InvoiceList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
