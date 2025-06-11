export const CustomerServiceMonthOptions = [
  {
    value: 'Jan',
    label: '1月-10W',
  },
  {
    value: 'Feb',
    label: '2月-10W',
  },
  {
    value: 'Mar',
    label: '3月-20W',
  },
  {
    value: 'Apr',
    label: '4月-30W',
  },
  {
    value: 'May',
    label: '5月-40W',
  },
  {
    value: 'Jun',
    label: '6月-30W',
  },
  {
    value: 'Jul',
    label: '7月-10W',
  },
  {
    value: 'Aug',
    label: '8月-10W',
  },
  {
    value: 'Sep',
    label: '9月-20W',
  },
  {
    value: 'Oct',
    label: '10月-30W',
  },
  {
    value: 'Nov',
    label: '11月-40W',
  },
  {
    value: 'Dec',
    label: '12月-30W',
  },
]

export const baseSalaryConfig = [
    { threshold: 300000, salary: 4000 },
    { threshold: 400000, salary: 4500 },
    { threshold: 500000, salary: 5000 },
    { threshold: 600000, salary: 5500 },
    { threshold: 700000, salary: 6000 },
    { threshold: Infinity, salary: 7000 },
];

export const enum PerformanceObjectives {
    W10 = 100000,
    W20 = 200000,
    W30 = 300000,
    W40 = 400000,
}

export const customerPerformanceObjectivesMap = [
    {
    value: 'Jan',
    label: PerformanceObjectives.W10,
  },
  {
    value: 'Feb',
    label: PerformanceObjectives.W10,
  },
  {
    value: 'Mar',
    label: PerformanceObjectives.W20,
  },
  {
    value: 'Apr',
    label: PerformanceObjectives.W30,
  },
  {
    value: 'May',
    label: PerformanceObjectives.W40,
  },
  {
    value: 'Jun',
    label: PerformanceObjectives.W30,
  },
  {
    value: 'Jul',
    label: PerformanceObjectives.W10,
  },
  {
    value: 'Aug',
    label: PerformanceObjectives.W10,
  },
  {
    value: 'Sep',
    label: PerformanceObjectives.W20,
  },
  {
    value: 'Oct',
    label: PerformanceObjectives.W30,
  },
  {
    value: 'Nov',
    label: PerformanceObjectives.W40,
  },
  {
    value: 'Dec',
    label: PerformanceObjectives.W30,
  },
]

export const CustomerXLSXHeaders = {
    name: '姓名',
    storePerformance: '业绩',
    month: '月份',
    basicSalary: '底薪',
    performanceRanking: '排名',
    basicCommissionRatio: '基础提成点',
    excessCommissionRatio: '超额提成点',
    finalCommissionRatio: '最终提成点',
    commissionAmount: '提成金额',
    teamBonus: '团队奖金',
    outstandingCustomerServiceReward: '优秀客服奖励',
    actualSalaryPaid: '实发工资',
}
