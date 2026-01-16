export interface ChemicalMolecule {
  name: string;
  percentage: string;
}

export interface Literature {
  level: string;
  subjects: string;
  conclusion: string;
}

export interface Recipe {
  concentration: string;
  oilDrops: string;
  carrierOil: string;
  usageMethod: string;
  frequency: string;
}

export interface EssentialOil {
  id: string;
  name: string;
  latinName: string;
  hashtags: string[];
  summary: string;
  chemicalFamily: string;
  molecules: ChemicalMolecule[];
  physiological: string;
  psychological: string;
  painManagement: string;
  safety: string;
  literature?: Literature;
  recipe?: Recipe;
  createdAt?: number;
}

export enum ViewState {
  LIST = 'LIST',
  DETAIL = 'DETAIL',
  EDIT = 'EDIT',
  CREATE = 'CREATE'
}