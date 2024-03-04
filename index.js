import express from "express";
import fetch from "node-fetch";
import crypto from "crypto";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/program", (req, res) => {
  res.render("program.ejs");
});

app.get("/refund", (req, res) => {
  res.render("refund.ejs");
});

app.get("/policy", (req, res) => {
  res.render("policy.ejs");
});

app.get("/free-courses", (req, res) => {
  res.render("free-courses.ejs");
});

app.get("/free-access", (req, res) => {
  res.render("free-access.ejs");
});

app.get("/updates", (req, res) => {
  res.render("updates.ejs");
});

app.get("/certificate", (req, res) => {
  res.render("certificate.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.get(
  "/blog/ai-in-stock-trading-revolutionizing-investment-strategies",
  (req, res) => {
    res.render(
      "blog/ai-in-stock-trading-revolutionizing-investment-strategies.ejs"
    );
  }
);

app.get("/submitted", (req, res) => {
  res.render("submitted.ejs");
});
// Payment code

app.get("/pay", (req, res) => {
  res.render("pay.ejs");
});

function generateTransactionId() {
  const timestamp = new Date().getTime().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 15);
  return timestamp + randomStr;
}

function generateMerchantUserId() {
  return "MUID" + Math.random().toString(36).substr(2, 9);
}

function generateChecksum(payload, saltKey) {
  const sha256Hash = crypto
    .createHash("sha256")
    .update(payload + "/pg/v1/pay" + saltKey)
    .digest("hex");
  const keyIndex = 1;
  return sha256Hash + "###" + keyIndex;
}

app.post("/makePayment", async (req, res) => {
  try {
    const merchantTransactionId = generateTransactionId();
    const merchant_id = "M1KE7GMKEOEB";
    const merchantUserId = generateMerchantUserId();
    const salt_key = "56392f2a-82cd-47ec-a0e4-93a115181eb7";

    // Example payload generation
    const data = {
      merchantId: merchant_id,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: merchantUserId,
      name: req.body.name,
      amount: parseInt(req.body.amount) * 100,
      redirectMode: "post",
      mobileNumber: parseInt(req.body.number),
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");

    const checksum = generateChecksum(payloadMain, salt_key);

    const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

    const response = await fetch(prod_URL, {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      body: JSON.stringify({ request: payloadMain }),
    });

    const responseData = await response.json();
    const redirectURL = responseData.data.instrumentResponse.redirectInfo.url;
    res.redirect(redirectURL);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
