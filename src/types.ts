export interface MenuItem {
  id: string;
  name: string;
  nameAm?: string;
  nameOm?: string;
  description: string;
  descriptionAm?: string;
  descriptionOm?: string;
  price: number; // in ETB
  category: string;
  image: string;
  isPopular?: boolean;
  isChefChoice?: boolean;
  isSpicy?: boolean;
  isGlutenFree?: boolean; // Injera is traditionally gluten-free (teff)
  isVegan?: boolean;
  isAvailable: boolean;
  notes?: string;
}

export type MenuCategoryKey = string;

export interface CategoryInfo {
  key: MenuCategoryKey;
  label: string;
  labelAm?: string;
  labelOm?: string;
  description: string;
  descriptionAm?: string;
  descriptionOm?: string;
  count: number;
}
