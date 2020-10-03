const sayHello = (req, res) => {
  return res.json({
    message: 'Hello world !',
    code: 200,
  });
};

const HelloController = {
  sayHello: sayHello,
};

export default HelloController;
