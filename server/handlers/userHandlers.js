// нормализованная структура
// имитация БД
const users = {};

module.exports = (io, socket) => {
  // обрабатываем запрос на получение пользователей
  // свойство "roomId" является распределенным,
  // поскольку используется как для работы с пользователями,
  // так и для работы с сообщениями
  const getUsers = () => {
    console.log("get users");

    io.in(socket.roomId).emit('users', users);
  };

  // обрабатываем добавление пользователя
  // функция принимает объект с именем пользователя и его id
  const addUser = ({ username, userId }) => {
    console.log("add user", username);

    // проверяем, имеется ли пользователь в БД
    if (!users[userId]) {
      // если не имеется, добавляем его в БД
      users[userId] = { username, online: true };
    } else {
      // если имеется, меняем его статус на онлайн
      users[userId].online = true;
    }
    // выполняем запрос на получение пользователей
    getUsers();
  };

  // обрабатываем удаление пользователя
  const removeUser = (userId) => {
    console.log("remove user", userId);
    // одно из преимуществ нормализованных структур состоит в том,
    // что мы может моментально (O(1)) получать данные по ключу
    // это актуально только для изменяемых (мутабельных) данных
    // в redux, например, без immer, нормализованные структуры привносят дополнительную сложность
    const user = users[userId];

    if (user) {
      user.online = false;
    }

    getUsers();
  };

  // регистрируем обработчики
  socket.on('user:get', getUsers);
  socket.on('user:add', addUser);
  socket.on('user:leave', removeUser);
};
