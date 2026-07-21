# Worker Progress Report

This project recreates the Worker Progress Report PDF using HTML, CSS, and JavaScript. The solution dynamically generates report content from JavaScript data and maintains a PDF-style layout suitable for printing or saving as a PDF.

## Features

- Dynamic report generation using JavaScript
- PDF-style layout with header, footer, and page numbering
- Responsive design that adapts to different data sets
- Dynamic employee and progress information
- Browser-based PDF generation using Print / Save as PDF
- Structured layout matching the provided reference document

## Project Files

- `index.html` – Main entry point for the application.
- `styles.css` – Stylesheet responsible for layout, formatting, and PDF presentation.
- `script.js` – Contains the dynamic data rendering and report generation logic.
- `README.md` – Project documentation.

## How to Run

1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Update the sample data in `script.js` if required.
4. Refresh the page to view the updated report.
5. Use the browser's Print option to generate a PDF.

## Dynamic Elements

The report supports dynamic content such as:

- Worker information
- Reporting details
- Progress updates
- Dates and timelines
- Summary information
- Page numbering

## Demo Video

[View Demo Video](https://drive.google.com/file/d/1xpFvry9KOewr2dR2weh3NAWkyxZkB65s/view?usp=drive_link)

## Assumptions

- Input data is supplied through JavaScript objects.
- PDF generation is handled through the browser's print functionality.
- The layout has been tested with different data scenarios to ensure consistency.

## Challenge Faced

One challenge was supporting different amounts of data while maintaining the report layout, which was resolved by generating the content dynamically using JavaScript and testing with multiple datasets.
