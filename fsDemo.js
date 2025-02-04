// import fs from "fs";
import fs from "fs/promises";

// readFIle() - callback
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFIleSync() - Synchronous version
// const data = fs.readFileSync('./test.txt' , 'utf-8')
// console.log(data)

// readFIleSync() - Promise .then() version
// fs.readFile("./test.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFIleSync() -  async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

readFile();

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, motherfucker!!!");
    console.log("File written to");
  } catch (error) {
    console.log(error);
  }
};

writeFile();

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nWelcome to paradise");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

appendFile()


