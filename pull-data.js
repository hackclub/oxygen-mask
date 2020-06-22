self.onmessage = async ({ data }) => {
  const records = (await fetch(
    "https://api2.hackclub.com/v0/" + data.base + "/" + data.table,
    {
      headers: {
        Authorization: "Bearer " + data.apiKey,
      },
    },
  )).json();

  await self.postMessage(await records);

  self.close();
};
