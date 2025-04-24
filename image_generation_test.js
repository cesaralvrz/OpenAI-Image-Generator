import OpenAI from "openai";
import fs from "fs";
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const prompt = `
Un dibujo para un libro de niños de un estudiando 
junto a una bombilla con cuerpo y cara.
`;

const result = await openai.images.generate({
    model: "gpt-image-1",
    prompt,
    size: "1024x1024",
    quality: "medium",
});

// Save the image to a file
const image_base64 = result.data[0].b64_json;
const image_bytes = Buffer.from(image_base64, "base64");
fs.writeFileSync("kid-studying.png", image_bytes);