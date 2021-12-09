import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import ironConfig from "../../utils/iron-config";


export default withIronSessionApiRoute(login, ironConfig);

async function login(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  try {
    const { data } = await axios.get(`${process.env.NEST_API_HOST}/accounts/${token}`);
    req.session.account = data;
    await req.session.save();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Unauthenticated" });
  }
}
