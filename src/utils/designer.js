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
function unitPrice(totalDesignQuantity) {
    const config = unitPriceConfig;
    for (const { threshold, salary } of config) {
    if (totalDesignQuantity <= threshold) {
      return salary;
    }
  }
  return 0; // 正常不会到这里
}

// 提成计算
function commissionBonusCalc(totalDesignQuantity, totalPhotoEditingVolume) {
    const designBonus = unitPrice(totalDesignQuantity) * totalDesignQuantity
    const photoEditing = totalPhotoEditingVolume * 4
    return designBonus + photoEditing
}

// 高产奖金计算
function highYieldBonusCalc(month, totalDesignQuantity) {
    const designerMonthType = DesignerMonthTypeMap.find(item => item.value === month)?.label || null;
    if (designerMonthType === DesignerMonthType.peakSeason && totalDesignQuantity > 300) return 600
    return 0
}

export function calcAll (month, salaryList) {
    salaryList.forEach(item => {
        item.month = monthMap.find(item => item.value === month)?.label || null;
        item.basicSalary = basicSalaryMatch(item.assemblyOrderQuantity)
        item.commissionBonus = commissionBonusCalc(item.totalDesignQuantity, item.totalPhotoEditingVolume)
        item.highYieldBonus = highYieldBonusCalc(month, item.totalDesignQuantity)
        item.actualSalaryPaid = item.basicSalary + item.commissionBonus + item.highYieldBonus + item.flawlessBonus - item.deduction
    })
}