import { DesignerMonthTypeMap, DesignerMonthType, baseSalaryConfig, unitPriceConfig } from '../const/designer.ts'
import { monthMap } from '../const/const.ts'

// 计算底薪
function basicSalaryMatch(storePerformance) {
  const config = baseSalaryConfig;
  for (const { threshold, salary } of config) {
    if (storePerformance <= threshold) {
      return salary;
    }
  }
  return 0; // 正常不会到这里
}

// 设计单价计算
function unitPrice(assemblyOrderQuantity) {
    const config = unitPriceConfig;
    for (const { threshold, salary } of config) {
    if (assemblyOrderQuantity <= threshold) {
      return salary;
    }
  }
  return 0; // 正常不会到这里
}

// 提成计算
function commissionBonusCalc(assemblyOrderQuantity, totalPhotoEditingVolume) {
    const designBonus = unitPrice(assemblyOrderQuantity) * assemblyOrderQuantity
    const photoEditing = totalPhotoEditingVolume * 4
    return designBonus + photoEditing
}

// 高产奖金计算
function highYieldBonusCalc(month, assemblyOrderQuantity) {
    const designerMonthType = DesignerMonthTypeMap.find(item => item.value === month)?.label || null;
    if (designerMonthType === DesignerMonthType.peakSeason && assemblyOrderQuantity > 300) return 600
    return 0
}

export function calcAll (month, salaryList) {
    salaryList.forEach(item => {
        const designerMonthType = DesignerMonthTypeMap.find(item => item.value === month)?.label || null;
        if (designerMonthType !== DesignerMonthType.peakSeason) {
            item.flawlessBonus = 0
        }
        item.month = monthMap.find(item => item.value === month)?.label || null;
        item.basicSalary = basicSalaryMatch(item.assemblyOrderQuantity)
        item.commissionBonus = commissionBonusCalc(item.assemblyOrderQuantity, item.totalPhotoEditingVolume)
        item.highYieldBonus = highYieldBonusCalc(month, item.assemblyOrderQuantity)

        item.actualSalaryPaid = item.basicSalary + item.commissionBonus + item.highYieldBonus + item.flawlessBonus - item.deduction
    })
}