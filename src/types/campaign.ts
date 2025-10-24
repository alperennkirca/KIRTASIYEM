export interface Campaign {
  id: number;
  title: string;
  description: string;
  type: 'percentage' | 'buyXPayY';
  discount: string; // Display text like '%20' or '3 Al 2 Öde'
  discountValue?: number; // Percentage value (20 for 20%)
  buyX?: number; // For buyXPayY campaigns (buy 3)
  payY?: number; // For buyXPayY campaigns (pay 2)
  validUntil: string;
  icon: string;
  color: string;
  category: string; // Category slug
  isActive: boolean;
}
