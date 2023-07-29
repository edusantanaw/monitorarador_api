import { randomUUID } from "node:crypto";
import cron from "node-cron";
import axios, { AxiosError } from "axios";
import { EndPointRepository } from "../../infra/repositories/endPoint";
import { EndPointStatusRepository } from "../../infra/repositories/endPointStatus";

const endPointRepository = new EndPointRepository();
const endPointStatusRepository = new EndPointStatusRepository();

export default () => {
  const cronTime = "*/1 * * * *"; // 10 minutes
  const maxItems = 100;
  cron.schedule(cronTime, async () => {
    let currentPage = 0;
    while (true) {
      const { data, total } = await endPointRepository.loadAll({
        take: maxItems,
        skip: currentPage,
      });
      for (const item of data) {
        const headers = item.headers ? JSON.parse(item.headers) : {};
        try {
          await axios.get(item.route, headers);
          await endPointStatusRepository.create({
            id: randomUUID(),
            status: "online",
            idEndPoint: item.id,
          });
          console.log("status updated", item.id);
        } catch (error) {
            console.log(error);
          if (error instanceof AxiosError) {
            await endPointStatusRepository.create({
              id: randomUUID(),
              status: "offline",
              idEndPoint: item.id,
            });
            continue;
          }
          console.log("erro", item.id);
        }
      }
      if (total < (currentPage + 1) * maxItems) {
        console.log("break");
        currentPage = 0;
        break;
      }
      currentPage++;
    }
  });
};
