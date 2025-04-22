
import db from '../config/db.js';
export const insertUser = async (userData, hashedPassword) => {
  const { email, username, first_name, last_name } = userData;
  
  const [userId] = await db.transaction(async (trx) => {
    await trx('users').insert({
      email,
      username,
      first_name,
      last_name,
    });

    await trx('hashpwd').insert({
      username,
      password: hashedPassword,
    });
  });

  return userId;  
};

export const findUserByUsername = async (username) => {
  return await db('hashpwd')
    .join('users', 'users.username', '=', 'hashpwd.username')
    .where('users.username', username)
    .first();
};

export const getAllUsers = async () => {
  return await db('users').select('id', 'email', 'username', 'first_name', 'last_name');
};

export const getUserById = async (id) => {
  return await db('users').where('id', id).first();
};
export const updateUser = async (id, updatedData) => {
  const [updated] = await db('users').where('id', id).update(updatedData);
  return updated;  
};
