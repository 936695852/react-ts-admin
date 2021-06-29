import { useEffect, useState } from 'react'
// import qs from 'qs'

import SearchPanel from './search-panel'
import List from './list'
const apiUrl = process.env.REACT_APP_NOT_SECRET_CODE

const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const [list, setList] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])

  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}

export default ProjectListScreen
