import { OperationMonthTypeMap, baseSalaryConfig, OperationMonthType } from '../const/operation.ts'

function basicSalaryMatch(operationMonthType, storePerformance) {
  const config = baseSalaryConfig[operationMonthType];
  for (const { threshold, salary } of config) {
    if (storePerformance < threshold) {
      return salary;
    }
  }
  return 0; // 正常不会到这里
}
export function basicSalaryCalc (month, storePerformance) {
    const operationMonthType = OperationMonthTypeMap.find(item => item.value === month)?.label || null;
    const basicSalary = basicSalaryMatch(operationMonthType, storePerformance)
    return basicSalary
}

export function commissionRatioCalc (roi) {
    if (roi <= 5) return 0.01;
    if (roi <= 6) return 0.0125;
    if (roi <= 7) return 0.015;
    if (roi <= 8) return 0.02;
    return 0.025;
}

export function commissionAmountCalc (storePerformance, commissionRatio) {
    return storePerformance * commissionRatio
}

export function performanceBonusCalc (month, storePerformance) {
    const operationMonthTypeInput = OperationMonthTypeMap.find(item => item.value === month)?.label || null;
    if (operationMonthTypeInput === OperationMonthType.peakSeason && storePerformance >= 400000) return 300;
    if (operationMonthTypeInput !== OperationMonthType.peakSeason && storePerformance >= 300000) return 300;
    return 0
}

export function ROIBonusCalc (roi) {
    if (roi >= 5.5) return 300
    return 0
}