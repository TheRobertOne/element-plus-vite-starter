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
                v-for="item in DesignerMonthOptions"
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
        <el-table-column label="总成单量">
            <template #default="scope">
                <el-input-number v-model="scope.row.assemblyOrderQuantity" :min="0" size="small" :controls="false" />
            </template>
        </el-table-column>
        <el-table-column label="总修图量">
            <template #default="scope">
                <el-input-number v-model="scope.row.totalPhotoEditingVolume" :min="0" size="small" :controls="false" />
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
        <el-table-column label="提成金额">
            <template #default="scope">
                {{ scope.row.commissionBonus }}
            </template>
        </el-table-column>
        <el-table-column label="高产奖金">
            <template #default="scope">
                {{ scope.row.highYieldBonus }}
            </template>
        </el-table-column>
        <el-table-column label="零瑕奖">
            <template #default="scope">
                <el-input-number v-model="scope.row.flawlessBonus" :min="0" size="small" :controls="false" />
            </template>
        </el-table-column>
        <el-table-column label="售后返工扣款">
            <template #default="scope">
                <el-input-number v-model="scope.row.deduction" :min="0" size="small" :controls="false" />
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
import { DesignerMonthOptions } from '../../../const/designer.ts'
import { PositionEnum } from '../../../const/const.ts'
import { basicSalaryCalc, calcAll } from '../../../utils/designer.js'
import { exportExcel } from '../../../utils/export-xlsx.js'

const month = ref('')

const salaryItem = { 
    name: '', 
    assemblyOrderQuantity: null, 
    totalPhotoEditingVolume: null, 
    month: null, 
    basicSalary: null, 
    commissionBonus: null, 
    highYieldBonus: null, 
    flawlessBonus: 0, 
    deduction: 0, 
    actualSalaryPaid: null,
}

const salaryList = reactive([JSON.parse(JSON.stringify(salaryItem))])

function calcBtnClink() {
  if (!month.value) {
    ElMessageBox.alert('月份为空', '错误', {
      confirmButtonText: 'OK',
    })
    return
  }
  
  salaryList.forEach(element => {
    calcAll(month.value, salaryList)
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
  exportExcel(PositionEnum.Designer, salaryList)
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