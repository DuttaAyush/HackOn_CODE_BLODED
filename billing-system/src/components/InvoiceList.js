import React from "react";

function InvoiceList({ invoices }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Generated Invoices</h2>
      <ul className="space-y-2">
        {invoices.map((invoice, index) => (
          <li key={index} className="p-4 bg-white rounded shadow">
            <p><strong>Client:</strong> {invoice.clientName}</p>
            <p><strong>Amount:</strong> ₹{invoice.amount}</p>
            <p><strong>Date:</strong> {invoice.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;

