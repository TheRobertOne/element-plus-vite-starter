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
          v-for="item in CustomerServiceMonthOptions"
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
    <el-table-column label="业绩">
      <template #default="scope">
        <el-input-number v-model="scope.row.storePerformance" :min="0" size="small" :controls="false" />
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
    <el-table-column label="排名">
      <template #default="scope">
        {{ scope.row.performanceRanking }}
      </template>
    </el-table-column>
    <el-table-column label="基础提成点">
      <template #default="scope">
        {{ scope.row.basicCommissionRatioShow }}
      </template>
    </el-table-column>
    <el-table-column label="超额提成点">
      <template #default="scope">
        {{ scope.row.excessCommissionRatio }}
      </template>
    </el-table-column>
    <el-table-column label="最终提成点">
      <template #default="scope">
        {{ scope.row.finalCommissionRatio }}
      </template>
    </el-table-column>
    
    <el-table-column label="提成金额">
      <template #default="scope">
        {{ scope.row.commissionAmount }}
      </template>
    </el-table-column>
    <el-table-column label="团队奖金">
      <template #default="scope">
        {{ scope.row.teamBonus }}
      </template>
    </el-table-column>
    <el-table-column label="优秀客服奖励">
      <template #default="scope">
        {{ scope.row.outstandingCustomerServiceReward }}
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
  <el-button class="subBtn" type="primary" @click="calcBtnClink">计算</el-button>
  <el-button class="subBtn" type="primary" @click="exportAll">导出</el-button>
</template>

<script  lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { CustomerServiceMonthOptions } from '../../../const/customer-service.ts'
import { calcAll } from '../../../utils/customer-service.js'
import { monthMap, PositionEnum } from '../../../const/const.ts'
import { exportExcel } from '../../../utils/export-xlsx.js'

const month = ref('')

const salaryItem = { name: '', storePerformance: null, month: null, basicSalary: null, performanceRanking: null,basicCommissionRatio: null, basicCommissionRatioShow: null, excessCommissionRatio: null, finalCommissionRatio: null, commissionAmount: null, teamBonus: null, outstandingCustomerServiceReward: null, actualSalaryPaid: null }

const salaryList = reactive([JSON.parse(JSON.stringify(salaryItem))])

function calcBtnClink() {
  if (!month.value) {
    ElMessageBox.alert('月份为空', '错误', {
      confirmButtonText: 'OK',
    })
    return
  }

  calcAll(month.value, salaryList)
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
  exportExcel(PositionEnum.CustomerService, salaryList)
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