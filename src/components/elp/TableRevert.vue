<template>
    <div class="tableRevert">
        <div class="operation">
            <!--FIXME:tableDataCount为0时视觉上还有一条数据残留-->
            <el-input v-model="revertTableColumn.label" placeholder="请输入内容" @blur="initial" />
            <div id="showHeader">
                <el-switch
                    v-model="showHeader"
                    @change="initial"
                    active-text="展示自带表头"
                    inactive-text="展示生成的表头"
                />
                <br />
                <el-switch
                    v-show="showHeader"
                    v-model="emptyHeader"
                    @change="initial"
                    active-text="置空表头"
                    inactive-text="不置空表头"
                />
            </div>
            <el-slider v-model="tableDataCount" @change="initial" :min="1" :max="100" show-input />
        </div>
        <div class="showTable">
            <div class="rowTable">
                <h2>原始表格{{ tableDataCount }}条数据</h2>
                <el-table
                    :show-header="showHeader"
                    :data="tableData"
                    style="width: 100%"
                    stripe
                    border
                >
                    <el-table-column label="缴费详情">
                        <el-table-column
                            v-for="(data, index) in tableColumn"
                            :prop="data.prop"
                            :key="index"
                            :label="data.label"
                        >
                            <!--:prop和v-slot同时写，前者生效-->
                            <template v-slot="prop">
                                <span>{{ prop.row[data.prop] }}</span>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
            <div class="revertTable">
                <h2>转置后的表格（未拆分）</h2>
                <div v-for="(items, index) in adjustedTableData" :key="index">
                    <h3 v-if="index > 0 && index <= groupColumnHit.length">
                        按照【{{ groupColumnHit[index - 1].label }}】聚合分组转置的表格，序号为{{
                            groupColumnHit[index - 1].order
                        }}
                    </h3>
                    <h3 v-if="index > groupColumnHit.length">
                        转置后进行数据拆分的单一表格第{{ index - groupColumnHit.length }}个
                    </h3>
                    <el-table v-if="!showHeader" height="40px">
                        <el-table-column :label="`tableHead_${index}`" />
                    </el-table>
                    <el-table
                        :show-header="showHeader"
                        :data="items.tableData"
                        style="width: 100%"
                        stripe
                    >
                        <el-table-column :label="`tableHead_${index}`">
                            <el-table-column
                                v-for="data in items.columnsData"
                                :key="data.prop"
                                :prop="data.prop"
                                :label="data.label"
                            >
                                <template v-slot="scope">
                                    {{ scope.row[data.prop] }}
                                </template>
                            </el-table-column>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tableRevert',
    data() {
        return {
            /**
             * 表格数据
             */
            tableData: [],
            /**
             * 表格字段和中文名映射
             */
            tableColumn: [
                { prop: 'paymentDate', label: '到账日期' },
                { prop: 'paymentType', label: '缴费类型' },
                { prop: 'paymentApplicationDate', label: '申请日期' },
                { prop: 'paymentPeriod', label: '缴费属期' },
                { prop: 'personalPayAmount', label: '个人缴费金额' },
                { prop: 'personalPayWithinExemption', label: '个人缴费未超出免税部分' },
                { prop: 'personalPayExceedingExemption', label: '个人缴费超出免税部分' },
                { prop: 'enterprisePayAmount', label: '企业缴费金额' },
                { prop: 'enterprisePayWithinExemption', label: '企业缴费未超出免税部分' },
                { prop: 'enterprisePayExceedingExemption', label: '企业缴费超出免税部分' }
            ],
            /**
             * 转置后第一个单元格属性
             */
            revertTableColumn: {
                label: 'first_column_name',
                prop: 'prop_',
                /**
                 * TODO:手动输入占位列名
                 * 转置后除了第一列的列名，支持提前占位
                 */
                otherColumnLabel: [{ label: 'second_column_name' }]
            },
            /**
             * 存放转置结果
             */
            adjustedTableData: [],
            groupColumnRegExp: [
                { exp: /Date/, label: '时间属性', prop: 'date', order: 125 },
                { exp: /payment/, label: '支付属性', prop: 'payment', order: 1 },
                { exp: /common/, label: '常规属性', prop: 'common', order: 1002 },
                { exp: /personal/, label: '个人属性', prop: 'personal', order: 68 },
                { exp: /enterprise/, label: '企业属性', prop: 'enterprise', order: 100 }
            ],
            groupColumnHit: [],
            groupTableColumn: [],
            emptyHeader: false,
            showHeader: true,
            tableDataCount: 3
        }
    },
    mounted() {
        this.initial()
        this.groupByReduce(/ing/)
    },
    methods: {
        initial() {
            this.reset()
            this.generateTableInfo()
            // 转置后的表格（未拆分）
            this.handleRevertTable(this.emptyHeader)
            // 单条数据的聚合分组的表格
            this.handleGroupRevertTable(this.emptyHeader)
            // 转置后进行数据拆分的表格
            if (this.tableDataCount > 1) {
                this.handleExpandRevertTable(this.emptyHeader)
            }
            console.log('所有转置表格的信息adjustedTableData', this.adjustedTableData)
        },
        generateRandom() {
            return Math.floor(Math.random() * 100).toString()
        },
        generateTableInfo() {
            for (let i = this.tableData.length; i < this.tableDataCount; i++) {
                let tempTableData = {}
                this.tableColumn.forEach((data) => {
                    tempTableData[data.prop] = this.generateRandom()
                })
                this.tableData.push(tempTableData)
            }
            /*this.revertTableColumn.otherColumnLabel = Array.from({length: this.tableDataCount}, (_, i) => {
              return {label: this.revertTableColumn.prop + i}
            })*/
            let otherColumnLabel = this.revertTableColumn.otherColumnLabel
            for (let i = 0; i < this.tableDataCount; i++) {
                if (otherColumnLabel[i] !== undefined) continue
                otherColumnLabel[i] = { label: this.revertTableColumn.prop + i }
            }
            console.log('revertTableColumn', this.revertTableColumn)
        },
        reset() {
            this.tableData.length = 0
            this.revertTableColumn.otherColumnLabel.length = 0
            this.revertTableColumn.otherColumnLabel.push({ label: 'second_column_name' })
            this.groupTableColumn.length = 0
            this.groupColumnHit.length = 0
            this.adjustedTableData.length = 0
        },
        handleRevertTable(emptyHeader, adjustedTableData, adjustedTableColumn) {
            const columnsData = [
                {
                    label: emptyHeader ? '' : this.revertTableColumn.label,
                    prop: this.revertTableColumn.prop
                }
            ]
            const tableColumn = adjustedTableColumn || this.tableColumn
            let tableData = tableColumn.map((data) => {
                let newItem = {}
                newItem[this.revertTableColumn.prop] = data.label
                return newItem
            })
            adjustedTableData = adjustedTableData || this.tableData
            adjustedTableData.forEach((item, index) => {
                const prop = this.revertTableColumn.prop + index
                // const firstDataAsColumnName = item[tableColumn[0].prop]
                const label = this.revertTableColumn.otherColumnLabel[index].label
                const eachColumnData = emptyHeader ? '' : label
                const columnObj = { label: eachColumnData, prop: prop }
                columnsData.push(columnObj)
                tableColumn.forEach((data, index) => {
                    this.$set(tableData[index], prop, item[data.prop])
                })
            })
            this.adjustedTableData.push({ columnsData, tableData })
        },
        handleExpandRevertTable(emptyHeader) {
            this.tableData.forEach((data) => {
                // 对象解构：将观察者对象转换为普通对象
                const rawData = { ...data }
                this.handleRevertTable(emptyHeader, [rawData])
            })
        },
        handleGroupRevertTable(emptyHeader, adjustedTableData) {
            this.groupTableHead()
            for (const title in this.groupTableColumn) {
                const tableColumn = this.groupTableColumn[title]
                this.handleRevertTable(emptyHeader, adjustedTableData, tableColumn)
            }
        },
        groupTableHead() {
            let result = []
            this.groupColumnRegExp
                .sort(this.groupCompareFn)
                // 这里的forEach可以用reduce相互替换
                .forEach((data) => {
                    let flag = false
                    this.tableColumn.forEach((col) => {
                        if (data.exp.test(col.prop)) {
                            flag = true
                            this.insertEl(result, data.prop, col)
                        }
                    })
                    if (flag) this.groupColumnHit.push(data)
                })
            this.groupTableColumn = result
            console.warn('注意 groupTableColumn 此时的 length 为 0', this.groupTableColumn)
        },
        groupCompareFn(cur, next) {
            return cur.order - next.order
        },
        groupByReduce(pattern) {
            const regExp = new RegExp(pattern)
            const result = this.tableColumn
                // .filter(data => !/\d+/.test(data.prop))
                .reduce((acc, item) => {
                    if (regExp.test(item.prop)) {
                        // const val = regExp.exec(item.prop)//["input"]
                        // console.log(val);
                        this.insertEl(acc, regExp, item)
                    }
                    return acc
                }, {})
            console.log(this.groupByReduce.name, result)
        },
        insertEl(arr, prop, data) {
            if (!arr[prop]) arr[prop] = []
            // push方法的返回值是当前对象数组元素的个数
            arr[prop].push({ ...data })
            return arr
        }
    }
}
</script>
<style scoped>
/*::v-deep .el-table__body-wrapper {*/
/*  height: 0;*/
/*}*/
.tableRevert {
    font-family: 'JetBrains Mono Medium', monospace;
}
</style>
