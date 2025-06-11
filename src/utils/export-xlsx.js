import * as XLSX from 'xlsx'
import { OperationXLSXHeaders } from '../const/operation.ts'
import { CustomerXLSXHeaders } from '../const/customer-service.ts'
import { DesignerXLSXHeaders } from '../const/designer.ts'
import { PositionEnum, PositionArr } from '../const/const.ts'

export const exportData = (position, data) => data.map(row => {
    let XLSXHeaders = {}
    if (position === PositionEnum.Operation) {
        XLSXHeaders = OperationXLSXHeaders
    } else if (position === PositionEnum.CustomerService) {
        XLSXHeaders = CustomerXLSXHeaders
    } else if (position === PositionEnum.Designer) {
        XLSXHeaders = DesignerXLSXHeaders
    }
    const newRow = {}
    for (const key in XLSXHeaders) {
    newRow[XLSXHeaders[key]] = row[key] // 用中文列名作为 key
    }
    return newRow
})
export function exportExcel(position, data) {
  const worksheet = XLSX.utils.json_to_sheet(exportData(position, data))
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, `${PositionArr[position]}工资表`)
  XLSX.writeFile(workbook, `${PositionArr[position]}工资表.xlsx`)
}