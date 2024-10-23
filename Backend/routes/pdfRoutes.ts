import express, { Request, Response } from 'express';
import puppeteer from 'puppeteer';

const router = express.Router();

// Sample HTML template for the invoice
// const generateInvoiceHTML = (products: { name: string; price: number; quantity: number; }[], total: string) => {
//   let productsTable = '';
//   products.forEach(product => {
//     productsTable += `
//       <tr>
//         <td>${product.name}</td>
//         <td>INR ${product.price}</td>
//         <td>${product.quantity}</td>
//         <td>INR ${(product.price * product.quantity).toFixed(2)}</td>
//       </tr>
//     `;
//   });

//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Invoice</title>
//         <style>
//           table {
//             width: 100%;
//             border-collapse: collapse;
//           }
//           table, th, td {
//             border: 1px solid black;
//           }
//           th, td {
//             padding: 8px;
//             text-align: left;
//           }
//         </style>
//     </head>
//     <body>
//         <h1>Invoice</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Product Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             ${productsTable}
//             <tr>
//               <td colspan="3" style="text-align:right"><strong>Subtotal</strong></td>
//               <td><strong>INR ${total}</strong></td>
//             </tr>
//             <tr>
//               <td colspan="3" style="text-align:right"><strong>GST 18%</strong></td>
//               <td><strong>INR ${(parseFloat(total) * 0.18).toFixed(2)}</strong></td>
//             </tr>
//             <tr>
//               <td colspan="3" style="text-align:right"><strong>Total Amount</strong></td>
//               <td><strong>INR ${(parseFloat(total) * 1.18).toFixed(2)}</strong></td>
//             </tr>
//           </tbody>
//         </table>
//     </body>
//     </html>
//   `;
// };
const simpleHTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Simple PDF</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is a test PDF</p>
    </body>
  </html>
`;

// PDF generation route
// PDF generation route
router.post('/generate-pdf', async (req: Request, res: Response) => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'], headless: true });
    const page = await browser.newPage();
    await page.setContent(simpleHTML, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=invoice.pdf',
      'Content-Length': pdfBuffer.length,
    });

    res.send(pdfBuffer);
  } catch (error:any) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ message: 'Failed to generate PDF', error: error.toString() });
  }

});


export default router;
