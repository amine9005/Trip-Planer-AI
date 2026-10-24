import { AxiosResponse } from "axios";

export function aiResponseToJSON(resp: AxiosResponse) {
  const result = JSON.parse(
    resp.data.message.slice(
      resp.data.message.indexOf("{"),
      resp.data.message.lastIndexOf("}") + 1,
    ),
  );
  return result;
}
