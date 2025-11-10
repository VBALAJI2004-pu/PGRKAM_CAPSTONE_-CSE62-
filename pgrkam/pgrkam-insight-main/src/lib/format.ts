export const formatSalaryRange = (salary: string): string => {
	// Replace hyphen range between amounts with " to "
	// Examples: "20,000 - 28,000", "₹3,00,000 - ₹5,00,000 per annum"
	if (!salary) return salary;
	// Replace " - " between digits/currency with " to "
	return salary.replace(/(\d|\u20B9)\s*-\s*(\d)/g, '$1 to $2');
};


