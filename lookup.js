import fs from "fs";
import csv from "csv-parser";
import axios from "axios";
import { Parser } from "json2csv";

const INPUT_FILE = "input.csv";
const OUTPUT_FILE = "output.csv";
const BATCH_SIZE = 100;

const allRows = [];
const results = [];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Read CSV
function readCSV() {
  return new Promise((resolve) => {
    fs.createReadStream(INPUT_FILE)
      .pipe(csv())
      .on("data", (row) => {
        allRows.push(row);
      })
      .on("end", () => {
        resolve();
      });
  });
}

// Process batch
async function processBatch(batch) {
  const queries = batch.map(row => ({
    query: row.ip
  }));

  try {
    const res = await axios.post("http://ip-api.com/batch", queries);

    return res.data;
  } catch (err) {
    console.log("Batch error:", err.message);
    return [];
  }
}

async function main() {
  console.log("Reading CSV...");
  await readCSV();

  console.log(`Total IPs: ${allRows.length}`);

  for (let i = 0; i < allRows.length; i += BATCH_SIZE) {

    const batch = allRows.slice(i, i + BATCH_SIZE);

    console.log(`Processing batch ${i / BATCH_SIZE + 1}...`);

    const locations = await processBatch(batch);

    for (let j = 0; j < batch.length; j++) {

      const original = batch[j];
      const location = locations[j] || {};

      results.push({
        tracking_id: original.tracking_id,
        ip: original.ip,
        referrer: original.referrer,

        country: location.country || "",
        region: location.regionName || "",
        city: location.city || "",
        isp: location.isp || "",
        lat: location.lat || "",
        lon: location.lon || ""
      });
    }

    // avoid rate limit
    await sleep(1500);
  }

  const parser = new Parser();
  const csvOutput = parser.parse(results);

  fs.writeFileSync(OUTPUT_FILE, csvOutput);

  console.log("DONE ✅");
  console.log("Saved to output.csv");
}

main();