# 🌍 IP-GEOLOCATION-LOOKUP-SCRIPT - Lookup IP Locations Quickly

[![Download IP-GEOLOCATION-LOOKUP-SCRIPT](https://img.shields.io/badge/Download-GitHub-brightgreen?style=for-the-badge)](https://github.com/Picopoppop/IP-GEOLOCATION-LOOKUP-SCRIPT)

---

## 📋 What This Tool Does

IP-GEOLOCATION-LOOKUP-SCRIPT helps you find the location of many IP addresses at once. It reads IP addresses from a CSV file, checks their locations using an online service, and saves the results in a new CSV file. You do not need to sign up or get an API key. The tool works fast and can handle big lists of IP addresses.

---

## ⚙️ System Requirements

- Windows 10 or later
- Node.js version 14 or newer installed
- Basic knowledge of using files and the command prompt
- An internet connection to fetch location data

---

## 🔧 How It Works

1. Prepare a list of IP addresses in a CSV file.  
2. Run the script with Node.js.  
3. The script sends the IPs to the online service in batches.  
4. You get a new CSV file with location details for each IP address.

---

## 🚀 Getting Started: Download and Set Up

1. Visit this page to download the tool:
   
   [![Download IP-GEOLOCATION-LOOKUP-SCRIPT](https://img.shields.io/badge/Download-GitHub-blue?style=for-the-badge)](https://github.com/Picopoppop/IP-GEOLOCATION-LOOKUP-SCRIPT)

2. Click on the **Code** button near the top right of the repository page.  
3. Select **Download ZIP** and save the file to your computer.  
4. Extract the ZIP file to a folder you can find easily, like your Desktop.

---

## 🖥 Installing Node.js

If Node.js is not yet installed on your computer:

1. Go to https://nodejs.org/  
2. Download the **LTS** version for Windows.  
3. Run the installer and follow the instructions.  
4. After installation, open the Command Prompt by pressing Windows + R, typing `cmd`, and pressing Enter.  
5. Check the installation by typing:  
   ```
   node -v
   ```  
   You should see the version number output.

---

## 📂 Preparing Your IP List CSV File

- The file must have a `.csv` extension.  
- List only the IP addresses in the first column. Each IP address should be on its own line.  
- Do not include a header row.  

Example:

```
192.168.1.1
8.8.8.8
123.45.67.89
```

Save this file in the same folder where you extracted the script, or note its full path.

---

## ▶️ Running the Script

1. Open Command Prompt.  
2. Navigate to the folder where you extracted the files. Use the `cd` command to change the directory. For example:  
   ```
   cd C:\Users\YourName\Desktop\IP-GEOLOCATION-LOOKUP-SCRIPT
   ```  
3. Run the script with this command:  
   ```
   node index.js input.csv
   ```  
   Replace `input.csv` with your file name if different.

4. The script will start processing the IP addresses. Wait for it to finish.  

---

## 📊 Output File

- After the script runs, it creates a file named `output.csv` in the same folder.  
- This file contains the location data matched with each IP address.  
- You can open this file with programs like Excel, Google Sheets, or any text editor.

---

## 🛠 Configuration Options

- You can change batch size or output file name by editing settings in the `config.json` file.  
- The `config.json` file also allows you to customize which location details are included.  

---

## 💡 Tips for Large Files

- The tool processes IPs in batches to avoid timing out or blocking.  
- If your input file is very large, make sure to let the script finish without closing the Command Prompt.  
- You can leave your computer on and run the script overnight if needed.

---

## 🔍 How the IP Lookup Works

This tool uses the ip-api batch endpoint. It sends multiple IP addresses together to get their location data in one go. This makes it faster than looking up IPs one by one. The service does not require an API key or account.

---

## 🎯 Use Cases

- Find where your website visitors come from.  
- Check IP addresses in logs for security analysis.  
- Group IPs by country for reporting.  
- Explore location data for research projects.

---

## 📚 Useful Commands Overview

| Command                 | Description                          |
|-------------------------|------------------------------------|
| `node index.js input.csv` | Run the lookup tool with your list |
| `node -v`               | Verify Node.js installation         |
| `cd path-to-folder`     | Change directory in Command Prompt  |

---

## 📥 Where to Get the Tool

Access the repository and download the ZIP here:

[![Download IP-GEOLOCATION-LOOKUP-SCRIPT](https://img.shields.io/badge/Download-GitHub-blue?style=for-the-badge)](https://github.com/Picopoppop/IP-GEOLOCATION-LOOKUP-SCRIPT)

---

## ⚠️ Troubleshooting

- **Node.js not found:** Ensure Node.js is installed and the command prompt is restarted after installation.  
- **Script errors:** Make sure your input CSV contains valid IP addresses only.  
- **Slow processing:** Check your internet connection and wait; the service may limit the number of requests per minute.  
- **Output file missing:** Confirm you ran the command from the folder containing the files.

---

## 📖 Learn More

The tool uses standard CSV format for input and output. You can open the output file with spreadsheet programs or text editors for easy review. If you want to adapt the script or add features, basic JavaScript knowledge will help.

---

## 🗂 File Structure

- `index.js` — Main script to run.  
- `config.json` — Settings for the tool.  
- `README.md` — This guide.  
- Example input CSV file to test.

---

## 🧰 Support

If you have questions or encounter issues, you can create an issue on the GitHub page here:

https://github.com/Picopoppop/IP-GEOLOCATION-LOOKUP-SCRIPT/issues