function status(request, response) {
  // response.status(200).send("Sou aluno do curso.dev");
  response.status(200).json({ chave: "sou aluno do curso.dev" });
}

export default status;
