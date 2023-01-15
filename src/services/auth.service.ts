import type { IUserData, IUserFormDTO } from "../models/user-data.model";
const API_URL = import.meta.env.VITE_API_URL;
const ENDPOINT_URL = `${API_URL}/auth`;
const errorMessage =
  "Something went wrong, please try again later. If the problem persits, let us know.";

export const createUser = async (userForm: IUserData) => {
  try {
    const response = await fetch(`${ENDPOINT_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userForm),
    });
    if (response.ok) {
      return response.json();
    } else {
      //   console.error("Retour du serveur : ", response.status);
      //   throw new Error("Retour du serveur : ", response.status);
      throw new Error("response error");
    }
  } catch (error) {
    console.log(error);
    return errorMessage;
  }
};

export const login = async (userFormDTO: IUserFormDTO) => {
  try {
    const response = await fetch(`${ENDPOINT_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userFormDTO),
    });
    if (response.ok) {
      console.log("you're in");
      return response.json();
    } else {
      //   console.error("Retour du serveur : ", response.status);
      //   throw new Error("Retour du serveur : ", response.status);
      throw new Error("response error");
    }
  } catch (error) {
    console.log(error);
    return errorMessage;
  }
};
