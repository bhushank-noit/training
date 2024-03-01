export const fetchAPI = async () => {
  let formData = new FormData();
  formData.append("key", "value");
  let api = await fetch(
    `${process.env.REACT_APP_API_URL}api/v1/public/countries`,
    {
      method: "GET",
      headers: {
        authToken: "",
      },
      //   body: formData,
    }
  );
  let res = await api.json();
  return res;
};
