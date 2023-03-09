<template>
  <a-table
    :columns="columns"
    :loading="loading"
    :data-source="tableData"
    :pagination="false"
    :components="components"
    size="middle"
    :rowKey="row => row.key"
    class="drag-table-head"
  >
    <template slot="fix" slot-scope="text, record, index">
      <a-icon type="stop"/>
    </template>
    <template slot="task" slot-scope="text, record, index">
      <a-tooltip placement="topLeft">
        <template slot="title">{{ text }}</template>
        <span>{{ text }}</span>
      </a-tooltip>
    </template>
  </a-table>
</template>
<script>
import CustomHeaderRow from "./CustomHeaderRow.jsx";
import CustomHeaderCell from "./CustomHeaderCell.jsx";

import moment from "moment";

const columns = [
  {
    title: "Fixed",
    dataIndex: "fix",
    align: "center",
    width: "60px",
    isFixed: true,
    scopedSlots: { customRender: "fix" }
  },
  {
    title: "Task",
    dataIndex: "task",
    className: "task",
    ellipsis: true,
    scopedSlots: { customRender: "task" }
  },
  {
    title: "Data1",
    dataIndex: "data1",
    className: "data1",
    width: "15%",
    customRender: (text, record, index) => index
  },
  {
    title: "Data2",
    dataIndex: "data2",
    className: "data2",
    width: "15%",
    customRender: (text, record, index) => index + 2
  },
  {
    title: "Date",
    dataIndex: "date",
    className: "date",
    width: "20%"
  },
  {
    title: "RightFixed",
    dataIndex: "fix2",
    align: "center",
    width: "100px",
    isFixed: true,
    scopedSlots: { customRender: "fix" }
  }
];

let tableData = [];
for (let index = 0; index < 10; index++) {
  const ranNum = parseInt(Math.random() * 30, 10);
  tableData.push({
    key: index,
    task: `${index} - Lorem ipsum dolor sitre deserror, nisi possimus temporibus molestiae.`,
    date: moment()
      .subtract(ranNum, "days")
      .format("L")
  });
}

export default {
  name: "DraggableHeaders",
  provide() {
    return {
      data: this
    };
  },
  data() {
    return {
      columns,
      tableData,
      loading: false,
      components: {
        // table:CustomTable,
        header: {
          // wrapper: CustomHeaderWrapper,
          row: CustomHeaderRow,
          cell: CustomHeaderCell
        }
        // body: {
        // wrapper: CustomWrapper,
        // row: CustomRow,
        // cell:CustomCell
        // }
      }
    };
  },
  methods: {}
};
</script>

