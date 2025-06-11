export const DesignerMonthOptions = [
  {
    value: 'Jan',
    label: '1月-淡季',
  },
  {
    value: 'Feb',
    label: '2月-淡季',
  },
  {
    value: 'Mar',
    label: '3月-淡季',
  },
  {
    value: 'Apr',
    label: '4月-旺季',
  },
  {
    value: 'May',
    label: '5月-旺季',
  },
  {
    value: 'Jun',
    label: '6月-旺季',
  },
  {
    value: 'Jul',
    label: '7月-淡季',
  },
  {
    value: 'Aug',
    label: '8月-淡季',
  },
  {
    value: 'Sep',
    label: '9月-旺季',
  },
  {
    value: 'Oct',
    label: '10月-旺季',
  },
  {
    value: 'Nov',
    label: '11月-旺季',
  },
  {
    value: 'Dec',
    label: '12月-淡季',
  },
]

export const enum DesignerMonthType {
    offSeason = 'off-season', // 淡季
    peakSeason = 'peak-season', // 旺季
}

export const DesignerMonthTypeMap = [
    {
    value: 'Jan',
    label: DesignerMonthType.offSeason,
  },
  {
    value: 'Feb',
    label: DesignerMonthType.offSeason,
  },
  {
    value: 'Mar',
    label: DesignerMonthType.offSeason,
  },
  {
    value: 'Apr',
    label: DesignerMonthType.peakSeason,
  },
  {
    value: 'May',
    label: DesignerMonthType.peakSeason,
  },
  {
    value: 'Jun',
    label: DesignerMonthType.peakSeason,
  },
  {
    value: 'Jul',
    label: DesignerMonthType.offSeason,
  },
  {
    value: 'Aug',
    label: DesignerMonthType.offSeason,
  },
  {
    value: 'Sep',
    label: DesignerMonthType.peakSeason,
  },
  {
    value: 'Oct',
    label: DesignerMonthType.peakSeason,
  },
  {
    value: 'Nov',
    label: DesignerMonthType.peakSeason,
  },
  {
    value: 'Dec',
    label: DesignerMonthType.offSeason,
  },
]

export const baseSalaryConfig = [
    { threshold: 250, salary: 4000 },
    { threshold: 300, salary: 4200 },
    { threshold: 350, salary: 4600 },
    { threshold: Infinity, salary: 5000 },
]

export const unitPriceConfig = [
    { threshold: 100, salary: 4 },
    { threshold: 180, salary: 6 },
    { threshold: 280, salary: 8 },
    { threshold: Infinity, salary: 10 },
]

export const DesignerXLSXHeaders = {
    name: '姓名', 
    assemblyOrderQuantity: '总成单量', 
    totalPhotoEditingVolume: '总修图量', 
    month: '月份', 
    basicSalary: '底薪', 
    commissionBonus: '提成金额', 
    highYieldBonus: '高产奖金', 
    flawlessBonus: '零瑕奖金', 
    deduction: '售后返工扣款', 
    actualSalaryPaid: '实发工资',
}