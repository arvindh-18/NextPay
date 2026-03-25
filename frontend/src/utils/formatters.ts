export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

/**
 * Maps the 0.0-1.0 criticality_score to a Tailwind color class
 */
export const getCriticalityColor = (score: number): string => {
  if (score >= 0.8) return 'text-red-500 font-bold';
  if (score >= 0.5) return 'text-amber-500';
  return 'text-emerald-500';
};