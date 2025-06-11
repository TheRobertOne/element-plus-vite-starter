export const monthMap = [
  {
    value: 'Jan',
    label: '1月',
  },
  {
    value: 'Feb',
    label: '2月',
  },
  {
    value: 'Mar',
    label: '3月',
  },
  {
    value: 'Apr',
    label: '4月',
  },
  {
    value: 'May',
    label: '5月',
  },
  {
    value: 'Jun',
    label: '6月',
  },
  {
    value: 'Jul',
    label: '7月',
  },
  {
    value: 'Aug',
    label: '8月',
  },
  {
    value: 'Sep',
    label: '9月',
  },
  {
    value: 'Oct',
    label: '10月',
  },
  {
    value: 'Nov',
    label: '11月',
  },
  {
    value: 'Dec',
    label: '12月',
  },
]

export const enum PositionEnum {
    Operation = 'operation',
    CustomerService = 'customerService',
    Designer = 'designer'
}

export const PositionArr = {
    [PositionEnum.Operation]: '运营',
    [PositionEnum.CustomerService]: '客服',
    [PositionEnum.Designer]: '设计师'
}