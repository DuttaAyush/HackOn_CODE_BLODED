let invoiceRows = [];

        function addRow() {
            let table = document.getElementById("invoiceTable").getElementsByTagName('tbody')[0];
            let rowId = invoiceRows.length;
            invoiceRows.push({ id: rowId, item: "", qty: 1, price: 0 });

            let row = table.insertRow();
            row.innerHTML = `
                <td><input type="text" oninput="updateRow(${rowId}, 'item', this.value)"></td>
                <td><input type="number" min="1" value="1" oninput="updateRow(${rowId}, 'qty', this.value)"></td>
                <td><input type="number" value="0" oninput="updateRow(${rowId}, 'price', this.value)"></td>
                <td class="total">$0.00</td>
                <td><button class="delete-btn" onclick="deleteRow(${rowId})">✖</button></td>
            `;
        }

        function updateRow(id, field, value) {
            let row = invoiceRows.find(row => row.id === id);
            if (row) {
                row[field] = field === 'qty' || field === 'price' ? parseFloat(value) : value;
                updateTotal();
            }
        }

        function deleteRow(id) {
            invoiceRows = invoiceRows.filter(row => row.id !== id);
            let table = document.getElementById("invoiceTable").getElementsByTagName('tbody')[0];
            table.innerHTML = "";
            invoiceRows.forEach(row => addRow(row));
            updateTotal();
        }

        function updateTotal() {
            let total = 0;
            invoiceRows.forEach((row, index) => {
                let rowTotal = row.qty * row.price;
                total += rowTotal;
                document.querySelectorAll('.total')[index].innerText = `$${rowTotal.toFixed(2)}`;
            });

            document.getElementById("grandTotal").innerText = total.toFixed(2);
        }

        function printInvoice() {
            window.print();
        }

        function downloadInvoice() {
            const { jsPDF } = window.jspdf;
            let doc = new jsPDF();
            doc.text("Invoice", 20, 20);
            doc.save("invoice.pdf");
        }

        function emailInvoice() {
            let email = document.getElementById("email").value;
            if (!email) {
                alert("Please enter an email address.");
                return;
            }

            let invoiceDetails = "Invoice Details:\n";
            invoiceRows.forEach(row => {
                invoiceDetails += `Item: ${row.item}, Quantity: ${row.qty}, Price: $${row.price}, Total: $${(row.qty * row.price).toFixed(2)}\n`;
            });

            let mailtoLink = `mailto:${email}?subject=Invoice&body=${encodeURIComponent(invoiceDetails)}`;
            window.location.href = mailtoLink;
        }