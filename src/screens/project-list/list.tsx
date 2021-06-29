import { User } from './search-panel'

interface Project {
  id: string
  name: string
  personId: string
  pin: boolean
  organization: string
}

interface listProps {
  list: Project[]
  users: User[]
}

const List = ({ users, list }: listProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => (
          <tr key={project.personId}>
            <td>{project.name}</td>
            <td>{users.find(use => use.id === project.personId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default List
