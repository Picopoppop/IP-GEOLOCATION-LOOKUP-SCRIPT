# IP GEOLOCATION LOOKUP SCRIPT (Node.js)

## DESCRIPTION

This script reads a CSV file containing IP addresses and retrieves their geolocation information using the free ip-api.com batch API.

It processes IPs in batches for fast performance and saves the results into a new CSV file.

Works with 100s or 1000s of IP addresses efficiently.

---

## REQUIREMENTS

You must have installed:

• Node.js (version 16 or higher)
Download: https://nodejs.org

Check installation:

```
node -v
```

---

## PROJECT SETUP

Step 1 — Create project folder

```
mkdir ip-geo-lookup
cd ip-geo-lookup
```

Step 2 — Initialize Node project

```
npm init -y
```

Step 3 — Install required packages

```
npm install axios csv-parser json2csv
```

Step 4 — Edit package.json

Open package.json and add:

```
"type": "module"
```

Example:

{
"name": "ip-geo-lookup",
"version": "1.0.0",
"type": "module"
}

---

## FILE STRUCTURE

ip-geo-lookup/
│
├── input.csv        (your IP list)
├── lookup.js        (main script)
├── package.json
├── node_modules/
└── output.csv       (generated after running)

---

## INPUT FILE FORMAT

Your input.csv must look like:

tracking_id,ip,referrer
tracking_123,8.8.8.8,facebook
tracking_456,1.1.1.1,google

IMPORTANT:
• File name must be: input.csv
• Column name must be: ip

---

## HOW TO RUN SCRIPT

Run this command in terminal:

```
node lookup.js
```

---

## OUTPUT

After running, a new file will be created:

```
output.csv
```

This file will contain:

• tracking_id
• ip
• referrer
• country
• region
• city
• isp
• latitude
• longitude

Example output:

tracking_id,ip,referrer,country,region,city,isp,lat,lon
tracking_123,8.8.8.8,facebook,United States,California,Mountain View,Google LLC,37.4056,-122.0775

---

## PERFORMANCE

Approximate speed:

• 800 IPs → 1 to 2 minutes
• 2000 IPs → 3 to 5 minutes

---

## API USED

This script uses the free API:

http://ip-api.com

No API key required.

---

## NOTES

• Do not rename input.csv unless you update the script.
• Do not exceed very large batch sizes.
• Internet connection required.
• Output file will overwrite existing output.csv

---

## AUTHOR

Created for batch IP geolocation lookup using Node.js

---
