import { compare, genSalt, hash } from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

export const verifyPassword = async (plainPassword, hashedPassword) => {
  return await compare(plainPassword, hashedPassword);
};

export const isEmail = (email) => {
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

export const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};
