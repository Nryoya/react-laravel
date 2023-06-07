const List = (tasks) => {
  return (
    <ul className="max-w-6xl mx-auto">
      {tasks.map((task) => {
        return (
          <li key={task.id}>{task.name}</li>
        )
      })}
    </ul>
  )
}

export default List;