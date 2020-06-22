self.onmessage = async ({ data }) => {
  const filename = `${Date.now()}-${data.base}-${data.table}.json`;
  const encoder = new TextEncoder();
  const encoded = encoder.encode(JSON.stringify(data.records));
  Deno.writeFileSync(filename, encoded);

  self.close();
};
