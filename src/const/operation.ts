export const OperationMonthOptions = [
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
    label: '3月-平季',
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
    label: '12月-平季',
  },
]

export const enum OperationMonthType {
    offSeason = 'off-season', // 淡季
    averageSeason = 'average-season', // 平季
    peakSeason = 'peak-season', // 旺季
}

export const OperationMonthTypeMap = [
    {
    value: 'Jan',
    label: OperationMonthType.offSeason,
  },
  {
    value: 'Feb',
    label: OperationMonthType.offSeason,
  },
  {
    value: 'Mar',
    label: OperationMonthType.averageSeason,
  },
  {
    value: 'Apr',
    label: OperationMonthType.peakSeason,
  },
  {
    value: 'May',
    label: OperationMonthType.peakSeason,
  },
  {
    value: 'Jun',
    label: OperationMonthType.peakSeason,
  },
  {
    value: 'Jul',
    label: OperationMonthType.offSeason,
  },
  {
    value: 'Aug',
    label: OperationMonthType.offSeason,
  },
  {
    value: 'Sep',
    label: OperationMonthType.peakSeason,
  },
  {
    value: 'Oct',
    label: OperationMonthType.peakSeason,
  },
  {
    value: 'Nov',
    label: OperationMonthType.peakSeason,
  },
  {
    value: 'Dec',
    label: OperationMonthType.averageSeason,
  },
]

export const baseSalaryConfig = {
  [OperationMonthType.offSeason]: [
    { threshold: 50000, salary: 4500 },
    { threshold: 150000, salary: 5000 },
    { threshold: 250000, salary: 5500 },
    { threshold: 350000, salary: 6000 },
    { threshold: Infinity, salary: 6500 },
  ],
  [OperationMonthType.averageSeason]: [
    { threshold: 150000, salary: 4500 },
    { threshold: 300000, salary: 5000 },
    { threshold: 400000, salary: 5500 },
    { threshold: 500000, salary: 6000 },
    { threshold: Infinity, salary: 6500 },
  ],
  [OperationMonthType.peakSeason]: [
    { threshold: 250000, salary: 4500 },
    { threshold: 450000, salary: 5000 },
    { threshold: 650000, salary: 5500 },
    { threshold: 850000, salary: 6000 },
    { threshold: Infinity, salary: 6500 },
  ],
};

export const OperationXLSXHeaders = {
    name: '姓名',
    storePerformance: '全店业绩',
    ROI: '投产比',
    month: '月份',
    basicSalary: '底薪',
    commissionRatioShow: '提成比例',
    commissionAmount: '提成金额', 
    performanceBonus: '业绩奖金', 
    ROIBonus: 'ROI奖金', 
    actualSalaryPaid: '实发工资' ,
}