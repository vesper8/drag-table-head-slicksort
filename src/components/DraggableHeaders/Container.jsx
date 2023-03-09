import { ContainerMixin } from "vue-slicksort";

export default {
  name: "DraggableContainer",
  mixins: [ContainerMixin],
  render() {
    return <tr>{this.$slots.default}</tr>;
  }
};
