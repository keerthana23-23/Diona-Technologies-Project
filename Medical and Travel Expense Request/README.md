# Medical and Travel Expense Request

This project recreates the Medical and Travel Expense Request PDF using HTML, CSS, and JavaScript. The solution supports dynamic data rendering and can generate PDF-style output directly from the browser.

## Features

- Dynamic data-driven content generation
- PDF-like layout with headers, footers, and page numbering
- Dynamic tables for medical and travel expenses
- Supports different datasets without modifying the HTML structure
- Print and Save as PDF functionality from the browser
- Responsive layout matching the provided reference PDF

## Project Files

- `expense_report.html` – Main HTML file used to view the project.
- `expense_dynamic_data.js` – Contains the dynamic input data. Update this file to test different datasets.
- `expense_styles.css` – Styles for PDF layout, tables, headers, and footers.
- `script.js` – Rendering logic and dynamic content generation.
- `index.html` – Entry page for the project.

## How to Run

1. Download or clone the repository.
2. Open `expense_report.html` in a web browser.
3. Modify the data in `expense_dynamic_data.js` to test different scenarios.
4. Use the browser's Print option to generate a PDF.

## Dynamic Data

The project supports dynamic content including:

- Worker information
- Claim details
- Expense entries
- Prescription and medical expenses
- Travel and transportation expenses
- Submission and footer information

## Demo Video

[Watch Demo Video][(https://drive.google.com/file/d/1mahh5iXh2PHsXw-RbpjlD3c17jjWG7fg/view?Assumptions](https://drive.google.com/file/d/1mahh5iXh2PHsXw-RbpjlD3c17jjWG7fg/view?usp=drive_link)

- Input data is provided through JavaScript objects in `expense_dynamic_data.js`.
- PDF generation is handled through the browser's print functionality.
- Layout behavior has been tested with different data volumes to ensure consistency.

## Challenge Faced

One challenge was supporting different amounts of data while maintaining the layout, which was resolved through dynamic content generation using JavaScript and testing with multiple datasets.
