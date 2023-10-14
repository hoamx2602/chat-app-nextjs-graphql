import { LOGIN_USER } from "@/helpers/gql.request";
import client from "../../../../lib/apolo-client";

export async function POST(request: Request) {
    const res = request.json();
    console.log('DEBUG=================res', res);
    const { data } = await client.mutate({
      mutation: LOGIN_USER,
      variables: res,
    });

    console.log(data);

  return Response.json(data);
}
