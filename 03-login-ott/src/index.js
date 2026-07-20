import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URI || "redis://localhost:6379");

function otpKey(phone) {
  return `opt:${phone}`;
}

app.post("/otp", async (req, res) => { 
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const result = await redis.set(otpKey(phone), otp, "EX", 30);
  console.log(result);

  res.json({ message: "OTP sent", otp });
});

app.post("/otp/verify", async (req, res) => {
  const { phone, otp } = req.body;
  const savedOtp = await redis.get(otpKey(phone));
  console.log(savedOtp);

  if (!savedOtp) {
    return res.status(400).json({ message: "OTP expired and not found" });
  }

  if (savedOtp != otp) {
    return res.status(400).json({ message: "OTP verified" });
  }

  const result = await redis.del(otpKey(phone));
  console.log(result);

  res.json({ message: "OTP verified successfully" });
});

app.get("/otp/:phone/ttl", async (req, res) => {
  const ttl = await redis.ttl(otpKey(req.params.phone));
  res.json({ ttl });
});

app.listen(3000, () => {
  console.log(`server starts listening on http://localhost:3000`);
});
