import { baseSalaryConfig, customerPerformanceObjectivesMap } from '../const/customer-service.ts'
import { monthMap } from '../const/const.ts'

// 计算目标
function basicSalaryMatch(storePerformance) {
  const config = baseSalaryConfig;
  for (const { threshold, salary } of config) {
    if (storePerformance <= threshold) {
      return salary;
    }
  }
  return 0; // 正常不会到这里
}

// 当月目标业绩金额计算
export function customerPerformanceObjectivesCalc (month) {
    const customerPerformanceObjectives = customerPerformanceObjectivesMap.find(item => item.value === month)?.label;
    return customerPerformanceObjectives
}

// 当月团队目标业绩金额计算
export function TeamcustomerPerformanceObjectivesCalc (month, customerCount) {
    const teamcustomerPerformanceObjectives = customerPerformanceObjectivesCalc(month) * customerCount
    return teamcustomerPerformanceObjectives
}

// 计算底薪
export function basicSalaryCalc (storePerformance) {
    const basicSalary = basicSalaryMatch(storePerformance)
    return basicSalary
}

// 计算业绩排名
export function performanceCommissionCalc (month, salaryList) {
    const sorted = [...salaryList].sort((a, b) => b.storePerformance - a.storePerformance);
    salaryList.forEach(item => {
        item.month = monthMap.find(item => item.value === month)?.label || null;
        item.basicSalary = basicSalaryCalc(item.storePerformance)
        const performanceRanking = sorted.findIndex(sortedItem => sortedItem === item) + 1;
        let basicCommissionRatio = 0.01;
        if (performanceRanking === 1) basicCommissionRatio = 0.015;
        else if (performanceRanking === 2) basicCommissionRatio = 0.013;
        else if (performanceRanking === 3) basicCommissionRatio = 0.011;
        item.performanceRanking = performanceRanking;
        item.basicCommissionRatio = basicCommissionRatio;
        item.basicCommissionRatioShow = basicCommissionRatio * 100 + '%';
        item.excessCommissionRatio = item.storePerformance / customerPerformanceObjectivesCalc(month)
        item.finalCommissionRatio = item.basicCommissionRatio * item.excessCommissionRatio
        item.commissionAmount = item.storePerformance * item.finalCommissionRatio
  });
}

// 团队奖金计算
function distributeTeamBonus(month, salaryList) {
    // 计算团队目标总业绩
    const target = TeamcustomerPerformanceObjectivesCalc(month, salaryList.length)
    // 1. 计算团队总业绩
    const totalPerformance = salaryList.reduce((sum, person) => sum + person.storePerformance, 0);

    // 2. 计算团队超额业绩
    const over = totalPerformance - target;

    let teamBonusTotal = 0;

    // 3. 计算团队奖金总额
    if (over > 100000 && over <= 200000) {
        teamBonusTotal = over * 0.025;
    } else if (over > 200000 && over <= 400000) {
        teamBonusTotal = over * 0.03;
    } else if (over > 400000 && over <= 600000) {
        teamBonusTotal = over * 0.035;
    } else if (over > 600000) {
        teamBonusTotal = over * 0.04;
    }

    // 4. 分配给每个人（按个人业绩 / 总业绩）
    salaryList.forEach(person => {
        const ratio = person.storePerformance / totalPerformance;
        person.teamBonus = teamBonusTotal > 0 ? +(teamBonusTotal * ratio).toFixed(2) : 0;
    });
}

// 优秀客服奖励计算
export function outstandingCustomerServiceRewardCalc (salaryList) {
    salaryList.forEach(item => {
        item.outstandingCustomerServiceReward = item.storePerformance >= 500000 ? 500 : 0;
    });
}

// 实发工资计算
export function actualSalaryPaidCalc (salaryList) {
    salaryList.forEach(item => {
        item.actualSalaryPaid = (item.basicSalary + item.commissionAmount + item.outstandingCustomerServiceReward).toFixed(2)
    });
}

export function calcAll (month, salaryList) {
    // 计算提成
    performanceCommissionCalc(month, salaryList)

    // 计算团队奖金
    distributeTeamBonus(month, salaryList)
    
    // 计算优秀客服奖金
    outstandingCustomerServiceRewardCalc(salaryList)

    // 实发工资
    actualSalaryPaidCalc(salaryList)
}
