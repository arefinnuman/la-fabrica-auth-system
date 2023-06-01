// const lastUserId = 0 // Assuming you initialize the lastUserId with 0 initially

import { User } from './users.module'

export const findLastUseId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUseId()) || (0).toString().padStart(5, '0')
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
