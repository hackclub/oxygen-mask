const [apiKey, ...airtables] = Deno.args;

if (!apiKey || !airtables) {
  console.log('Usage:')
  console.log('    oxygen-mask [AIRTABLE_API_KEY] [AIRTABLE_BASE/TABLE]')
  Deno.exit(0)
}

for await (const airtable of airtables) {
  const [ base, table ] = airtable.split("/");

  const getWorker = new Worker(
    new URL("pull-data.js", import.meta.url).href,
    { type: "module" },
  );
  getWorker.postMessage({ base, table, apiKey });

  getWorker.onmessage = async (e) => {
    const writeWorker = new Worker(
      new URL("write-data.js", import.meta.url).href,
      { type: "module", deno: true },
    );
    writeWorker.postMessage({ records: e.data, base, table });
  };
}
