const customMessage = (field: string) => {
  return {
    'string.empty': `Campo ${field} não informado!`,
    'any.required': `O campo ${field} é obrigatório!`
  };
};

export { customMessage };
