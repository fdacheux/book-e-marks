const api_url = import.meta.env.VITE_API_URL;
const errorMessage =
  "Something went wrong, please try again later. If the problem persits, please let us know.";

export const postUser = async (userForm) => {
  try {
    const response = await fetch("http://localhost:3333/auth/signup", {
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
