import fs from "fs"

export function readJson(filepath)
{
console.log("reading json file")
//read the file as text
const filecontent=fs.readFileSync(filepath,"utf-8")
const data=JSON.parse(filecontent)
return data;

}