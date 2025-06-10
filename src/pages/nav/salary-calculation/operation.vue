<template>
  <div class="baseInfo">
    <div class="itemInfo">
      <span>月份：</span>
      <el-select
        v-model="month"
        placeholder="Select"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in OperationMonthOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
  
  <el-table :data="salaryList" style="width: 100%">
    <el-table-column prop="name" label="姓名">
      <template #default="scope">
        <el-input v-model="scope.row.name" size="small" />
      </template>
    </el-table-column>
    <el-table-column label="全店业绩">
      <template #default="scope">
        <el-input-number v-model="scope.row.storePerformance" :min="0" size="small" :controls="false" />
      </template>
    </el-table-column>
    <el-table-column label="投产比">
      <template #default="scope">
        <el-input-number v-model="scope.row.ROI" :min="0" size="small" :controls="false" />
      </template>
    </el-table-column>
    <el-table-column label="月份">
      <template #default="scope">
        {{ scope.row.month }}
      </template>
    </el-table-column>
    <el-table-column label="底薪">
      <template #default="scope">
        {{ scope.row.basicSalary }}
      </template>
    </el-table-column>
    <el-table-column label="提成比例">
      <template #default="scope">
        {{ scope.row.commissionRatioShow }}
      </template>
    </el-table-column>
    <el-table-column label="提成金额">
      <template #default="scope">
        {{ scope.row.commissionAmount }}
      </template>
    </el-table-column>
    <el-table-column label="业绩奖金">
      <template #default="scope">
        {{ scope.row.performanceBonus }}
      </template>
    </el-table-column>
    <el-table-column label="ROI奖金">
      <template #default="scope">
        {{ scope.row.ROIBonus }}
      </template>
    </el-table-column>
    <el-table-column label="实发工资">
      <template #default="scope">
        {{ scope.row.actualSalaryPaid }}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="subBtn" type="primary" @click="addItem">增加</el-button>
  <el-button class="subBtn" type="primary" @click="calcAll">计算</el-button>
  <el-button class="subBtn" type="primary" @click="exportAll">导出</el-button>
</template>

<script  lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { OperationMonthOptions, OperationMonthOptions1 } from '../../../const/operation.ts'
import { basicSalaryCalc, commissionRatioCalc, commissionAmountCalc, performanceBonusCalc, ROIBonusCalc } from '../../../utils/operation.js'
import { PositionEnum } from '../../../const/const.ts'
import { exportExcel } from '../../../utils/export-xlsx.js'

const month = ref('')

const salaryItem = { name: '', storePerformance: 0, ROI: 0, month: null, basicSalary: null, commissionRatioShow: null, commissionRatio: 0, commissionAmount: null, performanceBonus: null, ROIBonus: null, actualSalaryPaid: null }

const salaryList = reactive([JSON.parse(JSON.stringify(salaryItem))])

function calcAll() {
  if (!month.value) {
    ElMessageBox.alert('月份为空', '错误', {
      confirmButtonText: 'OK',
    })
    return
  }
  
  salaryList.forEach(element => {
    element.month = OperationMonthOptions1.find(item => item.value === month.value)?.label || null;
    element.basicSalary = basicSalaryCalc(month.value, element.storePerformance)
    element.commissionRatio = commissionRatioCalc(element.ROI)
    element.commissionRatioShow = element.commissionRatio * 100 + '%'
    element.commissionAmount = commissionAmountCalc(element.storePerformance, element.commissionRatio)
    element.performanceBonus = performanceBonusCalc(month.value, element.storePerformance)
    element.ROIBonus = ROIBonusCalc(element.ROI)
    element.actualSalaryPaid = (element.basicSalary + element.commissionAmount + element.ROIBonus).toFixed(2)
  });
}

function addItem () {
  salaryList.push(JSON.parse(JSON.stringify(salaryItem)))
}

function handleDelete (index) {
  if (index >= 0 && index < salaryList.length) {
    salaryList.splice(index, 1);
  }
}

function exportAll () {
  exportExcel(PositionEnum.Operation, salaryList)
}

</script>

<style scoped lang="scss">
.baseInfo {
  display: flex;
  padding: 0 10px;
}
.subBtn {
  margin-top: 20px;
}
</style>