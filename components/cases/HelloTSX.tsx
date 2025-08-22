import { defineComponent, ref } from 'vue';

// 使用map渲染列表
const items = ['A', 'B', 'C'];
const List = () => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

// 使用 defineComponent和 TSX 语法，支持响应式数据和类型声明
export default defineComponent({
  props: { title: { type: String, required: true } },
  setup(props) {
    const count = ref(0);
    return () => (
      <div>
        <h1>{props.title}</h1>
        <button onClick={() => count.value++}>Count: {count.value}</button>
        <List/>
      </div>
    );
  }
});


