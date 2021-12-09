import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import axios from "axios";
import ironConfig from "../../../utils/iron-config";

export default withIronSessionApiRoute(ordersList, ironConfig);

async function ordersList(req: NextApiRequest, res: NextApiResponse) {

  const account = req.session.account;

  if (!account) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const { id } = req.query;
  try {
    const { data } = await axios.get(`${process.env.NEST_API_HOST}/orders/${id}`, {
      headers: {
        "x-token": account.token,
      },
    });
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    if (axios.isAxiosError(e)) {
      res.status(e.response!.status).json(e.response?.data);
    } else {
      res.status(500).json({ message: "Ocorreu um erro interno" });
    }
  }
}
