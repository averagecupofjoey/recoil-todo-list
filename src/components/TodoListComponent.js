import { todoListState } from '../atoms/todoList';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from '../selectors/todoListFilter';

import TodoItem from './TodoItemComponent';
import TodoItemCreator from './TodoCreatorComponent';
import TodoListFilters from './TodoListFiltersComponent';
import TodoListStats from './TodoListStatsComponent';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
