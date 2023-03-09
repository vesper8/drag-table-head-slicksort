import { ElementMixin } from "vue-slicksort";

export default {
  name: "DraggableItem",
  mixins: [ElementMixin],
  render() {
    return <th>{this.$slots.default}</th>;
  }
};
