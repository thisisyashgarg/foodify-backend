import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 4001;
app.use(express.json());

app.get("/", cors(), async (req, res) => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    {
      headers: {
        Cookie:
          "__SW=ZBO_ZDzTjhBLk0RXd8SfI2xexeHGhzZP; _device_id=27dec6a8-ce76-b6a7-3592-e2822125a716; _guest_tid=fd7cc029-f677-4e26-adcd-5ddcff1e5d1d; _sid=5lw3a733-6deb-4049-ae73-21a645adf9e9",
        "User-Agent": "PostmanRuntime/7.30.0",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  const json = await data.json();
  res.send(json);
  console.log("data sent");
});

app.post("/menu", (req, res) => {
  console.log("menu called");
  console.log(req.body);
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=",
  //     {
  //       headers: {
  //         Cookie:
  //           "__SW=ZBO_ZDzTjhBLk0RXd8SfI2xexeHGhzZP; _device_id=27dec6a8-ce76-b6a7-3592-e2822125a716; _guest_tid=fd7cc029-f677-4e26-adcd-5ddcff1e5d1d; _sid=5lw3a733-6deb-4049-ae73-21a645adf9e9",
  //         "User-Agent": "PostmanRuntime/7.30.0",
  //         Accept: "*/*",
  //         "Accept-Encoding": "gzip, deflate, br",
  //         Connection: "keep-alive",
  //       },
  //     }
  //   );
  //   const json = await data.json();
  //   res.send(json);
  //   console.log("data sent");
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
