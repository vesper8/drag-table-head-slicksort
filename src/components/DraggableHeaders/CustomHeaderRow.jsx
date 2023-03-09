import arrayMove from "array-move";
import container from "./Container.jsx";

const helpClassName = `thead-dragging`;

export default {
  inject: ["data"],
  data() {
    return {
      isHideDragTransition: true
    };
  },
  components: {
    container
  },
  methods: {
    onSortStart() {
      this.isHideDragTransition = false;
    },

    onSortEnd({ oldIndex, newIndex }) {
      if (oldIndex !== newIndex) {
        const newData = arrayMove(
          [
            ...this.data.columns.filter((item) => {
              return !item.isFixed;
            })
          ],
          oldIndex,
          newIndex
        );
        this.data.columns.forEach((item, index) => {
          if (item.isFixed) {
            newData.splice(index, 0, item);
          }
        });
        this.data.columns = newData;
      }
      this.isHideDragTransition = true;
    }
  },
  render() {
    const {
      data: { columns },
      $slots
    } = this;

    return (
      <container
        {...{
          on: {
            ["sort-start"]: this.onSortStart,
            ["sort-end"]: this.onSortEnd
          }
        }}
        helperClass={helpClassName}
        axis="x"
        lockAxis="x"
        transitionDuration={250}
        draggedSettlingDuration={150}
        value={columns}
        class={{
          "hide-drag-transition": this.isHideDragTransition
        }}
      >
        {$slots.default}
      </container>
    );
  }
};
