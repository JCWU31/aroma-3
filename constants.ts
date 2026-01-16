import { EssentialOil } from './types';

// Omit ID here as it's generated on insertion
export const INITIAL_OILS: Omit<EssentialOil, 'id' | 'createdAt'>[] = [
  {
    name: "真正薰衣草",
    latinName: "Lavandula angustifolia",
    hashtags: ["經痛", "神經痛", "睡眠", "放鬆"],
    summary: "精油界的萬用刀。除了著名的助眠效果外，在疼痛管理與女性護理上也有卓越表現。",
    chemicalFamily: "酯類",
    molecules: [{ name: "乙酸芳樟酯", percentage: "30-45%" }, { name: "沈香醇/芳樟醇", percentage: "25-38%" }],
    physiological: "止痛、降血壓、改善冠狀動脈循環。對糖尿病神經性疼痛及經痛有顯著緩解效果。",
    psychological: "平衡神經系統，改善焦慮、憂鬱。注意：與香蜂草1:1混合可能導致過度鎮靜。",
    painManagement: "經痛、糖尿病神經性疼痛、分娩疼痛。",
    safety: "公認安全 (GRAS)。",
    literature: { 
      level: "RCT (雙盲臨床試驗)", 
      subjects: "原發性痛經患者", 
      conclusion: "使用複方精油按摩下腹部，能顯著緩解經痛，並縮短疼痛持續時間。" 
    },
    recipe: { 
      concentration: "3%", 
      oilDrops: "真正薰衣草 2滴 + 甜馬鬱蘭 1滴 + 快樂鼠尾草 1滴", 
      carrierOil: "基底油適量", 
      usageMethod: "月經結束至下次月經開始，每天按摩下腹部。", 
      frequency: "每日一次" 
    }
  },
  {
    name: "茶樹",
    latinName: "Melaleuca alternifolia",
    hashtags: ["殺菌", "抗病毒", "口腔護理", "傷口"],
    summary: "強效的抗感染精油，能破壞細菌細胞膜，對抗藥性細菌亦有效。",
    chemicalFamily: "單萜醇",
    molecules: [{ name: "4-松油烯醇", percentage: "35-48%" }, { name: "γ-松油烯", percentage: "10-28%" }],
    physiological: "廣譜殺菌（金黃色葡萄球菌、克雷伯菌）、抗病毒（A型流感）、抗黴菌。亦可用於改善口臭及牙菌斑。",
    psychological: "提振精神，激勵免疫系統。",
    painManagement: "感染引起的紅腫疼痛。",
    safety: "氧化後可能刺激皮膚。貓科動物代謝較慢需小心。",
    literature: {
      level: "Time-kill Studies (體外實驗)",
      subjects: "臨床分離菌株 (MRSA等)",
      conclusion: "茶樹精油顯示出對抗多種抗藥性細菌的顯著殺滅率。"
    },
    recipe: {
      concentration: "漱口水配方",
      oilDrops: "茶樹 3滴 + 薄荷 3滴 + 檸檬 3滴",
      carrierOil: "500ml 水",
      usageMethod: "混合均勻後漱口30秒，減少口腔異味和揮發性硫化物。",
      frequency: "每日使用"
    }
  },
  {
    name: "薑",
    latinName: "Zingiber officinale",
    hashtags: ["關節炎", "膝蓋痛", "循環", "免疫"],
    summary: "溫暖辛辣的根部精油，能促進血液循環，對寒性體質及退化性關節疼痛有極佳幫助。",
    chemicalFamily: "倍半萜烯",
    molecules: [{ name: "薑烯", percentage: "30-40%" }, { name: "薑黃素", percentage: "微量" }],
    physiological: "止痛、抗發炎、促進消化。增加白血球數量，提升體液免疫反應。",
    psychological: "溫暖身心，給予支持與力量。",
    painManagement: "退化性關節炎、膝蓋疼痛、肌肉痠痛。",
    safety: "皮膚敏感者需低劑量使用。",
    literature: {
      level: "Experimental Study",
      subjects: "香港長者 (中重度膝關節痛)",
      conclusion: "搭配按摩有助緩解短期膝關節不適，生薑萃取物攝取6週可減少四成疼痛。"
    },
    recipe: {
      concentration: "1.5%",
      oilDrops: "薑 1% + 甜橙 0.5%",
      carrierOil: "橄欖油",
      usageMethod: "按摩下肢30分鐘。",
      frequency: "3週內進行6次"
    }
  },
  {
    name: "檸檬香茅",
    latinName: "Cymbopogon citratus",
    hashtags: ["痛風", "糖尿病", "抗氧化", "驅蟲"],
    summary: "強烈的檸檬香氣，傳統用於緩解疼痛、抗發炎及作為強效驅蟲劑。",
    chemicalFamily: "醛類",
    molecules: [{ name: "檸檬醛", percentage: "65-85%" }],
    physiological: "抗氧化、抗發炎。對糖尿病傷口癒合有幫助，亦應用於緩解痛風疼痛。",
    psychological: "提振精神，消除疲勞。",
    painManagement: "痛風關節痛、神經痛。",
    safety: "醛類含量高，可能刺激皮膚，需低劑量使用。青光眼患者慎用。",
    literature: {
      level: "Bioactivity Study",
      subjects: "N/A",
      conclusion: "具有顯著抗氧化活性，應用於痛風和糖尿病護理。"
    },
    recipe: {
      concentration: "5%",
      oilDrops: "檸檬香茅精油",
      carrierOil: "基底油",
      usageMethod: "塗抹於急性痛風發作之疼痛處；或用於糖尿病足部保養。",
      frequency: "急性期使用或日常保養"
    }
  },
  {
    name: "迷迭香",
    latinName: "Rosmarinus officinalis",
    hashtags: ["記憶力", "專注", "運動表現", "阿茲海默"],
    summary: "大腦的守護者。能顯著提升記憶力、專注力及警覺性，亦能提升運動表現。",
    chemicalFamily: "酮類/氧化物",
    molecules: [{ name: "1,8-桉油醇", percentage: "35-45%" }, { name: "樟腦", percentage: "10-20%" }],
    physiological: "促進循環、緩解肌肉痠痛、防脫髮。降低皮質醇濃度。",
    psychological: "提升認知功能，改善預期記憶（Prospective Memory）。",
    painManagement: "肌肉疲勞、風濕痛。",
    safety: "高血壓、癲癇患者及孕婦慎用（因含樟腦）。",
    literature: {
      level: "Conference Study",
      subjects: "150名 65歲以上健康長者",
      conclusion: "處於迷迭香香氣環境中，預期記憶測驗表現增強15%，且警覺性提高。"
    },
    recipe: {
      concentration: "2%",
      oilDrops: "迷迭香 + 薄荷",
      carrierOil: "乳霜",
      usageMethod: "塗抹於大腿、腹部、背部，幫助提升運動敏捷度及爆發力。",
      frequency: "持續使用7天"
    }
  },
  {
    name: "甜羅勒",
    latinName: "Ocimum basilicum",
    hashtags: ["偏頭痛", "專注", "消化"],
    summary: "溫暖辛香的草本氣味，有助於清晰思緒，是緩解頭痛與消化不適的良方。",
    chemicalFamily: "醚類",
    molecules: [{ name: "甲基列膠酚", percentage: "70-90%" }],
    physiological: "強效抗痙攣、止痛。對偏頭痛有顯著輔助治療效果。",
    psychological: "釐清思緒，抗憂鬱。",
    painManagement: "偏頭痛、經痛。",
    safety: "醚類可能對皮膚有刺激性，建議低劑量。孕婦慎用。",
    literature: {
      level: "Randomized Triple-Blind Study",
      subjects: "偏頭痛患者",
      conclusion: "搭配普拿疼使用，6%精油局部塗抹效果最好，可減緩偏頭痛發作頻率及強度。"
    },
    recipe: {
      concentration: "6%",
      oilDrops: "甜羅勒精油",
      carrierOil: "基底油",
      usageMethod: "局部塗抹於太陽穴或肩頸。",
      frequency: "每8小時一次 (搭配常規治療)"
    }
  },
  {
    name: "快樂鼠尾草",
    latinName: "Salvia sclarea",
    hashtags: ["更年期", "荷爾蒙", "紓壓", "記憶"],
    summary: "女性的良伴，能平衡荷爾蒙，緩解更年期不適，並具有增強記憶力的潛力。",
    chemicalFamily: "酯類",
    molecules: [{ name: "乙酸芳樟酯", percentage: "60-70%" }, { name: "沈香醇/芳樟醇", percentage: "10-20%" }],
    physiological: "抗痙攣、降血壓。抑制乙醯膽鹼酯酶（可能增強記憶）。",
    psychological: "深度放鬆，抗憂鬱，緩解更年期心理壓力。",
    painManagement: "經痛、肌肉緊繃。",
    safety: "使用後避免飲酒（可能加重酒醉感）。乳腺增生者慎用。",
    literature: {
      level: "Study",
      subjects: "中年女性",
      conclusion: "嗅吸精油有助於減輕身心壓力，前額葉皮質α波增加，皮質醇下降。"
    },
    recipe: {
      concentration: "純精油",
      oilDrops: "快樂鼠尾草",
      carrierOil: "無 (嗅吸)",
      usageMethod: "香氣吸入法。",
      frequency: "每天10:00、14:00、18:00及睡前各嗅吸1分鐘，持續兩週。"
    }
  },
  {
    name: "佛手柑",
    latinName: "Citrus bergamia",
    hashtags: ["快樂", "成癮", "焦慮", "抗病毒"],
    summary: "陽光般的柑橘香氣，能促進快樂荷爾蒙釋放，對抗憂鬱與成癮。",
    chemicalFamily: "酯類/單萜烯",
    molecules: [{ name: "檸檬烯", percentage: "30-45%" }, { name: "乙酸芳樟酯", percentage: "25-35%" }],
    physiological: "抗病毒（A型流感）、抗菌。促進多巴胺、血清素、腦內啡釋放。",
    psychological: "抗憂鬱、抗焦慮。協助治療遊戲障礙及菸癮戒斷。",
    painManagement: "壓力性頭痛。",
    safety: "具光敏性，使用後12小時內避免日曬。",
    literature: {
      level: "Study",
      subjects: "遊戲障礙/憂鬱傾向者",
      conclusion: "具有抗抑鬱藥和抗焦慮藥的作用，可協助改善成癮行為。"
    },
    recipe: {
      concentration: "擴香",
      oilDrops: "佛手柑 + 茶樹 + 尤加利",
      carrierOil: "無",
      usageMethod: "室內擴香，減少環境病毒載量並提振情緒。",
      frequency: "每日"
    }
  },
  {
    name: "乳香",
    latinName: "Boswellia carterii",
    hashtags: ["產痛", "修復", "靜心", "免疫"],
    summary: "神聖的樹脂香氣，能加深呼吸，安撫心靈，並促進產程順利。",
    chemicalFamily: "單萜烯",
    molecules: [{ name: "α-蒎烯", percentage: "30-50%" }, { name: "檸檬烯", percentage: "10-20%" }],
    physiological: "止痛（分娩痛）、抗發炎、促進傷口癒合、免疫調節（抑制乙醯膽鹼酯酶）。",
    psychological: "極佳的鎮靜與冥想用油，消除恐懼。",
    painManagement: "分娩疼痛、關節炎。",
    safety: "氧化後可能引起皮膚過敏。",
    literature: {
      level: "Clinical Trial",
      subjects: "126名未生育婦女",
      conclusion: "吸入乳香精油顯著緩解第一產程的產痛強度。"
    },
    recipe: {
      concentration: "嗅吸",
      oilDrops: "乳香精油",
      carrierOil: "沾於衣領貼/面紙",
      usageMethod: "將沾有精油的貼片貼於衣領，持續嗅吸。",
      frequency: "每30分鐘更換一次"
    }
  },
  {
    name: "甜馬鬱蘭",
    latinName: "Origanum majorana",
    hashtags: ["高血壓", "失眠", "放鬆", "副交感"],
    summary: "溫暖的草本香氣，能強效放鬆副交感神經，是著名的「心臟保養油」。",
    chemicalFamily: "單萜醇",
    molecules: [{ name: "萜品烯-4-醇", percentage: "20-30%" }, { name: "γ-松油烯", percentage: "10-15%" }],
    physiological: "擴張血管、降低血壓、抗痙攣。抑制交感神經活動。",
    psychological: "安撫焦慮，改善神經性失眠。",
    painManagement: "肌肉痠痛、經痛。",
    safety: "開車或需專注時避免使用（具鎮靜效果）。",
    literature: {
      level: "Study",
      subjects: "N/A",
      conclusion: "嗅吸10分鐘可顯著降低交感神經活動，使心律和血壓下降。"
    },
    recipe: {
      concentration: "嗅吸",
      oilDrops: "甜馬鬱蘭精油",
      carrierOil: "無",
      usageMethod: "深呼吸嗅吸法，幫助平復情緒與血壓。",
      frequency: "需要放鬆時使用10分鐘"
    }
  },
  {
    name: "香蜂草",
    latinName: "Melissa officinalis",
    hashtags: ["失智症", "躁動", "鎮靜"],
    summary: "強效的鎮靜劑，對於改善失智症患者的躁動行為有顯著效果。",
    chemicalFamily: "醛類",
    molecules: [{ name: "檸檬醛", percentage: "30-40%" }, { name: "β-石竹烯", percentage: "10-15%" }],
    physiological: "鎮靜神經、抗病毒。改善躁動行為及社交退避。",
    psychological: "安撫極度不安的情緒。",
    painManagement: "神經性疼痛。",
    safety: "可能導致過度鎮靜，與薰衣草1:1混合時需注意。",
    literature: {
      level: "Study",
      subjects: "重度失智症患者",
      conclusion: "可降低重度失智症患者不安，有助於改善躁動行為及社交退避。"
    },
    recipe: {
      concentration: "擴香",
      oilDrops: "香蜂草精油",
      carrierOil: "無",
      usageMethod: "室內擴香，安撫患者情緒。",
      frequency: "每日"
    }
  },
  {
    name: "紅檜/扁柏",
    latinName: "Chamaecyparis formosensis",
    hashtags: ["壓力", "自律神經", "放鬆"],
    summary: "台灣特有的森林氣息，能有效調節自律神經系統。",
    chemicalFamily: "倍半萜烯",
    molecules: [{ name: "α-蒎烯", percentage: "N/A" }],
    physiological: "降低交感神經活性（解除緊繃），或降低副交感活性（集中專注，黃檜）。",
    psychological: "舒緩巨大壓力，改善工作疲勞。",
    painManagement: "肌肉緊繃。",
    safety: "安全。",
    literature: {
      level: "Study",
      subjects: "上班族",
      conclusion: "嗅吸20分鐘，HRV（心率變異度）明顯高於對照組，有效舒緩壓力。"
    },
    recipe: {
      concentration: "嗅吸",
      oilDrops: "日本扁柏/紅檜精油",
      carrierOil: "無",
      usageMethod: "嗅吸5-20分鐘。",
      frequency: "每日"
    }
  },
  {
    name: "大馬士革玫瑰",
    latinName: "Rosa damascena",
    hashtags: ["更年期", "性功能", "荷爾蒙", "情緒"],
    summary: "花中之后，對生殖系統與情緒有深層的調節作用。",
    chemicalFamily: "單萜醇",
    molecules: [{ name: "香茅醇", percentage: "30-50%" }, { name: "格蘭尼奧", percentage: "15-25%" }],
    physiological: "改善男性性功能及睪固酮；改善更年期熱潮紅。口服純露可改善糖尿病肝腎功能。",
    psychological: "提升自尊，抗憂鬱，撫平創傷。",
    painManagement: "經痛。",
    safety: "懷孕初期慎用。",
    literature: {
      level: "Double-blind RCT",
      subjects: "男性鴉片類藥物使用者",
      conclusion: "改善性功能及睪固酮水平。"
    },
    recipe: {
      concentration: "複方",
      oilDrops: "薰衣草4 + 玫瑰天竺葵2 + 玫瑰1 + 茉莉1",
      carrierOil: "基底油",
      usageMethod: "按摩，改善更年期熱潮紅、憂鬱和疼痛。",
      frequency: "每週按摩"
    }
  },
  {
    name: "黑胡椒",
    latinName: "Piper nigrum",
    hashtags: ["戒菸", "循環", "消化"],
    summary: "溫暖的辛香料，能激勵身心，並有助於克服菸癮。",
    chemicalFamily: "倍半萜烯",
    molecules: [{ name: "β-石竹烯", percentage: "20-30%" }],
    physiological: "促進血液循環，幫助戒菸（緩解戒斷症狀）。保護神經（胡椒鹼）。",
    psychological: "增強意志力。",
    painManagement: "肌肉僵硬。",
    safety: "高濃度可能刺激皮膚。",
    literature: {
      level: "Study",
      subjects: "吸菸者",
      conclusion: "吸入黑胡椒精油蒸氣可減少吸菸戒斷症狀。"
    },
    recipe: {
      concentration: "嗅吸",
      oilDrops: "黑胡椒精油",
      carrierOil: "無",
      usageMethod: "菸癮來襲時嗅吸。",
      frequency: "需要時"
    }
  },
  {
    name: "德國洋甘菊",
    latinName: "Matricaria recutita",
    hashtags: ["過敏", "抗發炎", "皮膚"],
    summary: "藍色的奇蹟，強效抗組織胺與抗發炎。",
    chemicalFamily: "倍半萜烯",
    molecules: [{ name: "母菊天藍烴", percentage: "5-15%" }, { name: "α-沒藥醇", percentage: "20-40%" }],
    physiological: "抑制肥大細胞釋放組織胺（抗過敏），抗發炎，促進傷口癒合。",
    psychological: "平靜鎮定，但可能會降低記憶力和注意力速度。",
    painManagement: "發炎性疼痛。",
    safety: "通經作用，孕婦慎用。",
    literature: {
      level: "Study",
      subjects: "過敏模型",
      conclusion: "具有抗過敏活性，能抑制肥大細胞介導的過敏反應。"
    },
    recipe: {
      concentration: "1-3%",
      oilDrops: "德國洋甘菊",
      carrierOil: "金盞花浸泡油",
      usageMethod: "塗抹於過敏或發炎皮膚。",
      frequency: "每日數次"
    }
  }
];