function minDate(dates) {
    // Convert the dates into Date objects
    const dateObjects = dates.map(date => new Date(date));
    
    // Find the earliest date using Math.min with spread operator
    const earliestDate = new Date(Math.min(...dateObjects));
    
    // Format the earliest date back to "YYYY/MM/DD"
    const year = earliestDate.getFullYear();
    const month = String(earliestDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(earliestDate.getDate()).padStart(2, '0');
    
    return `${year}/${month}/${day}`;
}