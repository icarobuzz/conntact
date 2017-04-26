exports.buscarUmUsuario = (req, res, next) => {
  res.json({
    user: {
      id: 1,
      name: "Icaro"
    }
  });
};

exports.atualizarUmUsuario = (req, res, next) => {
  res.json({
    user: 2,
    name: "Icaro Rego Fernandes"
  });
};
