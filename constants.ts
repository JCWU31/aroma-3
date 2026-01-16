import { EssentialOil } from './types';

// Omit ID here as it's generated on insertion
export const INITIAL_OILS: Omit<EssentialOil, 'id' | 'createdAt'>[] = [
  {
    name: "真正薰衣草",
    latinName: "Lavandula angustifolia",
    hashtags: ["鎮靜", "睡眠", "燒燙傷", "皮膚"],
    summary: "精油界的萬用刀。以促進放鬆和安穩睡眠而聞名。",
    chemicalFamily: "酯類",
    molecules: [{ name: "乙酸芳樟酯", percentage: "30-45%" }, { name: "芳樟醇", percentage: "25-38%" }],
    physiological: "止痛、抗菌、抗發炎、抗痙攣。極佳的燒燙傷、傷口修復及皮膚再生功效。",
    psychological: "平衡神經系統。有助於焦慮、憂鬱和失眠。",
    painManagement: "頭痛、肌肉痠痛、抽筋。",
    safety: "公認安全 (GRAS)。無毒、無刺激性。",
    literature: { level: "Level 1 (RCT)", subjects: "80位產後婦女", conclusion: "吸嗅薰衣草精油顯著降低了產後憂鬱評分，並改善了睡眠品質 (P < 0.05)。" },
    recipe: { concentration: "3%", oilDrops: "真正薰衣草 4滴 + 甜橙 2滴", carrierOil: "10ml 甜杏仁油", usageMethod: "全身按摩或針對肩頸放鬆按摩。", frequency: "每晚睡前一次。" }
  },
  {
    name: "茶樹",
    latinName: "Melaleuca alternifolia",
    hashtags: ["殺菌", "免疫", "痘痘"],
    summary: "家庭急救箱必備，強大的廣譜殺菌劑。",
    chemicalFamily: "單萜醇",
    molecules: [{ name: "4-松油烯醇", percentage: "35-48%" }, { name: "γ-松油烯", percentage: "10-28%" }],
    physiological: "抗細菌、病毒、黴菌。治療香港腳、念珠菌、痤瘡。",
    psychological: "提振精神，掃除陰霾。",
    painManagement: "感染引起的紅腫痛。",
    safety: "氧化後可能刺激皮膚。貓科動物代謝較慢需小心。"
  }
];