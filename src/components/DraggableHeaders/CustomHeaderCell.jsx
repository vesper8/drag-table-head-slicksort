import item from "./Item.jsx";

export default {
  inject: ["data"],
  components: {
    item
  },
  render() {
    const {
      data: { columns },
      $slots,
      $attrs
    } = this;
    const find = (x) => x.dataIndex === $attrs.key;
    const index = columns.findIndex(find);
    const removeDisableIndex = columns
      .filter((item) => {
        return !item.isFixed;
      })
      .findIndex(find);
    const disable = columns[index].isFixed;
    return (
      <item disabled={disable} index={disable ? -1 : removeDisableIndex}>
        {$slots.default}
      </item>
    );
  }
};
